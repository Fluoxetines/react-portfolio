import React from "react";
import avatar from "../image/avatar.png";

const About = () => {
  return (
    <div
      id="about"
      className="flex gap-[5vw] px-[5vw] z-[2] lg:min-h-[70vh] items-center justify-center flex-col md:flex-row"
    >
      <div className="col-lg-4">
        <img
          data-scroll
          data-scroll-speed="2"
          className="w-[300px] h-[300px] rounded-full"
          src={avatar}
          alt="avatar"
        />
      </div>
      <div className="col-lg-8">
        <h1 data-scroll data-scroll-speed="0.5" className="headline__subtitle">
          about me
        </h1>
        <p data-scroll className="text-lg text-gray-200">
          I'm a web developer and development using the modern web stack,
          advanced understanding of Javascript, HTML5, CSS3, responsive web. I
          have basic knowledge of ReactJS, Redux Toolkit and have experience in
          SCSS, Tailwind CSS and REST APIs, solid knowledge of modern web
          development technologies and framework based on JavaScript, HTML, CSS.
          Read and Communicate English basic.
        </p>
      </div>
    </div>
  );
};

export default About;
