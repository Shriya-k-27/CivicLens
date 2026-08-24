import { fetchNews } from "./services/newsService.js";
import dotenv from "dotenv";

dotenv.config();

const test = async () => {
    try {
        const articles = await fetchNews("Indian politics");

        console.log(articles);
    } catch (error) {
        console.error(error.message);
    }
};

test();