import { useState } from "react";
import { useMediaQuery } from "../utils/useMediaQuery";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

import logo from "../images/logo.png";

const navMotion = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildcren",
      staggerChildren: 0.15,
    },
  },
  hidden: {
    transition: {
      opacity: 0,
    },
  },
};

const itemMotion = {
  hidden: {
    opacity: 0,
    x: 0,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const matches = useMediaQuery("(min-width: 1280px)");



  return (
    <nav className="relative flex justify-between items-center py-12 mx-8 font-md font-abril md:mx-16 lg:mx-32">
      <div>
        <a href="/">
          <h1 className="text-4xl text-black"> Paola Canzani Arts</h1>
        </a>
      </div>

      <div className="hidden lg:flex gap-12 text-black font-space">
        <a href="/">Home</a>
        <a href="/about">About me </a>
        <a href="/arts">Arts</a>
        <a href="/contact">Contact</a>
      </div>

      <motion.div
        onClick={() => setIsOpen((prevIsOpen) => !prevIsOpen)}
        className="z-50 lg:hidden space-y-1.5 cursor-pointer"
        initial={false}
        animate={isOpen ? "visible" : "hidden"}
      >
        <motion.span
          animate={{ rotateZ: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }}
          className="block h-0.5 w-8 bg-black"
        ></motion.span>
        <motion.span
          animate={{ opacity: isOpen ? 0 : 1 }}
          className="block h-0.5 w-7 bg-black"
        ></motion.span>
        <motion.span
          animate={{
            rotateZ: isOpen ? -45 : 0,
            y: isOpen ? -8 : 0,
            width: isOpen ? 32 : 16,
          }}
          className="block h-0.5 w-6 bg-black"
        ></motion.span>
      </motion.div>

      {isOpen && (
        <motion.div
          className="fixed flex justify-center  items-center bg-[#f0eeea] top-0 bottom-0 left-0 w-full h-screen font-medium lg:hidden"
          animate={{ opacity:1, x: 0}}
          initial={{ opacity: 0, x: 25}}
        >
          <motion.div
            variants={navMotion}
            animate="visible"
            initial="hidden"
            className={twMerge(
              "flex justify-center flex-col gap-24 items-center text-5xl"
            )}
          >
            <motion.a
              href="/"
              variants={itemMotion}
              className="p-2 m-0 font-space"
            >
              Home
            </motion.a>
            <motion.a
              href="/about"
              variants={itemMotion}
              className="p-2 m-0 font-space"
            >
              {" "}
              About me
            </motion.a>
            <motion.a
              href="/about"
              variants={itemMotion}
              className="p-2 m-0 font-space"
            >
              Arts
            </motion.a>
            <motion.a
              href="/contact"
              variants={itemMotion}
              className="p-2 m-0 font-space"
            >
              Contact
            </motion.a>
          </motion.div>
        </motion.div>
      )}

      {/* {matches && (
        <div className="flex gap-12 text-white font-space">
          <a href="/">Home</a>
          <a href="/about">About me </a>
          <a href="/arts">Arts</a>
          <a href="/arts">Contact</a>
        </div>
      )} */}

      {/*
        {isOpen && !matches && (
          // <motion.div
          //   animate={{ opacity: 1, x: 0 }}
          //   initial={{ opacity: 0, x: 25 }}
          //   className="fixed flex bg-black bottom-0 left-0 w-full h-screen items-center justify-center"
          // >

          // </motion.div>
        )} */}
    </nav>
  );
}
