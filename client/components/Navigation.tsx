"use client"
import React from "react";
import Image from "next/image"
import {Sun} from "@/assets/page"
import Link from "next/link";

const Navigation = () => {
  const currentUser = true;
  const name = "Arsim";
  return (
    <section className="w-full px-3 antialiased bg-indigo-600 lg:px-6">
      <div className="mx-auto max-w-7xl">
        <nav
          x-data="{ showMenu: false }"
          className="flex items-center w-full h-24 select-none"
        >
          <div className="relative flex flex-wrap items-center justify-between w-full h-24 mx-auto font-medium md:justify-center">
            <a
              href="/"
              className="w-1/4 py-4 pl-6 pr-4 md:pl-4 md:py-0 cursor-pointer"
            >
              <span className="p-1 text-xl font-black leading-none text-white select-none">
                <span>EventPro</span>
                <span className="text-indigo-300">.</span>
              </span>
            </a>
            <div className="fixed top-0 left-0 z-40 items-center hidden w-full h-full p-3 text-xl bg-gray-900 bg-opacity-50 md:text-sm lg:text-base md:w-3/4 md:bg-transparent md:p-0 md:relative md:flex">
              <div className="flex-col w-full h-full overflow-hidden bg-white rounded-lg select-none md:bg-transparent md:rounded-none md:relative md:flex md:flex-row md:overflow-auto">
                <div className="flex flex-col items-center justify-center w-full h-full mt-12 text-center text-indigo-700 md:text-indigo-200 md:w-2/3 md:mt-0 md:flex-row md:items-center">
                  <a
                    href="#"
                    className="inline-block px-4 py-2 mx-2 font-medium text-left text-indigo-700 md:text-white md:px-0 lg:mx-3 md:text-center"
                  >
                    Tickets
                  </a>
                  <a
                    href="/features"
                    className="inline-block px-4 py-2 mx-2 font-medium text-left md:px-0 hover:text-indigo-800 md:hover:text-white lg:mx-3 md:text-center"
                  >
                    Find Events
                  </a>
                  {currentUser && (
                    <a
                      href="/dashboard/mytickets"
                      className="inline-block px-4 py-2 mx-2 font-medium text-left md:px-0 hover:text-indigo-800 md:hover:text-white lg:mx-3 md:text-center"
                    >
                      dashboard
                    </a>
                  )}

                  <a
                    href="/about"
                    className="inline-block px-4 py-2 mx-2 font-medium text-left md:px-0 hover:text-indigo-800 md:hover:text-white lg:mx-3 md:text-center"
                  >
                    About
                  </a>
                  <a
                    href="#"
                    className="inline-block px-4 py-2 mx-2 font-medium text-left md:px-0 hover:text-indigo-800 md:hover:text-white lg:mx-3 md:text-center"
                  >
                    Contact
                  </a>
                </div>
                {currentUser ? (
                  <div className="flex flex-col items-center justify-end w-full h-full pt-4 md:w-1/3 md:flex-row md:py-0">
                    <p className="w-full pl-6 mr-0 text-indigo-200 hover:text-white md:pl-0 md:mr-3 lg:mr-5 md:w-auto">
                      Welcome back, {name}
                    </p>
                    <a
                      href="/signout"
                      className="inline-flex items-center justify-center px-4 py-2 mr-1 text-base font-medium leading-6 text-indigo-600 whitespace-no-wrap transition duration-150 ease-in-out bg-white border border-transparent rounded-full hover:bg-white focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700"
                    >
                      Sign Out
                    </a>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-end w-full h-full pt-4 md:w-1/3 md:flex-row md:py-0">
                    <a
                      href="/signin"
                      className="w-full pl-6 mr-0 text-indigo-200 hover:text-white md:pl-0 md:mr-3 lg:mr-5 md:w-auto"
                    >
                      Sign In
                    </a>
                    <a
                      href="/signup"
                      className="inline-flex items-center justify-center px-4 py-2 mr-1 text-base font-medium leading-6 text-indigo-600 whitespace-no-wrap transition duration-150 ease-in-out bg-white border border-transparent rounded-full hover:bg-white focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700"
                    >
                      Sign Up
                    </a>
                  </div>
                )}
                
              </div>
              <Link href={"/"} onClick={() => console.log("")}>
                <Image src={Sun} alt="Sun" className="w-8 h-8 flex-col justify-center items-center ml-5"/>
              </Link>
            </div>
            <div className="absolute right-0 z-50 flex flex-col items-end w-10 h-10 p-2 mr-4 rounded-full cursor-pointer md:hidden hover:bg-gray-900 hover:bg-opacity-10">
              <svg
                className="w-6 h-6"
                x-show="!showMenu"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                x-cloak=""
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
              <svg
                className="w-6 h-6"
                x-show="showMenu"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                x-cloak=""
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Navigation;
