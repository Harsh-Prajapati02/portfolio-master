import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "../components/ui/MagicButton";
import Image from "next/image";


export const Footer = () => {
  return (
    <footer
      className="relative top-10 md:top-40 lg:top-30 max-w-7xl mx-auto pb-0 px-4"
      id="contact"
      style={{ zIndex: "1" }}
    >
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-5xl lg:text-6xl font-semibold max-w-4xl mx-auto text-center relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-[#eb5939] via-[#b7ab98] to-[#b7ab98] tracking-wide leading-13 md:leading-15 lg:leading-15">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>

        <p className="text-[#b7ab98] text-center my-5 text-sm md:text-lg max-w-xl">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>

        <div
          className="pt-5 md:p-0 mt-0"
          style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
        >
          <a href="mailto:harsh.prajapati0206@gmail.com">
            <MagicButton
              title="Let's get in touch"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex mt-16 flex-row justify-between items-center">

        <p className="text-[#b7ab98] text-center my-5 text-sm md:text-lg max-w-xl">
          Copyright © 2025 Harsh Prajapati
        </p>

        {/* Social Icons */}
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 cursor-pointer flex justify-center items-center border border-white/[0.2] bg-black-200 rounded-lg hover:border-[#eb5939] transition"
            >
              <Image src={info.img} alt="social-icon" width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/Harsh-Prajapati02/",
  },
  {
    id: 2,
    img: "link.svg",
    link: "https://www.linkedin.com/in/harsh-prajapati02",
  },
  {
    id: 3,
    img: "/twit.svg",
    link: "https://twitter.com/",
  },
];
