import React from "react";

const Titles = () => {
  return (
    <section className="h-full bg-white dark:bg-gray-800">
      <div className="px-4 py-24 mx-auto max-w-7xl">
        <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
          <h1 className="mb-6 text-4xl font-extrabold leading-none tracking-normal text-gray-900 dark:text-white md:text-7xl md:tracking-tight">
            {" "}
            The{" "}
            <span className="block w-full text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 lg:inline">
              Number One Source
            </span>{" "}
            for all your favorite events.{" "}
          </h1>
          <p className="px-0 mb-6 text-lg text-gray-600 md:text-xl lg:px-24">
            {" "}
            Say hello to the number one source for all your favorite events. Buy or Sell 
            your tickets, find the best events near you or internationally{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Titles;
