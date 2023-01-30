import React from "react";
import downloadtag from "../assets/downloadtag.svg";
import { AiOutlineDownload } from "react-icons/ai";
import Slide from "react-reveal/Slide";

const DownloadTag = () => {
    return (
        <div className="bg-[#F6F6F6] py-[4.8rem] lg:py-[6rem] px-6 sm:px-10 flex flex-col items-center justify-center">
            <Slide top>
                <div className="md:flex flex-col items-center justify-center">
                    <h1 className="font-extrabold text-[20px] md:text-[35px] lg:text-[50px] pb-5">
                        RELIABLE TECH FOR STAYING CLOSE
                    </h1>
                    <p className="font-light md:text-center lg:font-normal lg:text-[18px] lg:w-[50rem] pb-5">
                        Low-latency voice and video feels like you’re in the
                        same room. Wave hello over video, watch friends stream
                        their games, or gather up and have a drawing session
                        with screen share.
                    </p>
                </div>
                <div>
                    <img src={downloadtag} alt="" className="" />
                </div>
                <div className="flex flex-col items-center">
                    <h1 className="font-bold text-[30px] pt-20 pb-10">
                        Ready to start your journey?
                    </h1>
                    <button className="flex items-center justify-center gap-x-3 text-[19px] text-white py-3 px-8 rounded-[40px] bg-[#5865F2] w-full md:w-auto hover:bg-[#6470f1] hover:shadow-[0_8px_15px_rgba(0,0,0,20%)] transition-all">
                        <AiOutlineDownload className="text-[25px]" />
                        Download for Windows
                    </button>
                </div>
            </Slide>
        </div>
    );
};

export default DownloadTag;
