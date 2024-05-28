import { FaGithub } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import small6 from "../images/small6.png";
// import stamp1 from "@images/stamp1.png";


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
      {/* <img className="hidden absolute top-[20rem] left-[0rem] xl:flex  rotate-12" width={"50%"} src={stamp1} alt="" /> */}
      
      <div className="contact-box flex flex-col justify-center items-center  md:justify-center md:items-center py-4  gap-6 relative">
        <h1
          style={{ fontFamily: "Lilita One" }}
          className="contact justify-center  text-5xl md:text-7xl  text-[#FF9494] "
        >
          MY CONTACT
        </h1>
        <img
        className="absolute hidden  md:flex lg:flex xl:flex xl:w-32 lg:w-24 md:w-28 md:left-[26rem] md:top-[0rem] md:rotate-12  lg:left-[40rem] lg:top-[0rem] lg:rotate-12  xl:left-[40rem] xl:top-[0rem]  xl:rotate-12 "
        src={small6}
        alt=""
      />

        <div
          className="flex flex-col items-start z-50 md:flex-col md:justify-center md:items-start lg:flex-row  xl:flex-row  gap-10 mt-20 "
          style={{ fontFamily: "Varela Round" }}
        >
          <div
            onClick={() => copyToClipboard("091-071-7585")}
            className="contact-phone flex items-center justify-around gap-2 cursor-pointer"
          >
            <div
              className="flex justify-center items-center cursor-pointer border-2 rounded-xl p-2 border-[#4c63af]"
              onClick={() => copyToClipboard("091-071-7585")}
            >
              <FaPhoneAlt className="contact-icon-phone text-2xl text-[#4c63af]" />
            </div>

            <div
              className="flex justify-center items-center cursor-pointer"
              onClick={() => copyToClipboard("091-071-7585")}
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
   
   
    </div>
  );
}

export default ContactPage;
