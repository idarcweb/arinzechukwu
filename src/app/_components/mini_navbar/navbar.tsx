import Image from "next/image";
import Link from "next/link";

const Navbar = ({ showNavbar }: { showNavbar: boolean }) => {
  return (
    <nav
      style={{
        transform: showNavbar ? "translateY(0)" : "translateY(-150%)",
        transition: "transform 1s ease",
      }}
      className={`fixed top-3 md:hidden translate-y-0 z-50 py-2 text-white/70 max-w-[520px] px-8 bg-[#0a0a0a] flex items-center justify-center gap-1 rounded-br-lg rounded-tr-xl rounded-bl-md`}
    >
      <Image
        src="/a.png"
        alt="logo"
        width={32}
        height={32}
        className="absolute top-0 left-0 mr-6 my-1"
      />
      <div className="flex gap-2">
        <Links href="/" name="Home" />
        <Links href="/aboutme" name="About" />
        <Links href="/services" name="Resume" />
        <Links href="/projects" name="Projects" />
      </div>
    </nav>
  );
};

export default Navbar;

type LinksProps = {
  href: string;
  name: string;
};
function Links({ href, name }: LinksProps) {
  return (
    <Link href={href}>
      <span className="text-base hover:text-liteport/70">{name}</span>
    </Link>
  );
}
