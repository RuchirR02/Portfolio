import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center"
    >
      <div>
        <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal">
          Feel Free To reach out!
        </h3>
      </div>

      <ul className="text-sm md:text-xl">
        <li className="flex gap-1 items-center hover:text-blue-300">
          <MdOutlineEmail size={20} />
         <a href= "mailto: ruchirrao04@gmail.com">ruchirrao04@gmail.com</a> 
        </li>
        <li className="flex gap-1 items-center hover:text-blue-300">
          <CiLinkedin />
          <a href="https://www.linkedin.com/in/ruchir-r-0b87a0283/">linkdlin.com/ruchirrao</a>
        </li>
        <li className="flex gap-1 items-center hover:text-blue-300">
          <FaGithub />
          <a href="https://github.com/RuchirR02">github.com/ruchirrao</a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
