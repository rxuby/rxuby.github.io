import { motion } from "framer-motion";
import star from "../images/star.svg"
import small2 from "../images/small2.png"
import small4 from "../images/small4.png"


function HomePage() {
  return (
    <div>
      <img className="absolute w-64 md:w-96 lg:w-96 xl:w-96  sm:left-24 sm:top-64 sm:rotate-12 md:left-24 md:top-64 md:rotate-12 lg:left-36 lg:top-96 lg:rotate-12  xl:left-64 xl:top-32 xl:rotate-12" src={star} alt="" />
      {/* <img className="absolute w-[800px]  left-[200px] top-52 " src={fill} alt="" /> */}

      {/* <img className="absolute w-32 right-32 -rotate-12" src={small1} alt="" /> */}
      
      <img  className="absolute w-12 bottom-10 right-1 z-20 md:w-20  md:bottom-[14rem] md:right-20 md:rotate-6 lg:bottom-[30rem] lg:right-20 lg:rotate-6 xl:bottom-48 xl:right-64 xl:rotate-6" src={small4} alt="" />
      <img className="absolute w-14 bottom-0 right-5 z-20 md:w-24 md:bottom-[9rem]  md:right-32 lg:bottom-96  lg:right-24 xl:bottom-24  xl:right-72 "  src={small2} alt="" />
   
    
      <motion.div
        className="flex justify-center items-center relative transition-transform duration-500"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1
          style={{ fontFamily: "Lilita One" }}
          className="flex justify-center items-center text-4xl p-3 px-12 border-2 mt-10 md:mt-0 md:text-7xl md:p-3 md:px-14 md:border-[3px] border-[#4c63af] bg-[#92a1d4] text-[#fbefe1]"
        >
          Hello!
        </h1>
      </motion.div>
      <motion.div
        className="flex flex-col justify-center items-center relative top-1 pt-3 "
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1
          style={{ fontFamily: "Lilita One" }}
          className="flex justify-center items-center text-3xl md:text-7xl p-3 px-14 border-[3px] md:-rotate-3 border-[#4c63af] bg-[#FF9494] text-[#fbefe1]"
        >
          This is my Portfolio
        </h1>
        <h1
          style={{ fontFamily: "Lilita One" }}
          className="flex justify-center items-center text-3xl md:text-7xl p-3 px-14 mt-[3px] border-[3px] md:-rotate-3 border-[#4c63af] bg-[#FFD1D1] text-[#fbefe1]"
        >
          Front-End Developer
        </h1>
      </motion.div>
      <motion.div
        className="flex justify-center items-center  relative "
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', stiffness: 120 }}
      >
        <h1
          style={{ fontFamily: "Lilita One" }}
          className="flex justify-center items-center text-xl  md:text-5xl p-3 px-14 border-[3px] md:rotate-2 border-[#4c63af] bg-[#92a1d4] text-[#fbefe1]"
        >
          Design by Khing CS KKU 58
        </h1>
      </motion.div>
      
    
      {/* <img className="absolute" src={small3} alt="" /> */}
      {/* <img  className="absolute w-20 -rotate-12" src={small4} alt="" /> */}
    </div>
  );
}

export default HomePage;
