import React from "react";
import Hero from "./Hero";
import MainTag from "./MainTag";
import maintag1 from "../assets/maintag1.svg";
import maintag2 from "../assets/maintag2.svg";
import maintag3 from "../assets/maintag3.svg";
import DownloadTag from "./DownloadTag";

const maintags = [
    {
        img: maintag1,
        title: "Create an invite-only place where you belong",
        des: "Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat.",
    },
    {
        img: maintag2,
        title: "Where hanging out is easy",
        des: "Grab a seat in a voice channel when you’re free. Friends in your server can see you’re around and instantly pop in to talk without having to call.",
    },
    {
        img: maintag3,
        title: "From few to a fandom",
        des: "Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more.",
    },
];

const Main = () => {
    return (
        <div className="">
            {/* hero */}
            <Hero />
            {/* tag */}
            {maintags.map((maintag, index) => {
                return (
                    <MainTag
                        key={index}
                        img={maintag.img}
                        title={maintag.title}
                        des={maintag.des}
                        css={index % 2 !== 0}
                    />
                );
            })}
            {/* download tag */}
            <DownloadTag />
        </div>
    );
};

export default Main;
