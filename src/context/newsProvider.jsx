import { useState, useEffect, createContext } from "react";
import axios from "axios";

const NewsContext = createContext();

const NewsProvider = ({ children }) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchNews = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=75b48d0c6cdc4e0e905535816ba0a4d9`;
      setLoading(true);
      const res = await axios.get(url);
      setNews(res.data.articles);

      setLoading(false);
    };
    fetchNews();
  }, []);

  const searchNews = async (category) => {
    try {
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=75b48d0c6cdc4e0e905535816ba0a4d9`;
      setLoading(true);
      const res = await axios.get(url);
      setNews(res.data.articles);

      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <NewsContext.Provider value={{ searchNews, news, loading }}>
      {children}
    </NewsContext.Provider>
  );
};

export { NewsProvider };
export default NewsContext;
