"use client";

import { useState } from "react";
import { Portal } from "../portal/portal.component";

export default function TopMenuPopup() {
  const [active, setActive] = useState(false);
  const toggleActive = () => setActive(!active);

  return (
    <>
      <button
        className="middle none relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] rounded-lg text-center font-sans text-xs font-medium uppercase text-blue-gray-500 transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none md:hidden"
        data-collapse-target="sticky-navar"
        onClick={toggleActive}>
        <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </span>
      </button>
      {active && (
        <Portal>
          <ul className="bg-white h-full w-full px-8 mt-2 mb-4 flex flex-col gap-2 pb-2">
            <button onClick={() => toggleActive()}>Close</button>
            <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
              <a className="flex items-center" href="#">
                Posts
              </a>
            </li>
            <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
              <a className="flex items-center" href="#">
                Categories
              </a>
            </li>
            <button
              className="mb-2 block w-full rounded-lg bg-gradient-to-tr from-pink-600 to-pink-400 py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              data-ripple-light="true">
              <span>Surprise me!</span>
            </button>
          </ul>
        </Portal>
      )}
    </>
  );
}
