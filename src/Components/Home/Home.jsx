import React from "react";
import avatarImg from "../../assets/7358602-removebg-previewp.png";
import TextChange from "../TextChange";

const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20 flex-wrap md:flex-row">
      <div className="md:w-2/4 md:pt-10 ">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p className="text-sm md:text-2xl tracking-tight ">
        I create seamless web experiences, intuitive designs, and engaging visuals. Let’s build something amazing together!
        </p>
        <button className="mt-5 md:md-10 text-white py02 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          <a href="#Footer">Contact Me</a>
        </button>
      </div>
      <div>
        <img className="md:h-80" src={avatarImg} alt="" />
      </div>
    </div>
  );
};

export default Home;
