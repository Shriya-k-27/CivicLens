import CivicUpdate from "../models/CivicUpdate.js";
import { fetchNews } from "./newsService.js";

export const syncNewsData = async () => {
    const articles = await fetchNews("Indian politics");

const civicUpdates = articles.map((article) => ({
    title: article.title,
    description: article.description,
    category: "Politics",
    source: article.url,
    publishedAt: article.publishedAt
}));

const existingUpdates = await CivicUpdate.find({
    source: {
        $in: civicUpdates.map(article => article.source)
    }
}).select("source");

const existingSources = new Set(
    existingUpdates.map(update => update.source)
);

const newArticles = civicUpdates.filter(
    article => !existingSources.has(article.source)
);

let savedArticles = [];

if (newArticles.length > 0) {
    savedArticles = await CivicUpdate.insertMany(newArticles);
}

return {
    fetched: articles.length,
    added: savedArticles.length
};
};