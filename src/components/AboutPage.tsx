// import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import snowball from "@images/sn.jpg";
import vector from "../images/Vector.png";
import heart2 from "../images/heart2.png";

function AboutPage() {
  const { ref: refAbout, inView: inViewAbout } = useInView({
    triggerOnce: true,
  });
  const { ref: refInfo, inView: inViewInfo } = useInView({ triggerOnce: true });
  const { ref: refImage, inView: inViewImage } = useInView({
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={refAbout}
      initial={{ opacity: 0 }}
      animate={inViewAbout ? { opacity: 1, x: 0 } : {}}
      // transition={{ duration: 1, delay: 2 }}
      className="bg-white border-[3px] border-[#4c63af] rounded-3xl mx-5"
    >
      <div className="pt-3 ">
        <motion.img
          // initial={{ opacity: 0, x: -50 }}
          // animate={inViewAbout ? { opacity: 1, x: 0 } : {}}
          // transition={{ duration: 1, delay: 2 }}
          className="absolute w-44 top-[32rem] right-0 rotate-90 md:w-80 md:right-0 md:top-[25rem] md:rotate-[100deg] lg:right-14 lg:top-[35rem] lg:rotate-90 xl:rotate-12 xl:right-[500px] xl:top-0"
          src={vector}
          alt=""
        />
      </div>
      <motion.div
        ref={refAbout}
        className="flex flex-col-reverse xl:flex-row xl:justify-around items-center mt-7 xl:mt-2"
        initial={{ opacity: 0, x: -50 }}
        animate={inViewAbout ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.div
          ref={refInfo}
          className="about-box w-[80%] xl:w-[50%]"
          initial={{ opacity: 0 }}
          animate={inViewInfo ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1 }}
        >
          <div className="flex justify-end lg:justify-center xl:justify-end">
            <p className="px-5 xl:px-0 text-6xl xl:text-5xl font-bold text-[#4c63af]">
              Jutapon Chaiyakhun
            </p>
          </div>
          <div className="flex text-[25px] xl:text-[27px] mt-5 text-[#4c63af]">
            <img
              className="absolute w-9 -rotate-12 md:w-14 md:bottom-[19rem] md:left-16 md:-rotate-12 lg:bottom-[30rem] lg:left-24 lg:-rotate-12 xl:top-52 xl:left-28 xl:-rotate-12"
              src={heart2}
              alt=""
            />
            <p className="text-center mb-10 xl:mb-0 xl:text-justify xl:break-normal xl:indent-16 tracking-tight">
              Hi there!, my name is Jutapon Chaiyakhun. I am now 21 yo! and
              studying computer science at the College of Computing at Khon Kaen
              University I have the ability to design and create websites. I
              would like to use the knowledge I have learned to create works and
              gain new experiences. to myself to work as a website development
              team to apply the knowledge and experience from this internship to
              future work after graduation.
            </p>
          </div>
        </motion.div>
        <motion.div
          ref={refImage}
          className="w-[400px] lg:mb-5"
          initial={{ opacity: 0 }}
          animate={inViewImage ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1 }}
        >
          <h1
            style={{ fontFamily: "Lilita One" }}
            className="flex justify-start lg:justify-center xl:ml-5 text-6xl text-[#92a1d4] pt-5 lg:rotate-0 xl:-rotate-6"
          >
            ABOUT ME
          </h1>
          <motion.div
            className="pic-box border-[4px] border-[#4c63af] p-6 xl:-rotate-6"
            initial={{ opacity: 0, rotate: 0 }}
            animate={inViewImage ? { opacity: 1, rotate: -6 } : {}}
            transition={{ duration: 1, delay: 1 }}
          >
            <img
              width={"100%"}
              className="border-[4px] border-[#4c63af]"
              src={snowball}
              alt=""
            />
          </motion.div>
          <div className="flex">
            <motion.p
              className="xl:mt-5 text-4xl p-3 px-20 lg:rotate-6 xl:rotate-6 border-2 border-[#4c63af] bg-[#4c63af] text-[#fff] shadow-md"
              style={{ fontFamily: "Lilita One" }}
              initial={{ opacity: 0, rotate: 0 }}
              animate={inViewImage ? { opacity: 1, rotate: 7 } : {}}
              transition={{ duration: 1, delay: 1.5 }}
            >
              KHING
            </motion.p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default AboutPage;
