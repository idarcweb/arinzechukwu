"use client";
import Page from "../_components/layouts/pageLayout";
import { PiSuitcaseDuotone } from "react-icons/pi";
import { HiMiniAcademicCap } from "react-icons/hi2";
import { IconBaseProps } from "react-icons";
import { RxCalendar } from "react-icons/rx";
import { BiCodeAlt } from "react-icons/bi";
/* import Image from "next/image"; */
import Button from "../_components/ui/button";
import { motion } from "framer-motion";

const page = () => {
  return (
    <>
      <Page
        px=""
        title="Resume"
        text="Proactive junior computer engineer with 2 years of experience in web design and optimization. Skilled in Python, and JavaScript, specializing in performance enhancement and high-performance applications. Good at optimizing algorithms, solving technical issues, and improving user experiences. Committed to leveraging advanced technologies for innovation and impactful solutions."
      >
        <div className="grid place-items-center">
          <Button
            className="mb-12 py-2 font-Mont hover:text-white/70"
            outline={false}
          >
            Download CV
          </Button>
        </div>
        <section className="grid lg:grid-cols-2 font-Mont w-full text-white/70 gap-12 transition-all duration-500">
          <div className="flex flex-col w-full">
            <Header title="Education" icon={HiMiniAcademicCap} />

            <Resume
              tag="1"
              title="Bachelor of Computer Engineering"
              text="Abia State University, Abia State, Nigeria"
              year="2017 - 2022"
            />
            <Resume
              tag="2"
              title="Front-End Web Developer"
              text="Self Taught"
              year="2022 - 2024"
            />
            <Resume
              tag="3"
              title="HSE Competence Development Training level(2)"
              text="ISPON act 2014"
              year="2019"
            />
          </div>
          <div className="flex flex-col w-full">
            <Header title="Experience" icon={PiSuitcaseDuotone} />

            <Resume
              tag="1"
              title="Bachelor of Computer Engineering"
              text="Abia State University, Abia State, Nigeria"
              year="2017 - 2022"
            />
            <Resume tag="2" title="LLoydAnt" text="Internship" year="2021" />
            <Resume
              tag="3"
              title="HSE Competence Development Training level(2)"
              text="ISPON act 2014"
              year="2024"
            />
          </div>
        </section>
        <section className="grid lg:grid-cols-2 font-Mont w-full text-white/70 gap-12 transition-all duration-500 mb-12 mt-20 ">
          <div className="flex flex-col gap-6 w-full">
            <Header title="Programming Skills" icon={BiCodeAlt} />

            <Skills
              skill="CSS"
              percent={80}
              text={["tailwind[shadcn]", "[mui, ant]", "Gsap", "..."]}
            />
            <Skills
              skill="javascript"
              percent={80}
              text={["NextJs", "ReactJs", "Typescript", "Express"]}
            />
            <Skills skill="Git" percent={60} text={["..."]} />
            <Skills
              skill="AWS"
              percent={40}
              text={["Elastic Beanstalk", "AWS Lambda"]}
            />
            <Skills skill="python" percent={40} text={["..."]} />
            <Skills skill="C++" percent={30} text={["..."]} />
            <Skills
              skill="Understanding Backend Integrations"
              percent={80}
              text={["Prisma", "SQL", "PHP", "Schema[zod, yup]"]}
            />
          </div>
          <div className="flex flex-col gap-6 w-full">
            <Header title="Soft Skills" icon={BiCodeAlt} />

            <Skills skill="Communication" percent={50} text={undefined} />
            <Skills skill="Problem Solving" percent={60} text={undefined} />
            <Skills skill="Product Management" percent={20} text={undefined} />
            <Skills skill="Team Collaboration" percent={70} text={undefined} />
            <Skills skill="Continous Learning" percent={90} text={undefined} />
          </div>
        </section>
      </Page>
    </>
  );
};

export default page;

type HeaderProps = {
  icon: React.ComponentType<IconBaseProps>;
  title: string;
};

const Header: React.FC<HeaderProps> = ({ icon: Icon, title }) => {
  return (
    <span className="px-2 flex capitalize items-center gap-6 font-Mont font-bold text-xl">
      <Icon size={32} /> {title}
    </span>
  );
};

type ResumeProps = {
  tag: string;
  year: string;
  title: string;
  text: string;
};

const Resume: React.FC<ResumeProps> = ({ tag, title, text, year }) => {
  return (
    <div className="flex items-center gap-3 mt-6 relative">
      <span className="relative -top-6">
        <div className="rounded-full relative w-14 h-0.5  bg-liteport/70" />
        <div className="absolute left-[50%] -top-4 w-[.125rem] h-28 rounded-full bg-liteport/70" />

        <span className="absolute w-5 z-10 left-[34%] h-5 -top-2 rounded-full bg-liteport text-darkport grid place-items-center text-xs font-Esetban">
          {tag}
        </span>
      </span>
      <span className="flex flex-col gap-1">
        <h1 className="font-bold text-base">{title}</h1>
        <p className="text-sm ">{text}</p>
        <p className="flex items-center text-xs text-lightport/70 gap-2">
          <RxCalendar />
          {year}
        </p>
      </span>
    </div>
  );
};

type SkillsProps = {
  skill: string;
  percent: number;
  text: string[] | undefined;
};

const Skills: React.FC<SkillsProps> = ({ skill, percent, text }) => {
  return (
    <div className="relative flex flex-col mt-3 overflow-hidden shadow-lg">
      <h1 className="text-base tracking-wide my-3 font-Mont text-white/70 capitalize">
        {skill}
      </h1>

      <div className="relative w-[100%] pointer-events-none">
        <motion.span className="absolute top-0 gap-1 mt-1.5 ml-2 rounded-md flex items-center text-sm ">
          {text?.map((text: string, idx) => (
            <motion.p
              initial={{ x: -200 }}
              animate={{ x: 0 }}
              transition={{
                duration: 4,
                ease: "easeInOut",
                delayChildren: 0.05,
              }}
              key={idx}
              className="bg-portblack/40 font-Mont z-10 rounded-sm px-1 text-liteport/70"
            >
              {text}
            </motion.p>
          ))}
        </motion.span>

        <div className=" bg-thickport/50 h-8 rounded-xl" />

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percent}%` }}
          transition={{ duration: 2, ease: "easeInOut" }}
          /* style={{
            background: "radial-gradient(circle at 90%  70%, #1f3428, #0c0d0c",
          }} */
          className={`absolute bg-black/70 top-0 h-8 rounded-xl `}
        />
      </div>
    </div>
  );
};

/*  */