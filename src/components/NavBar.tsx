"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function NavBar() {
  const [auth, setAuth] = useState(false);
  useEffect(() => {
    const savedItems = localStorage.getItem("items");
    if (savedItems) {
      const items = JSON.parse(savedItems);
      if (items.token) {
        setAuth(true);
      } else {
        setAuth(false);
      }
    }
  }, [auth]);


  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full text-sm py-4  bg-neutral-800 fixed mb-52 z-50">
      <nav
        className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between"
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          <Link
            className="flex-none text-xl font-semibold  text-yellow-300"
            href="/"
          >
            Recipes Go
          </Link>
          <div className="sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-x-2 rounded-lg border bg-black  shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none  bg-transparent  border-neutral-700  text-white  hover:bg-white/10"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        <div
          id="navbar-collapse-with-animation"
          className={`hs-collapse overflow-hidden transition-all duration-300 basis-full grow sm:block ${
            isOpen ? "" : "hidden"
          } `}
        >
          <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
            <Link
              onClick={() => setIsOpen(!isOpen)}
              className="font-medium text-yellow-300"
              href="/"
              aria-current="page"
            >
              Landing
            </Link>
            <Link
              onClick={() => setIsOpen(!isOpen)}
              className="font-medium text-neutral-400  hover:text-neutral-500"
              href="/Home"
            >
              Home
            </Link>
            {auth == true ? (
              <Link
                onClick={() => setIsOpen(!isOpen)}
                className="font-medium  text-neutral-400  hover:text-neutral-500"
                href="/Profile"
              >
                Profile
              </Link>
            ) : (
              <Link
                onClick={() => setIsOpen(!isOpen)}
                className="font-medium  text-neutral-400  hover:text-neutral-500"
                href="/SignIn"
              >
                Sing In
              </Link>
            )}
            {/* <button className="font-medium  text-neutral-400  hover:text-neutral-500" >
              Log Out
            </button> */}
          </div>
        </div>
      </nav>
    </header>
  );
}
