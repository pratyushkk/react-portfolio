import React from "react";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import hashnode from "../assets/hashnode.png";
import Wrapper from "./Wrapper";
import gmailIcon from "../assets/email-icon.png";
import { scrollTo } from "../helper";

const Footer = () => {
  function redirectToLinkedin() {
    window.open("https://www.linkedin.com/in/pratyushkknayak/", "_blank");
  }
  function redirectToGitHub() {
    window.open("https://github.com/pratyushkk", "_blank");
  }
  function redirectToHashnode() {
    window.open("https://blog.pratyushkk.in/", "_blank");
  }
  return (
    <div className="bg-[#F2F2F2]">
      <Wrapper>
        {/* NAVBAR START */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 2xl:mt-[63px] relative text-[#111111] border-t border-[#CCCCCC] py-10">
          <div className="flex items-center gap-[6px]">
            <div className="w-[35px] h-[35px] rounded-full bg-[#252525] flex justify-center items-center">
              <img src={gmailIcon} alt="" className="w-[18px]" />
            </div>
            <div>work.pratyushkk.in@gmail.com</div>
          </div>
          <div className="flex items-center gap-3 ml-5">
            <div className="flex items-center gap-[6px]">
              <div className="w-[45px] h-[45px] rounded-full bg-white  flex justify-center items-center">
                <button onClick={redirectToGitHub}>
                  <img src={github} alt="" className="w-[30px]" />
                </button>
              </div>
            </div>
            <div className="flex items-center gap-[6px]">
              <div className="w-[45px] h-[45px] rounded-full bg-white   flex justify-center items-center">
                <button onClick={redirectToLinkedin}>
                  <img src={linkedin} alt="" className="w-[30px]" />
                </button>
              </div>
            </div>
            <div className="flex items-center gap-[6px]">
              <div className="w-[45px] h-[45px] rounded-full bg-white   flex justify-center items-center">
                <button onClick={redirectToHashnode}>
                  <img src={hashnode} alt="" className="w-[30px]" />
                </button>
              </div>
            </div>
          </div>
          <ul className="flex 2xl:text-[20px] gap-5 md:gap-8">
            <li
              className="cursor-pointer transition active:scale-90"
              onClick={() => scrollTo("about")}
            >
              About me
            </li>
            <li
              className="cursor-pointer transition active:scale-90"
              onClick={() => scrollTo("skills")}
            >
              Skills
            </li>
            <li
              className="cursor-pointer transition active:scale-90"
              onClick={() => scrollTo("work")}
            >
              Work
            </li>
            <li
              className="cursor-pointer transition active:scale-90"
              onClick={() => scrollTo("contact")}
            >
              Contact
            </li>
          </ul>
        </div>
        {/* NAVBAR END */}
      </Wrapper>
    </div>
  );
};

export default Footer;
