"use client";

import { useEffect, useState } from "react";

const MouseGradient: React.FC = () => {
  const [gradient, setGradient] = useState<string>("");

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const mouseX = event.clientX;
      const mouseY = event.clientY;
      const xPercent = (mouseX / window.innerWidth) * 100;
      const yPercent = (mouseY / window.innerHeight) * 100;
      const gradient = `radial-gradient(circle at ${xPercent}% ${yPercent}%, #1f3428, #0c0d0c)`;
      setGradient(gradient);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  return (
    <div
      className="absolute top-0 left-0 w-full h-full transition-all duration-300"
      style={{ background: gradient }}
    />
  );
};

export default MouseGradient; /*#0a0a0a  */
/* #0c0d0c */
