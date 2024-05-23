import pokemon from "@images/pokemon.png";
import pokemon2 from "@images/pokemon2.png";
import news from "@images/news.png";
import vacab from "@images/vocabulary.png";
import yugioh from "@images/yugioh.png";
import antdesign from "@images/antdesign.png";
import asweb from "@images/asweb.png";
// import pascal from "@images/pascal.webp";
import redux from "@images/redux.png";
import wscss from "@images/wscss.png";
import { TiPlusOutline } from "react-icons/ti";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiVite } from "react-icons/si";
// import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiAntdesign } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiAxios } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
// import { TiArrowRightOutline } from "react-icons/ti";

import { Popover } from "antd";

// import { Swiper, SwiperSlide } from "swiper/react";
import "../App.css";

// import { Pagination, Navigation } from "swiper/modules";
// import { Link, useNavigate } from "react-router-dom";

const content1 = (
  <div style={{ fontFamily: "Lilita One", color: "#3953a5" }}>
    <p className="text-xl">Skills</p>
    <div className="flex justify-around items-center text-3xl">
      <FaHtml5 /> <FaCss3Alt /> <FaReact /> <SiVite /> <BiLogoTypescript />{" "}
      <RiTailwindCssFill /> <TbBrandFramerMotion /> <SiRedux />{" "}
    </div>
  </div>
);

const content2 = (
  <div style={{ fontFamily: "Lilita One", color: "#3953a5" }}>
    {" "}
    <p className="text-xl">Skills</p>
    <p className="flex justify-around items-center text-3xl">
      <FaHtml5 /> <FaCss3Alt /> <FaReact /> <SiVite /> <BiLogoTypescript />{" "}
      <RiTailwindCssFill /> <SiAntdesign /> <SiRedux />{" "}
    </p>
  </div>
);

const content3 = (
  <div style={{ fontFamily: "Lilita One", color: "#3953a5" }}>
    <p className="text-xl">Skills</p>
    <p className="flex justify-around items-center text-3xl">
      <FaHtml5 /> <FaCss3Alt /> <FaReact /> <SiVite /> <BiLogoTypescript />{" "}
      <RiTailwindCssFill /> <TbBrandFramerMotion /> <SiAntdesign />
    </p>
  </div>
);

const content4 = (
  <div style={{ fontFamily: "Lilita One", color: "#3953a5" }}>
    <p className="text-xl">Skills</p>
    <p className="flex justify-around items-center text-3xl">
      <FaHtml5 /> <FaCss3Alt /> <FaReact /> <SiVite /> <BiLogoTypescript />{" "}
      <RiTailwindCssFill /> <TbBrandFramerMotion />
    </p>
  </div>
);

const content5 = (
  <div style={{ fontFamily: "Lilita One", color: "#3953a5" }}>
    <p className="text-xl">Skills</p>
    <p className="flex justify-around items-center text-3xl">
      <FaHtml5 /> <FaCss3Alt /> <FaReact /> <SiVite /> <BiLogoTypescript />{" "}
      <RiTailwindCssFill /> <SiAntdesign /> <SiAxios /> <TbBrandFramerMotion />
    </p>
  </div>
);

const content6 = (
  <div style={{ fontFamily: "Lilita One", color: "#3953a5" }}>
    <p>Skills</p>
    <p className="flex justify-around items-center text-3xl">
      <FaHtml5 /> <FaCss3Alt /> <FaReact /> <SiVite /> <BiLogoTypescript />{" "}
      <RiTailwindCssFill /> <SiAntdesign />
    </p>
  </div>
);

const content7 = (
  <div style={{ fontFamily: "Lilita One", color: "#3953a5" }}>
    <p>Skills</p>
    <p className="flex justify-around items-center text-3xl">
      <FaHtml5 /> <FaCss3Alt /> <FaReact /> <SiVite /> <BiLogoTypescript />{" "}
      <RiTailwindCssFill />
    </p>
  </div>
);

