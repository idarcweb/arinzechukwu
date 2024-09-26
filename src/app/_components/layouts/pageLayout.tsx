import { CgCopyright } from "react-icons/cg";

type Props = {
  title: string;
  text: string | "";
  children: React.ReactNode;
  px: string;
};
const Page: React.FC<Props> = ({ title, text, children, px }) => {
  return (
    <main
      className={`relative flex flex-col gap-12 py-12 ${
        px !== "" ? px : " px-12 mxd:px-12 lg:px-16 xl:px-32"
      } items-center justify-center w-full duration-500 transition-all mt-6 mxd:mt-0`}
    >

      <section className="flex flex-col items-center font-Mont text-white/70 duration-500 transition-all">
        <h1 className="font-Fredoka font-bold text-center tracking-wide text-2xl sm:text-3xl flex items-center text-nowrap">
          {title}
        </h1>
        <p className="text-center leading-normal text-sm  tracking-wide  pt-2 duration-500 transition-all lg:px-6">
          {text
            ? text
            : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda officia libero sapiente!"}
        </p>
      </section>
      {children}
      <h1 className="font-Fredoka flex justify-end w-full relative lg:absolute bottom-0 lg:bottom-4 lg:pr-12  text-liteport/20 items-center text-sm">
        <CgCopyright size={12} />
        {new Date().getUTCFullYear().toString()} arinzewebdev
      </h1>
    </main>
  );
};

export default Page;