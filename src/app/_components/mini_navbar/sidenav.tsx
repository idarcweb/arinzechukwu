import Link from "next/link";
import { IconBaseProps } from "react-icons";
/* import { BiFile } from "react-icons/bi"; */
import { BsLinkedin, BsTwitterX, BsWhatsapp } from "react-icons/bs";
import { LuMessagesSquare } from "react-icons/lu";
import { SiFiverr } from "react-icons/si";

const Sidenav = ({ showNavbar }: { showNavbar: boolean }) => {
  return (
    <section
      style={{
        transform: showNavbar ? "translateX(0)" : "translateX(200%)",
        transition: "transform 1s ease",
      }}
      className="fixed top-52 right-[7%] 
       md:hidden transition-transform duration-700 z-50 h-full"
    >
      <div className="flex flex-col  items-center gap-1">
        {/*  <SideLinks href="/resume" icon={BiFile} name="Resume" /> */}
        <SideLinks
          href="/testimonials"
          icon={LuMessagesSquare}
          name="Testimonials"
        />
        <SideLinks href="/" icon={BsLinkedin} name="" />
        <SideLinks href="/" icon={BsTwitterX} name="" />
        <SideLinks href="/" icon={BsWhatsapp} name="" />
        <SideLinks href="/" icon={SiFiverr} name="" />
      </div>
    </section>
  );
};

export default Sidenav;

type SideLinksProps = {
  icon: React.ComponentType<IconBaseProps>;
  href: string;
  name: string;
};

function SideLinks({ href, name, icon: Icon }: SideLinksProps) {
  return (
    <Link
      href={href}
      className="group relative bg-black py-2 w-12 h-12 px-2 grid place-items-center rounded-xl transition-all duration-1000 z-50"
    >
      <Icon size={24} className="text-liteport/90 group-hover:scale-110" />
      <span
        className={`${
          name.length > 0 && "group-hover:block transition-all duration-1000"
        } text-xs absolute right-5  hidden top-0 font-Mont text-liteport/90 rounded-l-md font-medium bg-portblack py-2 px-2 `}
      >
        {name}
      </span>
    </Link>
  );
}