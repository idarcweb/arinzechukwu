"use client";

import MiniNavigation from "../mini_navbar/navLayout";
import Sidebar from "./sidebar";

const PortfolioWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div
        className="relative flex text-gray-900 w-full min-h-screen transition-all overflow-auto duration-500"
        style={{
          background: "radial-gradient(circle at 90%  70%, #1f3428, #0c0d0c",
        }}
      >
        <Sidebar />
        <main className="relative transition-all duration-1000 min-h-screen flex flex-col w-full h-auto md:ml-[256px] md:w-calc-10 ">
          <MiniNavigation />
          {children}
        </main>
      </div>
    </>
  );
};

export default PortfolioWrapper;
/* #1b1d1e */