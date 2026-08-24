export const fetchNews = async (query) => {
    const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&language=en`;

    const response = await fetch(url, {
        headers: {
            "X-Api-Key": process.env.NEWS_API_KEY
        }
    });

    if (!response.ok) {
        throw new Error(`NewsAPI request failed: ${response.status}`);
    }

    const data = await response.json();

    const articles = data.articles.map((article) => ({
        title: article.title,
        description: article.description,
        category: "Politics",
        source: article.url,
        publishedAt: article.publishedAt
    }));

    return data.articles;
};
