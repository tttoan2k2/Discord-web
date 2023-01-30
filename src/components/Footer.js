import React from "react";
import usa from "../assets/usa.png";
import { AiOutlineDown } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import logo from "../assets/logo.png";

const Footer = () => {
    return (
        <footer className="bg-[#23272A] pt-[4.5rem] pb-[2rem] px-6 sm:px-10">
            <div className="flex flex-col justify-center md:flex-row md:gap-[8rem]">
                <div className="">
                    <h1 className="text-[40px] text-[#5865F2] md:max-w-[15rem] leading-10 font-extrabold pb-4">
                        IMAGINE A PLACE
                    </h1>
                    <div className="flex items-center gap-2 pb-7">
                        <img
                            src={usa}
                            alt=""
                            className="w-10 h-5 object-contain"
                        />
                        <p className="text-white">English, USA</p>
                        <AiOutlineDown className="text-white" />
                    </div>
                    <div className="flex items-center gap-5 text-white text-[25px] pb-[5rem]">
                        <BsTwitter />
                        <BsInstagram />
                        <FaFacebookSquare />
                        <BsYoutube />
                    </div>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 md:gap-x-[5rem] lg:gap-x-[4rem] gap-y-10">
                    <div>
                        <p className="titleLink">Product</p>
                        <p className="link">Download</p>
                        <p className="link">Nitro</p>
                        <p className="link">Status</p>
                    </div>
                    <div>
                        <p className="titleLink">Company</p>
                        <p className="link">about</p>
                        <p className="link">Jobs</p>
                        <p className="link">Branding</p>
                        <p className="link">Newsroom</p>
                    </div>
                    <div>
                        <p className="titleLink">Resources</p>
                        <p className="link">College</p>
                        <p className="link">Support</p>
                        <p className="link">Safety</p>
                        <p className="link">Blog</p>
                        <p className="link">Feedback</p>
                        <p className="link">Developers</p>
                        <p className="link">StreamKit</p>
                        <p className="link">Creators</p>
                        <p className="link">Community</p>
                    </div>
                    <div>
                        <p className="titleLink">Policies</p>
                        <p className="link">Terms</p>
                        <p className="link">Privacy</p>
                        <p className="link">Cookie Setting</p>
                        <p className="link">Guidelines</p>
                        <p className="link">Acknowledgements</p>
                        <p className="link">Licenses</p>
                        <p className="link">Moderation</p>
                    </div>
                </div>
            </div>

            <div className="pt-[3rem] border-b-[1px] border-[#5865F2]"></div>
            <div className="pt-4">
                <div className="flex items-center justify-between">
                    <img
                        src={logo}
                        alt=""
                        className="w-[8rem] h-[8rem] object-contain"
                    />
                    <button className="px-3 py-2 bg-[#5865F2] text-white rounded-[40px] hover:bg-[#6470f1] hover:shadow-[0_8px_15px_rgba(0,0,0,20%)] transition-all">
                        Sign up
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
