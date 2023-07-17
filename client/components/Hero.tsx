import {NextPage} from 'next'
import React from "react";

const Hero: NextPage = () => {
  return (
    <section className="w-full -mt-2 antialiased bg-indigo-600 lg:px-6">
      <div className="container py-32 mx-auto text-center sm:px-4">
        <h1 className="text-4xl font-extrabold leading-10 tracking-tight text-white sm:text-5xl sm:leading-none md:text-6xl xl:text-7xl">
          <span className="block">Simplify the way you</span>{" "}
          <span className="relative inline-block mt-3 text-white">
            buy your tickets
          </span>
        </h1>
        <div className="max-w-lg mx-auto mt-6 text-sm text-center text-indigo-200 md:mt-12 sm:text-base md:max-w-xl md:text-lg xl:text-xl">
          Say hello to the number one source for all your favorite events. Buy
          or Sell your tickets, find the best events near you or internationally
        </div>
      </div>    
    </section>
  );
};

export default Hero;
