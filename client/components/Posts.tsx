import React from "react";
import Post from "./Post";
import { posts } from "@/data/PostData";
import CategoryTags from "./CategoryTags";

const Posts = () => {
  return (
    <section className="relative w-full bg-white">
      <div className="absolute w-full h-32 bg-gradient-to-b from-gray-100 to-white"></div>
      <div className="relative w-full px-5 py-10 mx-auto sm:py-12 md:py-16 md:px-10 max-w-7xl">
        <h1 className="mb-1 text-4xl font-extrabold leading-none text-gray-900 lg:text-5xl xl:text-6xl sm:mb-3">
          <a href="#_">The Event that you wanted</a>
        </h1>
        <p className="text-lg font-medium text-gray-500 sm:text-2xl">
          Choose your favorite event and get the best deals.
        </p>
        <div className="inline-flex w-full -mt-20 items-center justify-between">
          <div className="hidden lg:inline-flex mt-5 -mb-20 space-x-2 text-gray-800 whitespace-nowrap">
            {posts.map((post) => (
              <CategoryTags key={post.id} category={post.category} />
            ))}
          </div>
          <input
            type="text"
            name="search"
            className="block w-80 px-4 py-3 border mt-24 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
            placeholder="Search tickets .. "
          ></input>
        </div>

        <div className="grid h-full grid-cols-12 gap-10 pb-10 mt-8 sm:mt-16">
          {posts.map((post) => (
            <Post
              key={post.id}
              title={post.title}
              description={post.description}
              image={post.image}
              category={post.category}
              backgroundColor={post.backgroundColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Posts;
