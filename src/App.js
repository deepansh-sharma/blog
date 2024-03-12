import "./App.css";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import { Route, Routes } from "react-router-dom";
import Category from "./Pages/Category";
import { useSearchParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Tag from "./Pages/Tag";
import Home from "./Pages/Home";
import Blog from "./Pages/BlogId";
export default function App() {
  const { fetchBlogPosts } = useContext(AppContext);
  const [searchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const page = searchParams.get("page") ?? 1;

    if (location.pathname.includes("tags")) {
      //iska matlab tag wala page show krna h
      const tag = location.pathname.split("/").at(-1).replaceAll("-", " ");
      fetchBlogPosts(Number(page), tag);
    } else if (location.pathname.includes("categories")) {
      const category = location.pathname.split("/").at(-1).replaceAll("-", " ");
      fetchBlogPosts(Number(page), null, category);
    } else {
      fetchBlogPosts(Number(page));
    }
  }, [location.pathname, location.search]);

  return (
    <div className="w-full h-full flex flex-col gap-y-1 justify-center items-center">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories/:category" element={<Category />} />
        <Route path="/tags/:tagid" element={<Tag />} />
        <Route path="/blog/:blogid" element={<Blog />} />
      </Routes>
    </div>
  );
}
