import Link from "next/link";
import EmersoftSvg from "../svg/emersoft.svg";
import TopMenuPopup from "../top-menu-popup/top-menu-popup.component";

export default function TopMenu() {
  return (
    <>
      <nav
        className="flex justify-center sticky inset-0 z-10 block h-max w-full max-w-full rounded-none
         border border-white/80 bg-white bg-opacity-80 py-2 px-4 text-white shadow-md backdrop-blur-2xl
         backdrop-saturate-200 md:px-8 md:py-4">
        <div className="flex items-center text-gray-900 container justify-stretch">
          <a
            href="#"
            className="flex items-center mr-4 block cursor-pointer py-1.5 font-sans text-base font-medium leading-relaxed text-inherit antialiased">
            <EmersoftSvg className="mr-2" width={80} height={40} />
            Blog
          </a>
          <ul className="ml-auto hidden items-center gap-6 md:flex">
            <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
              <Link className="flex items-center" href="/posts">
                Posts
              </Link>
            </li>
            <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
              <Link className="flex items-center" href="/categories">
                Categories
              </Link>
            </li>
          </ul>
          <TopMenuPopup />
        </div>
      </nav>
    </>
  );
}
