import React from "react";
import { NavLink } from "react-router-dom";

const BlogDetail = ({ post }) => {
  return (
    <div key={post.id} className="mb-8 mt-[5.5rem]">
      <NavLink to={`/blog/${post.id}`}>
        <p className="font-bold text-xl mb-2">{post.title}</p>
      </NavLink>
      <p className="text-sm mt-1">
        By <span className="italic">{post.author}</span> on{" "}
        <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}>
          <span className="underline font-bold">{post.category} </span>
        </NavLink>
      </p>
      <p className="text-sm mt-1">Posted on {post.date}</p>
      <p className="text-md mt-4">{post.content}</p>
      <div className="flex flex-wrap gap-2 mt-2">
        {post.tags.map((tag, index) => (
          <NavLink key={index} to={`/tags/${tag.replaceAll(" ", "-")}`}>
            <span className="text-blue-700 underline font-bold text-xs mt-1">
              {` #${tag}`}
            </span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default BlogDetail;
