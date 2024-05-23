import { FaGithub } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import sticker3 from "../images/sticker3.png";
// import stamp2 from "../images/stamp2.png"

function ContactPage() {
  const copyToClipboard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        const message = document.createElement("div");
        message.textContent = "Copied!";
        message.classList.add("copy-message");
        document.body.appendChild(message);

        setTimeout(() => {
          message.remove();
        }, 1000);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <div>
      {/* <img
        className=" absolute w-20 top-16  md:w-[10rem] md:top-[4rem] md:left-12 md:-rotate-12 lg:top-[15rem] lg:left-20 lg:-rotate-12 xl:top-[8rem] xl:left-[12rem] xl:-rotate-6"
        src={stamp2}
        alt=""
      /> */}
      {/* <img
        className=" absolute w-20 top-16 md:w-20 md:top-[4rem] md:left-12 md:-rotate-12 lg:top-[15rem] lg:left-20 lg:-rotate-12 xl:top-[18rem] xl:left-[20rem] xl:rotate-12"
        src={heart7}
        alt=""
      /> */}
    
      <img
        className=" absolute w-20 top-20 right-20 md:w-48 md:top-[6rem] md:right-12  md:rotate-6 lg:top-52 lg:right-24 lg:rotate-6 xl:top-[8rem] xl:right-[10rem] xl:rotate-6"
        src={sticker3}
        alt=""
      />
      <div className="contact-box flex flex-col justify-center items-center  md:justify-center md:items-center py-4  gap-6 bg-white">
        <h1
          style={{ fontFamily: "Lilita One" }}
          className="contact justify-center z-50 text-5xl md:text-7xl  text-[#FF9494] "
        >
          MY CONTACT
        </h1>
        {/* <img className="absolute w-36 left-96 top-36 rotate-45" src={vector2} alt="" /> */}

        <div
          className="flex flex-col items-start z-50 md:flex-col md:justify-center md:items-start lg:flex-row  xl:flex-row  gap-10 mt-20 "
          style={{ fontFamily: "Varela Round" }}
        >
          <div
            onClick={() => copyToClipboard("091-071-xxxx")}
            className="contact-phone flex items-center justify-around gap-2 cursor-pointer"
          >
            {/* <img className="absolute w-96" src={fill} alt="" /> */}
            <div
              className="flex justify-center items-center cursor-pointer border-2 rounded-xl p-2 border-[#4c63af]"
              onClick={() => copyToClipboard("091-071-xxxx")}
            >
              <FaPhoneAlt className="contact-icon-phone text-2xl text-[#4c63af]" />
            </div>

            <div
              className="flex justify-center items-center cursor-pointer"
              onClick={() => copyToClipboard("091-071-xxxx")}
            >
              <p className="contact-text-phone text-xl text-[#4c63af] font-semibold">
                091-071-7585
              </p>
            </div>
          </div>

          <a
            href="mailto:jutapon.c@kkumail.com"
            className="contact-mail flex items-center justify-around gap-2 "
          >
            <a
              href="mailto:jutapon.c@kkumail.com"
              className="flex justify-center items-center cursor-pointer border-2 rounded-xl p-2 border-[#4c63af]"
              // onClick={() => copyToClipboard("jutapon.c@kkumail.com")}
            >
              <MdEmail className="contact-icon-mail text-2xl text-[#4c63af] " />
            </a>

            <a
              href="mailto:jutapon.c@kkumail.com"
              className="flex justify-center items-center cursor-pointer"
            >
              <p className="contact-text-mail text-xl text-[#4c63af] font-semibold">
                jutapon.c@kkumail.com
              </p>
            </a>
          </a>

          <a
            href="https://www.facebook.com/profile.php?id=100009523756189"
            className="contact-fb flex items-center justify-around gap-2 cursor-pointer"
          >
            <a
              href="https://www.facebook.com/profile.php?id=100009523756189"
              className="border-2 rounded-xl p-2 border-[#4c63af]"
            >
              {" "}
              <div className="flex justify-center items-center">
                <FaFacebookF className="contact-icon-fb text-2xl text-[#4c63af]" />
              </div>
            </a>

            <a href="https://www.facebook.com/profile.php?id=100009523756189">
              {" "}
              <div className="flex justify-center items-center">
                <p className="contact-text-fb text-xl text-[#4c63af] font-semibold">
                  Facebook
                </p>
              </div>
            </a>
          </a>
          <a
            href="https://github.com/rxuby"
            className="contact-git flex items-center justify-around gap-2"
          >
            <a
              href="https://github.com/rxuby"
              className="border-2 rounded-xl p-2 border-[#4c63af]"
            >
              <div className="flex justify-center items-center">
                <FaGithub className="contact-icon-git text-2xl text-[#4c63af]" />
              </div>
            </a>
            <a href="https://github.com/rxuby">
              <div className="flex justify-center items-center">
                <p className="contact-text-git text-xl text-[#4c63af] font-semibold">
                  GitHub
                </p>
              </div>
            </a>
          </a>
        </div>
      </div>

      {/* <img className="absolute w-24 md:right-36 md:top-[27rem] md:-rotate-12 lg:right-56 lg:top-[27rem] lg:-rotate-12 xl:right-56 xl:top-[18rem]  z-20 xl:-rotate-12" src={flower1} alt="" /> */}
      {/* <img
        className="absolute xl:w-40 lg:w-36 md:w-28 md:left-[0rem] md:bottom-[9rem]  md:-rotate-12 lg:left-[10rem] lg:bottom-[26rem]  lg:-rotate-12 xl:left-[350px] xl:bottom-7 z-20 xl:-rotate-12 "
        src={stamp2}
        alt=""
      /> */}

      <h1
        style={{ fontFamily: "Lilita One" }}
        className="text-ty absolute flex justify-center items-center text-5xl p-3 px-14  md:-rotate-3  md:right-5 md:bottom-[10rem] lg:-rotate-3  lg:right-20 lg:bottom-[28rem] xl:-rotate-3 xl:text-7xl  xl:right-20 xl:bottom-16   text-[#FF9494]"
      >
        Thanks for visit my portfolio 
      </h1>
    </div>
  );
}

export default ContactPage;
