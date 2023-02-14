import React from "react";
import { BiChevronsDown } from "react-icons/bi";
import { motion } from "framer-motion";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="relative h-screen flex justify-center items-center flex-col gap-5">
      <h1 className="text-4xl font-semibold">I'm Nguyễn Đức Long</h1>
      <motion.h2 className="text-5xl">
        <Typed
          strings={["Front-End Developer", "Web Development"]}
          typeSpeed={40}
          backSpeed={40}
          backDelay={2000}
          loop
          className="capitalize font-semibold"
        />
      </motion.h2>
      <div className="tags">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      </div>
      <motion.a
        data-scroll
        data-scroll-speed="2"
        data-scroll-delay="1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 1.4 }}
        className="absolute left-[calc(50%-23px)] bottom-[10vh] cursor-pointer"
        href="#about"
        data-scroll-to
      >
        <BiChevronsDown className="animate-bounce" size={56} />
      </motion.a>
    </div>
  );
};

export default Hero;
