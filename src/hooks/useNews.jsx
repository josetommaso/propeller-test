import { useContext } from "react";
import NewsContext from "../context/newsProvider";

const useNews = () => {
  return useContext(NewsContext);
};

export default useNews;
