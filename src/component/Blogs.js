import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";
import BlogDetail from "./BlogDetail";

const Blogs = () => {
  const { posts, loading } = useContext(AppContext);

  return (
    <div className="w-full max-w-[670px] p-4 mx-auto">
      {loading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <div className="text-center">
          <p>No Posts Found</p>
        </div>
      ) : (
        <div className="space-y-6">
          {posts.map((post) => (
            <BlogDetail key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Blogs;
