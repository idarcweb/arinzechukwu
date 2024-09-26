"use client";

import { useState, useEffect } from "react";
import Sidenav from "./sidenav";
import Navbar from "./navbar";
import FooterNav from "./footer";

const MiniNavigation = () => {
  const [showNavbar, setShowNavbar] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  useEffect(() => {
    // Function to detect scroll direction
    function handleScroll() {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setShowNavbar(false);
      } else {
        // Scrolling up
        setShowNavbar(true);
      }
      setLastScrollY(currentScrollY);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className="fixed md:hidden transition-transform duration-700 top-0 w-full z-50 h-full flex  justify-center"
    >
      <Navbar showNavbar={showNavbar} />
      <Sidenav showNavbar={showNavbar} />
      <FooterNav showNavbar={showNavbar} />
    </nav>
  );
};

export default MiniNavigation;
