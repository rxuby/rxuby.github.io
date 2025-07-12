import { motion } from "framer-motion";
import star from "../images/star.svg";
import small2 from "../images/small2.png";
import small4 from "../images/small4.png";
import "../App.css";

function HomePage() {
  return (
    <motion.div className="duration-300 ">
      <motion.img
        animate={{ rotate: 12 }}
        className="absolute w-96 md:w-96 lg:w-96 xl:w-[450px] sm:left-6 sm:top-40 sm:rotate-12 md:left-24 md:top-64 md:rotate-12 lg:left-36 lg:top-96 lg:rotate-12 xl:left-64 xl:top-40 xl:rotate-12 "
        src={star}
        alt="star icon"
      />
      <motion.img
        className="absolute hidden w-12 bottom-10 right-1 z-20 md:flex  md:w-20  md:bottom-[14rem] md:right-20 md:rotate-6  lg:bottom-[30rem] lg:right-20 lg:rotate-6 xl:bottom-48 xl:right-64 xl:rotate-6"
        initial={{ scale: 0 }}
        animate={{ scale: 1, rotate: 6 }}
        transition={{ duration: 0.2, delay: 0.8 }}
        src={small4}
        alt="star icon"
      />
      <motion.img
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.2, delay: 0.9 }}
        className="absolute hidden w-14 bottom-0 right-5 z-20 md:flex md:w-24 md:bottom-[9rem]  md:right-32 lg:bottom-96  lg:right-24 xl:bottom-24  xl:right-72 "
        src={small2}
        alt="star icon"
      />

      <motion.div
        className="flex justify-center items-center relative"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1
          style={{ fontFamily: "Lilita One" }}
          className="box-shadow flex justify-center items-center text-[50px] p-1 px-9 mt-10 mb-1 md:text-7xl md:p-3 md:px-14 border-[3px] border-[#4c63af] bg-[#92a1d4] text-[#fbefe1]"
        >
          Hi! I'm Khing
        </h1>
      </motion.div>
      <motion.div
        className="flex flex-col justify-center items-center relative top-1 "
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1
          style={{ fontFamily: "Lilita One" }}
          className="box-shadow flex justify-center items-center text-center text-[45px] sm:text-[45px] px-8 p-1 mb-1 md:p-3 md:px-14 md:text-7xl border-[3px] border-[#4c63af] bg-[#FF9494] text-[#fbefe1]"
        >
          First Jobber & Front-End Dev
        </h1>
        <h1
          style={{ fontFamily: "Lilita One" }}
          className="box-shadow flex justify-center items-center text-center text-[45px] sm:text-[39.5px] px-4 py-2 p-1  md:text-7xl md:p-3 md:px-14 mt-[3px] border-[3px] border-[#4c63af] bg-[#FFD1D1] text-[#fbefe1]"
        >
          (Still polishing both layout and life)
        </h1>
      </motion.div>
      <motion.div
        className="flex justify-end items-center  relative "
        initial={{ x: "100vw" }}
        animate={{ x: 0, rotate: [0, 3, 3, 0, -5] }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
      >
        <h1
          style={{ fontFamily: "Lilita One" }}
          className="text-shadow flex justify-end items-center text-[34px] p-2 px-2 mt-0 md:text-5xl md:p-3 md:px-14 md:mt-4 border-[#4c63af] text-[#FFBF66]"
        >
          Designed by Khing (CS KKU)
        </h1>
      </motion.div>
    </motion.div>
  );
}

export default HomePage;
