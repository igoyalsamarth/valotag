import { useParams } from "react-router-dom";
import news from '../database/news.json'

export default function NewsInfo() {
    const {id} = useParams();

    const specificNews = news.filter((Item) => {
        return(Item['news-serial'] === Number(id));
    });

    return(
        <h1 className="text-white">{specificNews[0]['news-heading']}</h1>
    );
}