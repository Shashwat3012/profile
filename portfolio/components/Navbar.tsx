import { logo } from "@/public/assets";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div
      className="w-full shadow-navbarShadow h-20 lg:h-[12vh] sticky top-0 z-50 bg-bodyColor
  px-4"
    >
      <div className="max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between">
        <div
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        // transition={{ duration: 0.5 }}
        >
          <Link href="#main">
            <Image className="w-14" src={logo} alt="logo" />
          </Link>
        </div>
        <div>
          <ul className="flex text-[13px] gap-7">
            <Link
              href="#main"
              className="flex items-center gap-1 font-medium text-textDark hover: text-textGreen cursor-pointer duration-300 nav-link"
            >
              <li>Home</li>
            </Link>
            <Link
              href="#about"
              className="flex items-center gap-1 font-medium text-textDark hover: text-textGreen cursor-pointer duration-300 nav-link"
            >
              <span>About</span>
            </Link>
            <Link
              href="#projects"
              className="flex items-center gap-1 font-medium text-textDark hover: text-textGreen cursor-pointer duration-300 nav-link"
            >
              <span>Projects</span>
            </Link>
            <Link
              href="#skills"
              className="flex items-center gap-1 font-medium text-textDark hover: text-textGreen cursor-pointer duration-300 nav-link"
            >
              <span>Skills</span>
            </Link>
            <Link
              href="#experience"
              className="flex items-center gap-1 font-medium text-textDark hover: text-textGreen cursor-pointer duration-300 nav-link"
            >
              <span>Experience</span>
            </Link>
            <Link
              href="#contact"
              className="flex items-center gap-1 font-medium text-textDark hover: text-textGreen cursor-pointer duration-300 nav-link"
            >
              <span>Contact</span>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
