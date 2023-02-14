import React from "react";
import js from "../image/javascript-original.svg";
import html from "../image/html5-original.svg";
import css from "../image/css3-original.svg";
import git from "../image/git-scm-icon.svg";
import mongodb from "../image/mongodb-original.svg";
import reactjs from "../image/react-original.svg";
import nodejs from "../image/nodejs-original.svg";
import tailwind from "../image/tailwindcss.png";

const Skills = () => {
  return (
    <div className="lg:min-h-[70vh] px-[5vw] py-[80px] flex flex-col items-center justify-center z-[4]">
      <h1 className="text-4xl text-center font-medium mb-[50px] uppercase">
        Skills & Tools
      </h1>
      <div className="grid grid-cols-3 gap-7 md:grid-cols-4 justify-center">
        <div className="flex flex-col items-center">
          <img
            src={html}
            alt="HTML5"
            className="w-16 mb-1 transition duration-500 hover:opacity-100 opacity-80 hover:scale-110"
          />
          HTML5
        </div>
        <div className="flex flex-col items-center">
          <img
            src={css}
            alt="CSS3"
            className="w-16 mb-1 transition duration-500 hover:opacity-100 opacity-80 hover:scale-110"
          />
          CSS3
        </div>
        <div className="flex flex-col items-center">
          <img
            src={js}
            alt="JS"
            className="w-16 mb-1 transition duration-500 hover:opacity-100 opacity-80 hover:scale-110"
          />
          Javascript
        </div>
        <div className="flex flex-col items-center">
          <img
            src={reactjs}
            alt="React"
            className="w-16 mb-1 transition duration-500 hover:opacity-100 opacity-80 hover:scale-110"
          />
          React
        </div>
        <div className="flex flex-col items-center">
          <img
            src={nodejs}
            alt="NodeJS"
            className="w-16 mb-1 transition duration-500 hover:opacity-100 opacity-80 hover:scale-110"
          />
          NodeJS
        </div>
        <div className="flex flex-col items-center">
          <img
            src={mongodb}
            alt="MongoDB"
            className="w-16 mb-1 transition duration-500 hover:opacity-100 opacity-80 hover:scale-110"
          />
          MongoDB
        </div>
        <div className="flex flex-col items-center">
          <img
            src={tailwind}
            alt="Tailwind CSS"
            className="w-16 mb-1 transition duration-500 hover:opacity-100 opacity-80 hover:scale-110"
          />
          Tailwind CSS
        </div>
        <div className="flex flex-col items-center">
          <img
            src={git}
            alt="Git"
            className="w-16 mb-1 transition duration-500 hover:opacity-100 opacity-80 hover:scale-110"
          />
          Git
        </div>
      </div>
    </div>
  );
};

export default Skills;
