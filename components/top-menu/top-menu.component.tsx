import Link from "next/link";
import EmersoftSvg from "../svg/emersoft.svg";

export default function TopMenu() {
  return (
    <>
      <nav
        className="flex justify-center sticky inset-0 z-10 h-max w-full max-w-full rounded-none
         border border-white/80 bg-white bg-opacity-80 py-2 px-4 text-white shadow-md backdrop-blur-2xl
         backdrop-saturate-200 md:px-8 md:py-4">
        <div className="flex items-center text-gray-900 container justify-start">
          <a
            href="/"
            className="flex items-center mr-4 cursor-pointer py-1.5 font-sans text-base font-medium leading-relaxed text-inherit antialiased">
            <EmersoftSvg className="mr-2" width={80} height={40} />
            Blog
          </a>
        </div>
        <ul className="flex items-center gap-6">
          <li className="block p-1 text-gray-800 text-sm font-normal leading-normal text-inherit antialiased hover:subpixel-antialiased">
            <Link className="flex items-center" href="/">
              Posts
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
