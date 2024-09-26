import Link from "next/link";
import { GrContactInfo } from "react-icons/gr";

const FooterNav = ({ showNavbar }: { showNavbar: boolean }) => {
  return (
    <footer
      style={{
        transform: showNavbar ? "translateY(0)" : "translateY(-100%)",
        transition: "transform 1s ease",
      }}
      className="fixed bottom-0 right-3 z-50"
    >
      <Link href="/contact">
        <div className="bg-thickport/80 rounded-tl-lg rounded-tr-xl rounded-bl-2xl w-16 h-16 m-6 grid place-items-center animate-bounce duration-1000 transition-all md:hidden">
          <GrContactInfo size={32} className="text-liteport/70" />
        </div>
      </Link>
    </footer>
  );
};

export default FooterNav;