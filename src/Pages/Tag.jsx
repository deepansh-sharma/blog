import React from "react";
import Header from "../component/Header";
import { useLocation, useNavigate } from "react-router-dom";
import Blogs from "../component/Blogs";
import Next from "../component/Next";

const Tag = () => {
  const navigator = useNavigate();
  const location = useLocation();
  const tag = location.pathname.split("/").at(-1);
  return (
    <div>
      <Header />
      <div className="w-11/12  pt-8 flex flex-col  mt-[4rem]  mb-[-5rem]">
        <div className="font-bold text-1xl flex gap-2 text-center">
          <button
            className="font-light rounded-md border-2 px-4 py-1"
            onClick={() => navigator(-1)}
          >
            Back{" "}
          </button>
          <h1 className="text-lg">
            Blog on #<span>{tag}</span>
          </h1>
        </div>
      </div>
      <Blogs></Blogs>
      <Next></Next>
    </div>
  );
};

export default Tag;
