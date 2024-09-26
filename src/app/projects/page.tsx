import Page from "../_components/layouts/pageLayout";
import { projects } from "../../data/index";
import Image from "next/image";
import { TbLocation } from "react-icons/tb";

const page = () => {
  return (
    <Page title="Projects" text="" px="px-12 ">
      <div className="flex transition-all duration-700 flex-wrap items-center xl:flex-row  justify-center py-4 gap-16 lg:gap-10 ">
        {projects.map((project) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] md:h-[30rem] flex items-center flex-col justify-center w-[80vw] sm:w-[60vw] md:w-[50vw] lg:w-[30vw]  rounded-xl shadow-lg px-6  overflow-hidden transition-all duration-700"
            key={project.id}
          >
            <div className="relative flex items-center justify-center w-[80vw] sm:w-[60vw] md:w-[50vw] lg:w-[30vw] px-6 rounded-xl overflow-hidden h-[25vh] lg:h-[25vh] mb-10 transition-all duration-700">
              <div className="relative w-full h-full overflow-hidden  rounded-xl bg-opacity-0 bg-[#1f3428]/40">
                {/*  <Image fill src="/bg.png" alt="bgimg" /> */}
                <div className="absolute z-50 top-0 left-52"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(172,219,83,0.3692660550458715) 9%, rgba(247,255,251,0.6651376146788991) 24%); ",
                  }}
                />
              </div>
              <Image fill src={project.img} alt="cover" />
            </div>
            <h1 className="font-semibold  font-Mont lg:text-2xl md:text-xl text-base text-white/70 line-clamp-6 transition-all duration-700">
              {project.title}
            </h1>

            <p
              className="lg:text-lg text-white/70 font-Fredoka transition-all duration-700 font-light text-sm line-clamp-2 "
              style={{
                margin: "1vh 0",
              }}
            >
              {project.des}
            </p>

            <div className="transition-all duration-700 flex items-center justify-between mt-7 mb-3 lg:flex-col-reverse">
              <div className="flex justify-start items-center">
                {project.iconLists.map((icon, index) => (
                  <div
                    key={index}
                    className="border border-portgray/70 rounded-full bg-portblack w-10 h-10 flex justify-center items-center"
                    style={{
                      transform: `translateX(-${5 * index + 2}px)`,
                    }}
                  >
                    <Image src={icon} alt="icon5" className="p-2" fill />
                  </div>
                ))}
              </div>

              <a
                href={project.link}
                className="flex justify-center mb-6 transition-all duration-700 lg:scale-95 items-center group"
              >
                <p className="flex lg:text-xl font-Fredoka md:text-base text-sm text-purple text-white/70 group-hover:font-medium transition-all duration-700">
                  Check Live Site
                </p>
                <TbLocation
                  className="text-white/70 animate-bounce duration-1000 ms-3"
                  size={24}
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </Page>
  );
};

export default page;
