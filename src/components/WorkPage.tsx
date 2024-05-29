import pokemon from "@images/pokemon.png";
import pokemon2 from "@images/pokemon2.png";
import news from "@images/news.png";
import vacab from "@images/vocabulary.png";
import yugioh from "@images/yugioh.png";
import antdesign from "@images/antdesign.png";
import asweb from "@images/asweb.png";
import redux from "@images/redux.png";
import wscss from "@images/wscss.png";
import { TiPlusOutline } from "react-icons/ti";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { SiVite, SiAntdesign, SiRedux, SiAxios } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Popover } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../App.css";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

const content1 = (
  <div style={{ fontFamily: "Lilita One", color: "#3953a5" }}>
    <p className="text-xl">Skills</p>
    <div className="flex justify-around items-center text-3xl">
      <FaHtml5 /> <FaCss3Alt /> <FaReact /> <SiVite /> <BiLogoTypescript /> <RiTailwindCssFill /> <TbBrandFramerMotion /> <SiRedux />
    </div>
  </div>
);

const content2 = (
  <div style={{ fontFamily: "Lilita One", color: "#3953a5" }}>
    <p className="text-xl">Skills</p>
    <p className="flex justify-around items-center text-3xl">
      <FaHtml5 /> <FaCss3Alt /> <FaReact /> <SiVite /> <BiLogoTypescript /> <RiTailwindCssFill /> <SiAntdesign /> <SiRedux />
    </p>
  </div>
);

const content3 = (
  <div style={{ fontFamily: "Lilita One", color: "#3953a5" }}>
    <p className="text-xl">Skills</p>
    <p className="flex justify-around items-center text-3xl">
      <FaHtml5 /> <FaCss3Alt /> <FaReact /> <SiVite /> <BiLogoTypescript /> <RiTailwindCssFill /> <TbBrandFramerMotion /> <SiAntdesign />
    </p>
  </div>
);

const content4 = (
  <div style={{ fontFamily: "Lilita One", color: "#3953a5" }}>
    <p className="text-xl">Skills</p>
    <p className="flex justify-around items-center text-3xl">
      <FaHtml5 /> <FaCss3Alt /> <FaReact /> <SiVite /> <BiLogoTypescript /> <RiTailwindCssFill /> <TbBrandFramerMotion />
    </p>
  </div>
);

const content5 = (
  <div style={{ fontFamily: "Lilita One", color: "#3953a5" }}>
    <p className="text-xl">Skills</p>
    <p className="flex justify-around items-center text-3xl">
      <FaHtml5 /> <FaCss3Alt /> <FaReact /> <SiVite /> <BiLogoTypescript /> <RiTailwindCssFill /> <SiAntdesign /> <SiAxios /> <TbBrandFramerMotion />
    </p>
  </div>
);

const content6 = (
  <div style={{ fontFamily: "Lilita One", color: "#3953a5" }}>
    <p>Skills</p>
    <p className="flex justify-around items-center text-3xl">
      <FaHtml5 /> <FaCss3Alt /> <FaReact /> <SiVite /> <BiLogoTypescript /> <RiTailwindCssFill /> <SiAntdesign />
    </p>
  </div>
);
const content7 = (
  <div style={{ fontFamily: "Lilita One", color: "#3953a5" }}>
    <p>Skills</p>
    <p className="flex justify-around items-center text-3xl">
      <FaHtml5 /> <FaCss3Alt /> <FaReact /> <SiVite /> <BiLogoTypescript /> <RiTailwindCssFill />
    </p>
  </div>
);

const content8 = (
  <div style={{ fontFamily: "Lilita One", color: "#3953a5" }}>
    <p>Skills</p>
    <p className="flex justify-around items-center text-3xl">
      <FaHtml5 /> <FaReact /> <SiVite /> <BiLogoTypescript /> <RiTailwindCssFill /> <SiAntdesign /> <SiRedux />
    </p>
  </div>
);

const content9 = (
  <div style={{ fontFamily: "Lilita One", color: "#3953a5" }}>
    <p>Skills</p>
    <p className="flex justify-around items-center text-3xl">
      <FaHtml5 /> <FaCss3Alt /> <FaReact /> <SiVite /> <BiLogoTypescript />
    </p>
  </div>
);

