import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Next = () => {
  const { page, handlePageChange, totalPage } = useContext(AppContext);

  return (
    <div className="w-full flex justify-center items-center fixed bottom-0 left-0 right-0 bg-white p-4">
      <div className="flex justify-between w-full max-w-[670px] mx-auto">
        <div className="flex gap-2">
          {page > 1 && (
            <button
              className="rounded-md border-2 px-4 py-1"
              onClick={() => handlePageChange(page - 1)}
            >
              Previous
            </button>
          )}
          {page < totalPage && (
            <button
              className="rounded-md border-2 px-4 py-1"
              onClick={() => handlePageChange(page + 1)}
            >
              Next
            </button>
          )}
        </div>
        <p className="font-bold text-sm">
          Page {page} of {totalPage}
        </p>
      </div>
    </div>
  );
};

export default Next;
