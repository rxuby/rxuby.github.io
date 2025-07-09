import { useEffect } from "react";
import "./CSS/BreakPage2.css";
import bp1 from "../images/bp1.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function BreakPage2() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 100, damping: 10 },
      });
    }
  }, [controls, inView]);

  return (
    <div className="flex justify-center items-center" ref={ref}>
      <div className="flex justify-center items-center ">
        <motion.div
          style={{ fontFamily: "Lilita One" }}
          className="banner-tag relative gap-6 text-nowrap flex justify-center items-center text-6xl xl:p-5 px-12 mt-10 md:mt-0 md:text-7xl md:p-3 md:px-14  text-[#fbefe1]"
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
        >
          <motion.p
            className="cursor-grab active:cursor-grabbing box relative z-30 bottom-0 border-[3px] border-[#4c63af] bg-[#FF9494] text-[#fbefe1] rotate-6 p-2"
            drag
          >
            HTML5
          </motion.p>
          <motion.p
            className="cursor-grab active:cursor-grabbing  box relative z-30 bottom-0 border-[3px] border-[#4c63af] bg-[#FFD1D1] text-[#fbefe1] -rotate-3 p-2"
            drag
          >
            CSS3
          </motion.p>
          <motion.p
            className="cursor-grab active:cursor-grabbing  box relative z-30 bottom-0 border-[3px] border-[#4c63af] bg-[#FF9494] text-[#fbefe1] rotate-3 p-2"
            drag
          >
            REACT
          </motion.p>
          <motion.p
            className="cursor-grab active:cursor-grabbing  box relative z-30 top-6 bottom-0 border-[3px] border-[#4c63af] bg-[#FFD1D1] text-[#fbefe1] -rotate-12 p-2"
            drag
          >
            VITE
          </motion.p>
          <motion.p
            className="cursor-grab active:cursor-grabbing  box relative z-30 bottom-0 border-[3px] border-[#4c63af] bg-[#FF9494] text-[#fbefe1] -rotate-3 p-2"
            drag
          >
            TYPESCRIPT
          </motion.p>
          <motion.p
            className="cursor-grab active:cursor-grabbing  box relative z-30 bottom-0 border-[3px] border-[#4c63af] bg-[#FFD1D1] text-[#fbefe1] rotate-12 p-2"
            drag
          >
            TAILWIND
          </motion.p>
          <motion.p
            className="cursor-grab active:cursor-grabbing  box relative z-30 bottom-0 border-[3px] border-[#4c63af] bg-[#FF9494] text-[#fbefe1] -rotate-3 p-2"
            drag
          >
            MOTION
          </motion.p>
        </motion.div>
        <div className="bp z-40 absolute w-[17rem]">
          <img src={bp1} alt="smile icon" />
        </div>
      </div>
    </div>
  );
}

export default BreakPage2;
