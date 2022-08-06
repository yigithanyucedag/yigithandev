import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="max-w-5xl mx-auto px-4">
        <Navbar />
        <main className="mt-10">{children}</main>
        <footer className="mt-40 mb-20">
          <span className="block text-center opacity-70 font-light">
            Bu web sitesinin kaynak kodlarına{" "}
            <a
              href="https://github.com/yigithanyucedag/yigithandev"
              target="_blank"
              rel="noreferrer noopener"
              className="hover:text-blue-600 hover:underline transition-colors font-medium"
            >
              Github üzerinden
            </a>{" "}
            ulaşabilirsiniz.
          </span>
        </footer>
      </div>
    </>
  );
};

export default Layout;
