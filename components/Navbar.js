import Link from "next/link";
import React from "react";
import { useState } from "react";
import Container from "./Container";
export default function Navbar() {
  const [dropDown, setDropDown] = useState(false);
  const [offCanvas, setOffCanvas] = useState(false);
  const [search, setSearch] = useState(false);

  const dropdownList = [
    {
      text: "Books",
      href: "#",
    },
    {
      text: "Open Source",
      href: "#",
    },
    {
      text: "Internet",
      href: "#",
    },
  ];

  return (
    <>
      <nav className=" py-10">
        <Container>
          <div className="flex items-center">
            <div className=" w-3/12 lg:hidden">
              <button
                onClick={() => {
                  setOffCanvas(!offCanvas);
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.4">
                    <path
                      d="M3 12H21"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3 6H21"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3 18H21"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
              </button>
            </div>
            <div className=" lg:w-2/12 w-6/12 ">
              <Link href={"/"}>
                <a className="flex items-center justify-center lg:justify-start">
                  <div className=" w-10 h-10 bg-gray-500 rounded flex items-center justify-center mr-4 shadow-2xl">
                    E
                  </div>
                  Epictetus
                </a>
              </Link>
            </div>
            <div className=" w-3/12 lg:hidden text-right">
              <button
                className=" inline-block"
                onClick={() => {
                  setSearch(!search);
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.4">
                    <path
                      d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M21 21L16.65 16.65"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
              </button>
            </div>
            <div
              className={`lg:w-7/12 lg:bg-none lg:static lg:h-auto lg:p-0  w-full bg-gradient-to-b from-gray-600 to-gray-900 fixed top-0 h-full p-10 transition-all  ${
                offCanvas ? "left-0" : "-left-full"
              } `}
            >
              <button
                className=" absolute top-10 right-10 lg:hidden"
                onClick={() => {
                  setOffCanvas(!offCanvas);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-x"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              <ul className=" lg:space-x-10 flex lg:items-center flex-col lg:flex-row space-y-4 lg:space-y-0 ">
                <li>
                  <Link href={"/posts"}>
                    <a className=" hover:underline">UI Design</a>
                  </Link>
                </li>
                <li>
                  <Link href={"/posts"}>
                    <a className=" hover:underline">Frontend</a>
                  </Link>
                </li>
                <li>
                  <Link href={"/posts"}>
                    <a className=" hover:underline">Backend</a>
                  </Link>
                </li>
                <li className=" relative">
                  <a
                    className=" hover:underline cursor-pointer flex items-center"
                    onClick={() => setDropDown(!dropDown)}
                  >
                    Lainnya
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className=" ml-1"
                    >
                      <path
                        d="M4 6L8 10L12 6"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                  {dropDown && (
                    <ul className=" absolute w-[200px] bg-gray-700 rounded shadow-2xl mt-4">
                      {dropdownList.map(({ text, href }) => (
                        <li
                          key={text}
                          className="border-b border-white/5 last:border-0"
                        >
                          <a
                            href={href}
                            className=" hover:bg-gray-800 delay-100 transition-all flex py-3 px-6  "
                          >
                            {text}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              </ul>
            </div>
            <div
              className={`lg:w-3/12 lg:static lg:px-0 absolute w-full left-0 px-10 transition-all ${
                search ? "top-10" : "-top-20"
              } `}
            >
              <button
                className=" absolute top-3 right-14 lg:hidden"
                onClick={() => {
                  setSearch(!search);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-x"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              <input
                type="text"
                className=" bg-gray-700 py-3 w-full lg:rounded-full rounded-xl bg-search pl-12"
                placeholder="Search ..."
              />
            </div>
          </div>
        </Container>
      </nav>
    </>
  );
}