function WorkPage() {
  const { ref: refWork, inView: inViewWork } = useInView({
    triggerOnce: true,
  });
  return (
    <motion.div
      ref={refWork}
      initial={{ opacity: 0, x: -50 }}
      animate={inViewWork ? { opacity: 1, x: 0 } : {}}
    >
      <div>
        <h1 style={{ fontFamily: "Lilita One" }} className="flex justify-center p-5 lg:ml-10 md:ml-5 text-6xl border-t-[3px] border-x-[3px] w-96 rounded-t-3xl shadow-xl bg-[#FFD1D1] text-[#92a1d4] border-[#4c63af]">
          MY WORK
        </h1>
      </div>

      <div className=" rounded-tr-3xl rounded-b-3xl  border-[3px] md:mx-5 lg:mx-10 border-[#4c63af] bg-[#FFD1D1]">
        <Swiper
          cssMode={true}
          navigation={true}
          // pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        >
          <SwiperSlide className="flex justify-center items-center content-center my-5">
            {" "}
            <a href="https://github.com/rxuby/React_Route.git">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="work-box sm:w-[500px] md:w-[700px] lg:w-[700px] xl:w-[1000px] 2xl:w-[1100px] border-[3px] border-[#4c63af] rounded-3xl bg-white"
              >
                <div className="my-4 mx-4">
                  <img
                    className="rounded-3xl border-[3px] border-[#4c63af] "
                    src={pokemon}
                    alt="pokemon"
                  />
                </div>
                <div className="mt-1 mx-6 text-3xl font-semibold">
                  <p className="work-name text-[#4c63af]">Pokemon Dex No.1</p>
                </div>
                <div className=" mx-3 flex justify-end text-5xl text-[#4c63af]">
                  <Popover content={content1}>
                    <TiPlusOutline className="btn-plus border-[3px] mb-2 rounded-full border-[#4c63af]" />
                  </Popover>
                </div>
              </motion.div>
            </a>
          </SwiperSlide>

          <SwiperSlide className="flex justify-center items-center content-center my-5">
            <a href="https://github.com/rxuby/Redux.git">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="work-box sm:w-[500px] md:w-[700px] lg:w-[700px] xl:w-[1000px] 2xl:w-[1100px] border-[3px] border-[#4c63af] rounded-3xl bg-white"
              >
                <div className="my-4 mx-4 ">
                  <img
                    className="rounded-3xl border-[3px] border-[#4c63af] "
                    src={pokemon2}
                    alt="pokemon"
                  />
                </div>
                <div className="mt-1 mx-6 text-3xl font-semibold">
                  <p className="work-name text-[#4c63af]">Pokemon Dex No.2</p>
                </div>
                <div className=" mx-3  flex justify-end text-5xl text-[#4c63af]">
                  <Popover content={content2}>
                    <TiPlusOutline className="btn-plus border-[3px] mb-2 rounded-full border-[#4c63af]" />
                  </Popover>
                </div>
              </motion.div>
            </a>
          </SwiperSlide>

          <SwiperSlide className="flex justify-center items-center content-center my-5">
            <a href="https://github.com/rxuby/Redux.git">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="work-box sm:w-[500px] md:w-[700px] lg:w-[700px] xl:w-[1000px] 2xl:w-[1100px] border-[3px] border-[#4c63af] rounded-3xl bg-white"
              >
                <div className="my-4 mx-4 ">
                  <img
                    className="rounded-3xl border-[3px] border-[#4c63af] "
                    src={asweb}
                    alt="pokemon"
                  />
                </div>
                <div className="mt-1 mx-6 text-3xl font-semibold">
                  <p className="work-name text-[#4c63af]">
                    Quiz Web Application
                  </p>
                </div>
                <div className=" mx-3  flex justify-end text-5xl text-[#4c63af]">
                  <Popover content={content3}>
                    <TiPlusOutline className="btn-plus border-[3px] mb-2 rounded-full border-[#4c63af]" />
                  </Popover>
                </div>
              </motion.div>
            </a>
          </SwiperSlide>

          <SwiperSlide className="flex justify-center items-center content-center my-5">
            <a href="https://github.com/rxuby/AS2_React.git">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="work-box sm:w-[500px] md:w-[700px] lg:w-[700px] xl:w-[1000px] 2xl:w-[1100px] border-[3px] border-[#4c63af] rounded-3xl bg-white"
              >
                <div className="my-4 mx-4 ">
                  <img
                    className="rounded-3xl border-[3px] border-[#4c63af] "
                    src={vacab}
                    alt="pokemon"
                  />
                </div>
                <div className="mt-1 mx-6 text-3xl font-semibold">
                  <p className="work-name text-[#4c63af]">
                    Vocabulary Checklist
                  </p>
                </div>
                <div className=" mx-3  flex justify-end text-5xl text-[#4c63af]">
                  <Popover content={content4}>
                    <TiPlusOutline className="btn-plus border-[3px] mb-2 rounded-full border-[#4c63af]" />
                  </Popover>
                </div>
              </motion.div>
            </a>
          </SwiperSlide>

          <SwiperSlide className="flex justify-center items-center content-center my-5">
            <a href="https://github.com/rxuby/React_Route.git">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="work-box sm:w-[500px] md:w-[700px] lg:w-[700px] xl:w-[1000px] 2xl:w-[1100px] border-[3px] border-[#4c63af] rounded-3xl bg-white"
              >
                <div className="my-4 mx-4 ">
                  <img
                    className="rounded-3xl border-[3px] border-[#4c63af] "
                    src={yugioh}
                    alt="pokemon"
                  />
                </div>
                <div className="mt-1 mx-6 text-3xl font-semibold">
                  <p className="work-name text-[#4c63af]">Yugioh List</p>
                </div>
                <div className=" mx-3  flex justify-end text-5xl text-[#4c63af]">
                  <Popover content={content5}>
                    <TiPlusOutline className="btn-plus border-[3px] mb-2 rounded-full border-[#4c63af]" />
                  </Popover>
                </div>
              </motion.div>
            </a>
          </SwiperSlide>

          <SwiperSlide className="flex justify-center items-center content-center my-5">
            <a href="https://github.com/rxuby/React_Route.git">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="work-box sm:w-[500px] md:w-[700px] lg:w-[700px] xl:w-[1000px] 2xl:w-[1100px] border-[3px] border-[#4c63af] rounded-3xl bg-white"
              >
                <div className="my-4 mx-4 ">
                  <img
                    className="rounded-3xl border-[3px] border-[#4c63af] "
                    src={antdesign}
                    alt="pokemon"
                  />
                </div>
                <div className="mt-1 mx-6 text-3xl font-semibold">
                  <p className="work-name text-[#4c63af]">Form Register</p>
                </div>
                <div className=" mx-3  flex justify-end text-5xl text-[#4c63af]">
                  <Popover content={content6}>
                    <TiPlusOutline className="btn-plus border-[3px] mb-2 rounded-full border-[#4c63af]" />
                  </Popover>
                </div>
              </motion.div>
            </a>
          </SwiperSlide>

          <SwiperSlide className="flex justify-center items-center content-center my-5">
            <a href="https://github.com/rxuby/React_Route.git">
              <div className="work-box sm:w-[500px] md:w-[700px] lg:w-[700px] xl:w-[1000px] 2xl:w-[1100px] border-[3px] border-[#4c63af] rounded-3xl bg-white">
                <div className="my-4 mx-4 ">
                  <img
                    className="rounded-3xl border-[3px] border-[#4c63af] "
                    src={news}
                    alt="pokemon"
                  />
                </div>
                <div className="mt-1 mx-6 text-3xl font-semibold">
                  <p className="work-name text-[#4c63af]">Ogs Daily News</p>
                </div>
                <div className=" mx-3  flex justify-end text-5xl text-[#4c63af]">
                  <Popover content={content7}>
                    <TiPlusOutline className="btn-plus border-[3px] mb-2 rounded-full border-[#4c63af]" />
                  </Popover>
                </div>
              </div>
            </a>
          </SwiperSlide>

          <SwiperSlide className="flex justify-center items-center content-center my-5">
            <a href="https://github.com/rxuby/Redux.git">
              <div className="work-box sm:w-[500px] md:w-[700px] lg:w-[700px] xl:w-[1000px] 2xl:w-[1100px] border-[3px] border-[#4c63af] rounded-3xl bg-white">
                <div className="my-4 mx-4 ">
                  <img
                    className="rounded-3xl border-[3px] border-[#4c63af] "
                    src={redux}
                    alt="pokemon"
                  />
                </div>
                <div className="mt-1 mx-6 text-3xl font-semibold">
                  <p className="work-name text-[#4c63af]">
                    Vite + React + Redux
                  </p>
                </div>
                <div className=" mx-3  flex justify-end text-5xl text-[#4c63af]">
                  <Popover content={content8}>
                    <TiPlusOutline className="btn-plus border-[3px] mb-2 rounded-full border-[#4c63af]" />
                  </Popover>
                </div>
              </div>
            </a>
          </SwiperSlide>

          <SwiperSlide className="flex justify-center items-center content-center my-5">
            <a href="https://github.com/rxuby/React_Route.git">
              <div className="work-box sm:w-[500px] md:w-[700px] lg:w-[700px] xl:w-[1000px] 2xl:w-[1100px] border-[3px] border-[#4c63af] rounded-3xl bg-white">
                <div className="my-4 mx-4">
                  <img
                    className="rounded-3xl border-[3px] border-[#4c63af] "
                    src={wscss}
                    alt="pokemon"
                  />
                </div>
                <div className="mt-1 mx-6 text-3xl font-semibold">
                  <p className="work-name text-[#4c63af]">CSS Module</p>
                </div>
                <div className=" mx-3  flex justify-end text-5xl text-[#4c63af]">
                  <Popover content={content9}>
                    <TiPlusOutline className="btn-plus border-[3px] mb-2 rounded-full border-[#4c63af]" />
                  </Popover>
                </div>
              </div>
            </a>
          </SwiperSlide>
        </Swiper>
      </div>
    </motion.div>
  );
}

export default WorkPage;
