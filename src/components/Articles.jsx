import { useEffect, useState } from "react";
import fetchArticlesWithTopic from "../articles-api";
import ArticleSearchForm from "./ArticleSearchForm";
import ArticleLoader from "./ArticleLoader";
import ArticleError from "./ArticleError";
import ArticleList from "./ArticleList";

export default function Articles() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async (topic) => {
    async function fetchArticles() {
      try {
        setArticles([]);
        setError(false);
        setLoading(true);
        const data = await fetchArticlesWithTopic(topic);
        setArticles(data);
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchArticles();
  };

  return (
    <div>
      <h1>Latest articles</h1>
      <ArticleSearchForm onSearch={handleSearch} />
      {loading && <ArticleLoader />}
      {error && <ArticleError />}
      {articles.length > 0 && <ArticleList articles={articles} />}
    </div>
  );
}
