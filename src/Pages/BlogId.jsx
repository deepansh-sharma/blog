// BlogId.js
import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "../component/Header";
import BlogDetail from "../component/BlogDetail";
import Next from "../component/Next";
import { AppContext } from "../context/AppContext";
import Spinner from "../component/Spinner";

const BlogId = () => {
  const newBaseUrl = "https://codehelp-apis.vercel.app/api/";
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const { setLoading, loading } = useContext(AppContext);
  const location = useLocation();
  const navigate = useNavigate();

  const blogId = location.pathname.split("/").at(-1);

  async function fetchRelatedBlogs() {
    setLoading(true);
    let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
    console.log("URL is: ");
    console.log(url);
    try {
      const res = await fetch(url);
      const data = await res.json();

      setBlog(data.blog);
      setRelatedBlogs(data.relatedBlogs);
    } catch (error) {
      console.log("Error occurred in blog id API call");
      setBlog(null);
      setRelatedBlogs([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    if (blogId) {
      fetchRelatedBlogs();
    }
  }, [location.pathname]);

  return (
    <div className="w-11/12 max-w-[670px] mx-auto py-8">
      <Header />
      <div className="pt-8">
        <div className="mt-5 font-bold flex items-center gap-4 mb-4">
          <button
            className="font-light  text rounded-md border-2 px-4 py-2"
            onClick={() => navigate(-1)}
            style={{ zIndex: 1 }}
          >
            Back
          </button>
          <h1 className="text-xl">Blog Details</h1>
        </div>
      </div>

      {loading ? (
        <Spinner />
      ) : blog ? (
        <div>
          <BlogDetail post={blog} />
          {relatedBlogs.length > 0 && (
            <div>
              <h2 className="font-bold text-xl mt-6">Related Blogs</h2>
              {relatedBlogs.map((post) => (
                <div key={post.id} className="mt-4">
                  <BlogDetail post={post} />
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="mt-8">
          <p>No Blog Found</p>
        </div>
      )}

      <Next />
    </div>
  );
};

export default BlogId;
