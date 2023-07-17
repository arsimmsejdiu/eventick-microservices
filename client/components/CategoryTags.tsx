import React from "react";

const CategoryTags = ({ category }: any) => {
  return (
    <p
      className="px-4 py-2 border bg-slate-100 rounded-full cursor-pointer hover:shadow-lg active:scale-95 
        active:bg-red-50 transition transform duration-100 ease-out"
    >
      {category}
    </p>
  );
};

export default CategoryTags;
