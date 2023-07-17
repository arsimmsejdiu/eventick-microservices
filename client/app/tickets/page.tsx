"use client"

import React from "react";
import Head from "next/head";

const create = () => {
  return (
    <div className="flex flex-col h-full justify-center items-center mt-5 lg:h-4/5 pb-10">
      <Head>
        <title>Create Ticket</title>
      </Head>
      <div className=" flex lg:flex-row flex-col justify-center items-center bg-white lg:p-5 p-3 lg:w-4/5 w-full">
        <div className="bg-secondaryColor p-3 flex flex-0.7 w-full">
          <div className=" flex justify-center items-center flex-col border-2 border-dotted border-gray-300 p-3 w-full h-420">
            <label>
              <div className="flex flex-col items-center justify-center h-full">
                <div className="flex flex-col justify-center items-center">
                  <p className="font-bold text-2xl"></p>
                  <p className="text-lg">Click to upload</p>
                </div>

                <p className="mt-32 text-gray-400">
                  Recommendation: Use high-quality JPG, JPEG, SVG, PNG, GIF or
                  TIFF less than 20MB
                </p>
              </div>
              <input type="file" name="upload-image" className="w-0 h-0" />
            </label>
            <div className="relative h-full">
              <button
                type="button"
                onClick={() => console.log("")}
                className="absolute bottom-3 right-3 p-3 rounded-full text-xl cursor-pointer outline-none hover:shadow-md transition-all duration-500 ease-in-out"
              ></button>
            </div>
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-6 lg:pl-5 mt-5 w-full">
          <input
            type="text"
            placeholder="Add your title"
            className="outline-none text-2xl sm:text-3xl font-bold border-b-2 border-gray-200 p-2"
          />
          <input
            type="text"
            placeholder="Tell everyone what your Ticket is about"
            className="outline-none text-base sm:text-lg border-b-2 border-gray-200 p-2"
          />
          <input
            type="number"
            placeholder="Add a price for the ticket"
            className="outline-none text-base sm:text-lg border-b-2 border-gray-200 p-2"
          />

          <div className="flex flex-col">
            <div>
              <p className="mb-2 font-semibold text:lg sm:text-xl">
                Choose Ticket Category
              </p>
              <select className="outline-none w-4/5 text-base border-b-2 border-gray-200 p-2 rounded-md cursor-pointer">
                <option value="others" className="sm:text-bg bg-white">
                  Select Category
                </option>
                {/* {categories.map((item) => ( */}
                <option
                  className="text-base border-0 outline-none capitalize bg-white text-black "
                  value=""
                >
                  {/* value={item.name}
                    {item.name} */}
                </option>
                {/* ))} */}
              </select>
            </div>
            <div className="flex justify-end items-end mt-5">
              <button
                type="button"
                onClick={() => console.log("")}
                className="bg-red-500 text-white font-bold p-2 rounded-full w-32 outline-none"
              >
                Create Ticket
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default create;
