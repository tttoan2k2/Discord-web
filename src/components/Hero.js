import React from "react";
import { AiOutlineDownload } from "react-icons/ai";
import left from "../assets/left.svg";
import cloud from "../assets/cloud.svg";
import right from "../assets/right.svg";

const Hero = () => {
    return (
        <div className="bg-[#404EED] px-6 sm:px-10 pt-10">
            <div className="h-[600px] lg:h-[530px] relative">
                <div className="flex flex-col lg:items-center pb-7 md:pt-5 lg:pt-[75px]">
                    <h1 className="font-extrabold text-[35px] lg:text-center text-white tracking-tight leading-none max-w-[25rem] xl:max-w-[40rem] pb-4 md:text-[65px] z-10">
                        IMAGINE A PLACE...
                    </h1>
                    <p className="text-white font-light md:w-[30rem] md:pt-5 lg:text-[18px] lg:text-center lg:tracking-wide leading-8 lg:font-normal lg:w-[40rem] z-10">
                        ...where you can belong to a school club, a gaming
                        group, or a worldwide art community. Where just you and
                        a handful of friends can spend time together. A place
                        that makes it easy to talk every day and hang out more
                        often.
                    </p>
                </div>
                <div className="flex flex-col gap-5 sm:flex-row md:flex-col lg:justify-center lg:flex-row text-[18px]">
                    <button className="bg-white flex items-center px-7 py-4 rounded-[40px] gap-x-3 max-w-max  hover:text-[#5865f2] hover:shadow-[0_8px_15px_rgba(0,0,0,20%)] transition-all z-10">
                        <AiOutlineDownload />
                        Download for Windows
                    </button>
                    <button className="bg-black text-white px-7 py-4 rounded-[40px] max-w-max hover:bg-[#3b3a3a] hover:shadow-[0_8px_15px_rgba(0,0,0,20%)] transition duration-500 ease-in-out z-10">
                        Open Discord in your browser
                    </button>
                </div>

                <div className="flex-grow">
                    <img
                        src={left}
                        alt=""
                        className="absolute bottom-0 right-[5.5rem] md:hidden lg:block lg:-left-[30rem] xl:-left-[25rem] z-10 "
                    />
                    <img
                        src={cloud}
                        alt=""
                        className="hidden md:block absolute bottom-0 -right-[55rem] max-w-[400%] z-0"
                    />
                    <img
                        src={right}
                        alt=""
                        className="hidden  md:block absolute bottom-0 -right-[12rem] lg:-right-[28rem] xl:-right-[20rem] z-10"
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
