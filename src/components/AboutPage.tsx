import "../App.css";
import { motion } from "framer-motion";
import vector from "../images/Vector.png";
import heart2 from "../images/heart2.png";
import khing4 from "../images/khing4.jpg";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaDocker,
  FaFigma,
  FaJsSquare,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiPostman,
  SiVite,
  SiAntdesign,
  SiFramer,
  SiPlaywright,
  SiRobotframework,
} from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";

const skills = [
  { icon: <FaHtml5 />, name: "HTML" },
  { icon: <FaCss3Alt />, name: "CSS" },
  { icon: <FaJsSquare />, name: "JavaScript" },
  { icon: <BiLogoTypescript />, name: "TypeScript" },
  { icon: <SiVite />, name: "Vite" },
  { icon: <FaReact />, name: "React" },
  { icon: <SiTailwindcss />, name: "Tailwind" },
  { icon: <SiAntdesign />, name: "Ant Design" },
  { icon: <SiFramer />, name: "Framer Motion" },
  { icon: <FaFigma />, name: "Figma" },
  { icon: <FaGitAlt />, name: "Git" },
  { icon: <FaDocker />, name: "Docker" },
  { icon: <SiPostman />, name: "Postman" },
  { icon: <SiPlaywright />, name: "Playwright" },
  { icon: <SiRobotframework />, name: "Robot" },
];

function AboutPage() {
  return (
    <motion.div className="relative overflow-visible bg-white border-[3px] border-[#4c63af] rounded-3xl px-5 mx-5">
      <div className="pt-3 ">
        <motion.img
          className="absolute w-44 top-[560px] right-0 rotate-90 md:w-80 md:right-0 md:top-[288px] md:rotate-[100deg] lg:right-14 lg:top-[320px] lg:rotate-90 xl:rotate-12 xl:right-[560px] xl:top-[-64px]"
          src={vector}
          alt="arrow right icon"
        />
      </div>
      <motion.div className="flex flex-col-reverse xl:flex-row xl:justify-around items-center mt-7 xl:mt-2">
        <motion.div className="about-box w-[80%] xl:w-[50%]">
          <div className="flex justify-end lg:justify-center xl:justify-end">
            <p className="px-5 text-3xl md:text-6xl xl:px-0 xl:text-5xl font-bold text-[#4c63af]">
              Jutapon Chaiyakhun
            </p>
          </div>
          <div className="flex text-[25px] xl:text-[27px] mt-5 text-[#4c63af]">
            <img
              className="absolute w-9 -rotate-12 md:w-14 md:bottom-[19rem] md:left-16 md:-rotate-12 lg:bottom-[30rem] lg:left-24 lg:-rotate-12 xl:top-24 xl:left-28 xl:-rotate-12"
              src={heart2}
              alt="pink heart icon"
            />
            <p className="text-center mb-10 xl:mb-0 xl:text-justify xl:break-normal tracking-tight">
              Hi there! My name is Jutapon Chaiyakhun. I'm 23 years old and
              graduated in Computer Science from the College of Computing, Khon
              Kaen University
            </p>
          </div>
          <div>
            <div className=" flex justify-between items-center text-[25px] xl:text-[30px] mt-8 mb-5 text-[#4c63af] border-b-2 border-[#4c63af]">
              <p className="px-5 mb-3 text-3xl md:text-6xl xl:px-0 xl:text-4xl font-bold text-[#4c63af] ">
                Key Skills
              </p>
              <p className="flex items-center text-2xl">
                Frontend &gt; Dota Bruhh
              </p>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 text-[#4c63af]">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="skill flex items-center text-center text-4xl border-2 border-[#4c63af] "
                  whileHover={{ scale: 1.0, rotate: 3 }}
                  // whileTap={{ scale: 0.1 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.01 }}
                >
                  {/* <div className="text-[#4c63af] pl-2">{skill.icon}</div> */}
                  <p className="text-[18px] mt-1 pl-2 ">{skill.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
        <motion.div className="w-[400px] lg:mb-5">
          <h1
            style={{ fontFamily: "Lilita One" }}
            className="flex justify-start lg:justify-center xl:ml-5 text-6xl text-[#92a1d4] pt-5 lg:rotate-0 xl:-rotate-6"
          >
            ABOUT ME
          </h1>
          <motion.div className="pic-box border-[4px] border-[#4c63af] p-6 xl:-rotate-6">
            <img
              width={"100%"}
              className="flex  justify-center items-center border-[4px] border-[#4c63af]"
              src={khing4}
              alt="author image"
            />
          </motion.div>
          <div className="flex">
            <motion.p
              className="xl:mt-5 text-4xl p-3 px-20 lg:rotate-6 xl:rotate-6 border-2 border-[#4c63af] bg-[#4c63af] text-[#fff] shadow-md"
              style={{ fontFamily: "Lilita One" }}
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
