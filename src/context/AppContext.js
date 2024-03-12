import { baseUrl } from "../baseUrl";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export const AppContext = createContext();
export default function AppContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(null);
  const navigate = useNavigate();
  const value = {
    loading,
    setLoading,
    posts,
    setPosts,
    page,
    setPage,
    totalPage,
    setTotalPage,
    fetchBlogPosts,
    handlePageChange,
  };

  async function fetchBlogPosts(page, tag = null, category) {
    setLoading(true);
    try {
      let url = `${baseUrl}?page=${page}`;
      if (tag) {
        url += `&tag=${tag}`;
      }

      if (category) {
        url += `&category=${category}`;
      }
      console.log("printing the final URL");
      console.log(url);
      const { data } = await axios.get(url);
      console.log(url);
      console.log(data);
      setPage(data.page);
      setPosts(data.posts);
      setTotalPage(data.totalPages);
    } catch (e) {
      console.log("Error !" + e);
      setPage(1);
      setPosts([]);
      setTotalPage(null);
    }
    setLoading(false);
  }

  function handlePageChange(page) {
    navigate({ search: `?page=${page}` });
    setPage(page);
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