const content8 = (
  <div style={{ fontFamily: "Lilita One", color: "#3953a5" }}>
    <p>Skills</p>
    <p className="flex justify-around items-center text-3xl">
      <FaHtml5 /> <FaReact /> <SiVite /> <BiLogoTypescript />{" "}
      <RiTailwindCssFill /> <SiAntdesign /> <SiRedux />
    </p>
  </div>
);

const content9 = (
  <div style={{ fontFamily: "Lilita One", color: "#3953a5" }}>
    <p>Skills</p>
    <p className="flex justify-around items-center text-3xl">
      <FaHtml5 /> <FaCss3Alt /> <FaReact /> <SiVite /> <BiLogoTypescript />{" "}
    </p>
  </div>
);

function ProjectPage() {
  return (
    <div className="h-auto my-5">
      <div className="pt-3">
        <h1
          style={{ fontFamily: "Lilita One" }}
          className="flex justify-center ml-5 text-6xl text-[#92a1d4] pt-5"
        >
          MY WORK
        </h1>
      </div>

      <div className="mt-5 grid grid-cols-2 grid-flow-row gap-10 mx-20">
        <a href="https://github.com/rxuby/React_Route.git">
          <div className="work-box border-[3px] border-[#4c63af] rounded-3xl bg-white">
            <div className="mt-1 mx-1 ">
              <img
                className="rounded-t-3xl border-[3px] border-[#4c63af] "
                src={pokemon}
                alt="pokemon"
              />
            </div>
            <div className="mt-1 mx-3 text-2xl font-semibold">
              <p className="work-name text-[#4c63af]">Pokemon Dex No.1</p>
            </div>
            <div className=" mx-3  flex justify-end text-5xl text-[#4c63af]">
              <Popover content={content1}>
                <TiPlusOutline className="btn-plus border-[3px] mb-2 rounded-full border-[#4c63af]" />
              </Popover>
            </div>
          </div>
        </a>

        <a href="">
          <div className="work-box border-[3px] border-[#4c63af] rounded-3xl bg-white">
            <div className="mt-1 mx-1 ">
              <img
                className="rounded-t-3xl border-[3px] border-[#4c63af] "
                src={pokemon2}
                alt="pokemon"
              />
            </div>
            <div className="mt-1 mx-3 text-2xl font-semibold">
              <p className="work-name text-[#4c63af]">Pokemon Dex No.2</p>
            </div>
            <div className=" mx-3  flex justify-end text-5xl text-[#4c63af]">
              <Popover content={content2}>
                <TiPlusOutline className="btn-plus border-[3px] mb-2 rounded-full border-[#4c63af]" />
              </Popover>
            </div>
          </div>
        </a>

        <a href="">
          <div className="work-box border-[3px] border-[#4c63af] rounded-3xl bg-white">
            <div className="mt-1 mx-1 ">
              <img
                className="rounded-t-3xl border-[3px] border-[#4c63af] "
                src={asweb}
                alt="pokemon"
              />
            </div>
            <div className="mt-1 mx-3 text-2xl font-semibold">
              <p className="work-name text-[#4c63af]">Quiz Web Application</p>
            </div>
            <div className=" mx-3  flex justify-end text-5xl text-[#4c63af]">
              <Popover content={content3}>
                <TiPlusOutline className="btn-plus border-[3px] mb-2 rounded-full border-[#4c63af]" />
              </Popover>
            </div>
          </div>
        </a>

        <a href="http://">
          <div className="work-box border-[3px] border-[#4c63af] rounded-3xl bg-white">
            <div className="mt-1 mx-1 ">
              <img
                className="rounded-t-3xl border-[3px] border-[#4c63af] "
                src={vacab}
                alt="pokemon"
              />
            </div>
            <div className="mt-1 mx-3 text-2xl font-semibold">
              <p className="work-name text-[#4c63af]">Vocabulary Checklist</p>
            </div>
            <div className=" mx-3  flex justify-end text-5xl text-[#4c63af]">
              <Popover content={content4}>
                <TiPlusOutline className="btn-plus border-[3px] mb-2 rounded-full border-[#4c63af]" />
              </Popover>
            </div>
          </div>
        </a>

        <a href="">
          <div className="work-box border-[3px] border-[#4c63af] rounded-3xl bg-white">
            <div className="mt-1 mx-1 ">
              <img
                className="rounded-t-3xl border-[3px] border-[#4c63af] "
                src={yugioh}
                alt="pokemon"
              />
            </div>
            <div className="mt-1 mx-3 text-2xl font-semibold">
              <p className="work-name text-[#4c63af]">Yugioh List</p>
            </div>
            <div className=" mx-3  flex justify-end text-5xl text-[#4c63af]">
              <Popover content={content5}>
                <TiPlusOutline className="btn-plus border-[3px] mb-2 rounded-full border-[#4c63af]" />
              </Popover>
            </div>
          </div>
        </a>

        <a href="">
          <div className="work-box border-[3px] border-[#4c63af] rounded-3xl bg-white">
            <div className="mt-1 mx-1 ">
              <img
                className="rounded-t-3xl border-[3px] border-[#4c63af] "
                src={antdesign}
                alt="pokemon"
              />
            </div>
            <div className="mt-1 mx-3 text-2xl font-semibold">
              <p className="work-name text-[#4c63af]">Form Register</p>
            </div>
            <div className=" mx-3  flex justify-end text-5xl text-[#4c63af]">
              <Popover content={content6}>
                <TiPlusOutline className="btn-plus border-[3px] mb-2 rounded-full border-[#4c63af]" />
              </Popover>
            </div>
          </div>
        </a>

        <a href="">
          <div className="work-box border-[3px] border-[#4c63af] rounded-3xl bg-white">
            <div className="mt-1 mx-1 ">
              <img
                className="rounded-t-3xl border-[3px] border-[#4c63af] "
                src={news}
                alt="pokemon"
              />
            </div>
            <div className="mt-1 mx-3 text-2xl font-semibold">
              <p className="work-name text-[#4c63af]">Ogs Daily News</p>
            </div>
            <div className=" mx-3  flex justify-end text-5xl text-[#4c63af]">
              <Popover content={content7}>
                <TiPlusOutline className="btn-plus border-[3px] mb-2 rounded-full border-[#4c63af]" />
              </Popover>
            </div>
          </div>
        </a>

        <a href="">
          <div className="work-box border-[3px] border-[#4c63af] rounded-3xl bg-white">
            <div className="mt-1 mx-1 ">
              <img
                className="rounded-t-3xl border-[3px] border-[#4c63af] "
                src={redux}
                alt="pokemon"
              />
            </div>
            <div className="mt-1 mx-3 text-2xl font-semibold">
              <p className="work-name text-[#4c63af]">Vite + React + Redux</p>
            </div>
            <div className=" mx-3  flex justify-end text-5xl text-[#4c63af]">
              <Popover content={content8}>
                <TiPlusOutline className="btn-plus border-[3px] mb-2 rounded-full border-[#4c63af]" />
              </Popover>
            </div>
          </div>
        </a>

        <a href="">
          <div className="work-box border-[3px] border-[#4c63af] rounded-3xl bg-white">
            <div className="mt-1 mx-1 ">
              <img
                className="rounded-t-3xl border-[3px] border-[#4c63af] "
                src={wscss}
                alt="pokemon"
              />
            </div>
            <div className="mt-1 mx-3 text-2xl font-semibold">
              <p className="work-name text-[#4c63af]">CSS Module</p>
            </div>
            <div className=" mx-3  flex justify-end text-5xl text-[#4c63af]">
              <Popover content={content9}>
                <TiPlusOutline className="btn-plus border-[3px] mb-2 rounded-full border-[#4c63af]" />
              </Popover>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default ProjectPage;
