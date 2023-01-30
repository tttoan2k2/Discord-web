import React from "react";
import Slide from "react-reveal/Slide";

const MainTag = ({ img, title, des, css }) => {
    const cssTag = css
        ? "bg-[#F6F6F6] flex-col md:flex-row-reverse"
        : "bg-white flex-col md:flex-row ";

    return (
        <div
            className={` flex ${cssTag}  py-[4.8rem] px-6 sm:px-10 md:justify-center md:items-center md:gap-x-5 lg:gap-x-[8rem]`}
        >
            {css ? (
                <Slide left>
                    <div className="">
                        <img src={img} alt="" className="" />
                    </div>
                    <div className="">
                        <h1 className="font-extrabold text-[18px] py-6 sm:text-[26px] md:text-[44px] md:w-[22rem] md:leading-[3.5rem] lg:w-[25rem]">
                            {title}
                        </h1>
                        <p className="font-light md:w-[20rem] lg:font-normal lg:text-[18px] lg:text-[#2A272A]">
                            {des}
                        </p>
                    </div>
                </Slide>
            ) : (
                <Slide right>
                    <div className="">
                        <img src={img} alt="" className="" />
                    </div>
                    <div className="">
                        <h1 className="font-extrabold text-[18px] py-6 sm:text-[26px] md:text-[44px] md:w-[22rem] md:leading-[3.5rem] lg:w-[25rem]">
                            {title}
                        </h1>
                        <p className="font-light md:w-[20rem] lg:font-normal lg:text-[18px] lg:text-[#2A272A]">
                            {des}
                        </p>
                    </div>
                </Slide>
            )}
        </div>
    );
};

export default MainTag;
