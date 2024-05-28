// import React from 'react'
import "./CSS/BreakPage2.css";
import bp1 from "../images/bp1.png";
import { motion } from "framer-motion";


function BreakPage2() {
  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-center items-center ">
        <motion.div 
          style={{ fontFamily: "Lilita One" }}
          className="banner-tag relative gap-6 text-nowrap flex justify-center items-center text-2xl xl:p-5 px-12 mt-10 md:mt-0 md:text-7xl md:p-3 md:px-14  text-[#fbefe1]">
          <motion.p className="box relative z-20  bottom-0 border-[3px] border-[#4c63af] bg-[#FF9494] text-[#fbefe1] rotate-6 p-2">HTML5 </motion.p>
          <motion.p className="box relative bottom-0 border-[3px] border-[#4c63af] bg-[#FFD1D1] text-[#fbefe1] -rotate-3 p-2 ">CSS3</motion.p>
          <motion.p className="box relative bottom-0 border-[3px] border-[#4c63af] bg-[#FF9494] text-[#fbefe1] rotate-3 p-2 ">REACT</motion.p>
          <motion.p className="box relative top-6    bottom-0 border-[3px] border-[#4c63af] bg-[#FFD1D1] text-[#fbefe1] -rotate-12 p-2 ">VITE</motion.p>
          <motion.p className="box relative bottom-0 border-[3px] border-[#4c63af] bg-[#FF9494] text-[#fbefe1] -rotate-3 p-2 ">TYPESCRIP</motion.p>
          <motion.p className="box relative bottom-0 border-[3px] border-[#4c63af] bg-[#FFD1D1] text-[#fbefe1] rotate-12 p-2 ">TAILWIND</motion.p>
          <motion.p className="box relative bottom-0 border-[3px] border-[#4c63af] bg-[#FF9494] text-[#fbefe1] -rotate-3 p-2 ">MOTION </motion.p>
        </motion.div>
        <div className="bp absolute w-[17rem] ">
          <img src={bp1} alt="" />
        </div>
      </div>
    </div>
  );
}

export default BreakPage2;
