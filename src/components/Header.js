import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../assets/logo.png";
import { GrFormClose } from "react-icons/gr";
import { AiOutlineDownload } from "react-icons/ai";
import logoMobile from "../assets/logo-mobile.png";

const Header = ({ onClick, mobileMenu, onClose }) => {
    return (
        <header className="bg-[#404EED] flex items-center justify-between py-[1rem] px-6 sm:px-10 relative lg:z-20">
            <a href="/">
                <img
                    src={logo}
                    alt="Logo"
                    className="w-32 h-12 object-contain"
                />
            </a>

            <div className="hidden lg:flex text-white space-x-10 font-semibold">
                <a href="/" className="hover:underline">
                    Download
                </a>
                <a href="/" className="hover:underline">
                    Nitro
                </a>
                <a href="/" className="hover:underline">
                    Discover
                </a>
                <a href="/" className="hover:underline">
                    Safety
                </a>
                <a href="/" className="hover:underline">
                    Support
                </a>
                <a href="/" className="hover:underline">
                    Blog
                </a>
                <a href="/" className="hover:underline">
                    Careers
                </a>
            </div>

            <div className="flex items-center space-x-4">
                <button className="text-[14px] font-[500] hover:text-[#5865f2] px-[1rem] py-[0.6rem] bg-white rounded-[40px] hover:shadow-[0_8px_15px_rgba(0,0,0,20%)] cursor-pointer">
                    Login
                </button>
                <GiHamburgerMenu
                    onClick={onClick}
                    className="text-white text-[2rem] lg:hidden cursor-pointer"
                />
            </div>
            {mobileMenu && (
                <div
                    className={`fixed top-0 right-0 lg:hidden bg-white w-[312px] h-screen p-5 rounded-l-[10px] animate-[transRight_0.3s_linear] z-50`}
                >
                    <div className="flex items-center justify-between pb-5 border-b-[1px] border-[#CCC]">
                        <img
                            src={logoMobile}
                            alt=""
                            className="w-32 h-12 object-contain cursor-pointer"
                        />
                        <GrFormClose
                            onClick={onClose}
                            className="text-[30px] font-light cursor-pointer"
                        />
                    </div>
                    <div className="flex flex-col gap-4 pt-10 px-5">
                        <a
                            href="/"
                            className="text-[#00B0F4] p-2 bg-[#F6F6F6] rounded-[8px] hover:underline"
                        >
                            Home
                        </a>
                        <a href="/" className="hover:underline">
                            Download
                        </a>
                        <a href="/" className="hover:underline">
                            Nitro
                        </a>
                        <a href="/" className="hover:underline">
                            Discover
                        </a>
                        <a href="/" className="hover:underline">
                            Safety
                        </a>
                        <a href="/" className="hover:underline">
                            Support
                        </a>
                        <a href="/" className="hover:underline">
                            Blog
                        </a>
                        <a href="/" className="hover:underline">
                            Careers
                        </a>
                    </div>
                    <button className="flex items-center justify-center mt-[12rem] gap-x-3 text-[15px] text-white py-2 px-8 rounded-[40px] bg-[#5865F2] w-full md:w-auto hover:bg-[#6470f1] hover:shadow-[0_8px_15px_rgba(0,0,0,20%)] transition-all">
                        <AiOutlineDownload className="text-[25px]" />
                        Download for Windows
                    </button>
                </div>
            )}
        </header>
    );
};

export default Header;
