import React from "react";

interface PostProps {
    id?: number,
    title: string,
    description: string,
    image: string
    category: string,
    backgroundColor: string
}

const Post = ({title, description, image, backgroundColor, category}: PostProps) => {
    return (
        <div className="relative flex flex-col items-start justify-end h-full col-span-12 overflow-hidden rounded-xl group md:col-span-6 xl:col-span-4">
      <a
        href="#_"
        className="object-fit block w-full transition duration-300 ease-in-out transform bg-center bg-cover h-80 hover:scale-110"
      >
        <img
          src={image}
          alt={title}
        />
      </a>
      <div className="relative z-20 w-full h-auto py-8 text-white bg-purple-500 border-t-0 border-yellow-200 px-7">
        <a
          href="#_"
          className="inline-block text-xs font-semibold absolute top-0 -mt-3.5 rounded-full px-4 py-2 uppercase text-purple-500 bg-white"
        >
          {category}
        </a>
        <h2 className="mb-5 text-5xl font-bold truncate">
          <a href="#_">{title}</a>
        </h2>
        <p className="mb-2 text-lg font-normal text-purple-100 opacity-100 truncate">
          {description}
        </p>
      </div>
    </div>
    )
}

export default Post;