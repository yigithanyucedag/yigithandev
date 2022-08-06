import React from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Link from "next/link";
import cx from "classnames";
import { FaHamburger } from "react-icons/fa";

const ROUTES = {
  "/": "Anasayfa",
  "/projects": "Projeler",
  "/blog": "Blog",
  "/tools": "Ekipmanlar",
};

export default function Navbar() {
  const { pathname } = useRouter();
  const clearSlash = pathname.split("/")[1];
  const pathName = clearSlash ? `/${clearSlash}` : "/";

  return (
    <header>
      <div className="flex items-center justify-between mt-5 flex-col sm:flex-row space-y-5 sm:space-y-0">
        <Link href="/">
          <a className="font-semibold text-transparent text-2xl bg-clip-text bg-gradient-to-l hover:bg-gradient-to-r from-cyan-500 to-blue-600">
            yigithan.dev
          </a>
        </Link>
        <div className="relative bg-zinc-100 dark:bg-zinc-800 rounded-md p-1.5 w-full sm:max-w-md flex flex-col sm:flex-row">
          {Object.entries(ROUTES).map(([route, title]) => {
            let isActive = pathName === route;
            return (
              <Link href={route} key={route} passHref prefetch={false}>
                <button className="flex flex-1 p-1.5 relative bg-transparent justify-center">
                  {isActive && (
                    <motion.span
                      layoutId="bg"
                      initial={false}
                      className="absolute left-0 top-0 h-full w-full rounded-md bg-white dark:bg-zinc-600"
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 50,
                        mass: 2,
                      }}
                    />
                  )}
                  <span
                    className={cx(
                      "z-10 transition-opacity duration-200 ease-in-out",
                      isActive ? "opacity-100 font-medium" : "opacity-70"
                    )}
                  >
                    {title}
                  </span>
                </button>
              </Link>
            );
          })}
        </div>
        {/* <button>
          <FaHamburger className="w-6 h-6 text-zinc-500" />
        </button> */}
      </div>
    </header>
  );
}
