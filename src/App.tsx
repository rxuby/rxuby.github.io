import { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import "./App.css";
import HomePage from "@components/HomePage";
import AboutPage from "@components/AboutPage";
import WorkPage from "@components/WorkPage";
import ContactPage from "@components/ContactPage";
import { AnimatePresence, motion } from "framer-motion";
import BreakPage from "@components/BreakPage";
import { FaBars, FaTimes } from "react-icons/fa";
import BreakPage2 from "@components/BreakPage2";
import Lenis from "@studio-freight/lenis";

function App() {
  const [showNav, setShowNav] = useState(true);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
    });
    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const { ref: aboutRef, inView: inViewAbout } = useInView({
    triggerOnce: true,
  });
  const { ref: workRef, inView: inViewWork } = useInView({ triggerOnce: true });
  const { ref: contactRef, inView: inViewContact } = useInView({
    triggerOnce: true,
  });

  const lastScrollYRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      const isScrollingDown = currentScrollY > lastScrollYRef.current;
      setShowNav(!isScrollingDown);

      lastScrollYRef.current = currentScrollY;

      setShowMobileMenu(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element && lenisRef.current) {
      const top = element.getBoundingClientRect().top + window.scrollY;
      lenisRef.current.scrollTo(top, { duration: 0.5 });
    }
  };

  return (
    <div className="overflow-x-hidden">
      <motion.nav
        className={`flex justify-center fixed h-28 top-0 right-0 z-50 w-full transition-transform duration-500 ${
          showNav ? "translate-y-0" : "-translate-y-full"
        }`}
        initial={{ y: "-100%" }}
        animate={{ y: showNav ? 0 : "-100%" }}
        transition={{ duration: 0.2 }}
      >
        <ul
          className="nav flex justify-between items-center w-full md:mx-5 md:px-7 md:py-4 md:text-3xl md:bg-white border-[3px] md:border-[#5067b0] md:text-[#5067b0] md:rounded-b-xl"
          style={{ fontFamily: "Lilita One" }}
        >
          <div>
            <li className="hidden pr-12 md:flex md:text-[65px] duration-700">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("home");
                }}
              >
                Portfolio
              </a>
            </li>
          </div>
          <div className="gap-11 hidden md:flex md:text-4xl">
            <li className="hov">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("home");
                }}
              >
                Home
              </a>
            </li>
            <li className="hov">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("about");
                }}
              >
                About
              </a>
            </li>
            <li className="hov">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("work");
                }}
              >
                Work
              </a>
            </li>
            <li className="hov">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact");
                }}
              >
                Contact
              </a>
            </li>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="text-4xl bg-white border-[3px] border-[#5067b0] text-[#5067b0] p-2 rounded-lg"
            >
              {showMobileMenu ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </ul>
      </motion.nav>

      <AnimatePresence>
        {showMobileMenu && (
          <motion.div
            className="md:hidden fixed flex flex-col items-end pr-5 top-20 right-0 z-50 w-full text-[#5067b0]"
            style={{ fontFamily: "Lilita One" }}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
          >
            <ul className="flex flex-col text-center items-center gap-4 mt-2 text-4xl md:hidden transition-transform z-50 duration-500">
              <li className="py-2 z-50">
                <a
                  className="py-2 px-8 z-50 bg-white border-[3px] border-[#5067b0] text-[#5067b0]"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("home");
                    setShowMobileMenu(false);
                  }}
                >
                  Home
                </a>
              </li>
              <li className="py-2 z-50">
                <a
                  className="py-2 z-50 px-7 bg-white border-[3px] border-[#5067b0] text-[#5067b0]"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("about");
                    setShowMobileMenu(false);
                  }}
                >
                  About
                </a>
              </li>
              <li className="py-2 z-50">
                <a
                  className="py-2 z-50 px-8 bg-white border-[3px] border-[#5067b0] text-[#5067b0]"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("work");
                    setShowMobileMenu(false);
                  }}
                >
                  Work
                </a>
              </li>
              <li className="py-2 z-50">
                <a
                  className="py-2 z-50 px-4 bg-white border-[3px] border-[#5067b0] text-[#5067b0]"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("contact");
                    setShowMobileMenu(false);
                  }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        id="home"
        className="h-screen md:h-screen flex justify-center items-center mb-10 md:mb-0"
      >
        <HomePage />
      </motion.div>

      <motion.div
        id="about"
        className="h-auto md:h-screen mb-10 md:mb-0 flex justify-center items-center"
        ref={aboutRef}
        initial={{ opacity: 0, y: 50 }}
        animate={inViewAbout ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <AboutPage />
      </motion.div>

      <motion.div
        id="work"
        className="h-auto"
        ref={workRef}
        initial={{ opacity: 0, y: 50 }}
        animate={inViewWork ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <BreakPage />
        <div className="relative z-10">
          <WorkPage />
        </div>
      </motion.div>

      <motion.div className="h-96 flex justify-center items-center">
        <BreakPage2 />
      </motion.div>

      <motion.div
        id="contact"
        className=" h-screen md:h-screen lg:h-screen xl:h-screen flex items-center justify-center border-t-[3px] border-[#4c63af] bg-white"
        ref={contactRef}
        initial={{ opacity: 0, y: 50 }}
        animate={inViewContact ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <ContactPage />
      </motion.div>
    </div>
  );
}

export default App;
