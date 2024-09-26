import React from "react";
import Grid from "../_components/grid";
import { Copyright } from "lucide-react";
import Section3 from "./_sections/section3";
import Section2 from "./_sections/section2";
import Section1 from "./_sections/section1";

const page = () => {
  return (
    <main className="flex flex-col px-12 md:px-12  gap-12 py-12 items-center justify-center  duration-500 transition-all mt-6 md:mt-0 relative">
      <Section1 />
      <Section2 />
      <Grid />
      <Section3 />
      <h1 className="font-Fredoka flex justify-end w-full relative -bottom-3 lg:-bottom-3   text-liteport/20 items-center text-sm">
        <Copyright size={12} />
        {new Date().getUTCFullYear().toString()} arinzewebdev
      </h1>
    </main>
  );
};

export default page;
