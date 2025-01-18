import { FaLocationArrow } from "react-icons/fa6";

import { footerWords, socialMedia } from "@/data";
import MagicButton from "./ui/magic-button";
import Image from "next/image";
import { TypewriterEffect } from "./ui/typewriter-effect";
import Link from "next/link";

const Footer = () => {
  return (
    <footer id="contact" className="w-full px-20">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <Image
          src="/footer-grid.svg"
          alt="grid"
          width={1000}
          height={1000}
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center w-full">
        <TypewriterEffect words={footerWords} className="text-center md:text-6xl lg:text-6xl px-16" />
        {/* 
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take Your digital
          presence to the next level?
        </h1> */}
        <p className="lg:text-lg lg:font-normal font-light text-sm dark:text-[#BEC1DD] text-black">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:mohammed1.bouzar@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light dark:text-white text-black">
          Copyright © 2024 Mohammed Bouzar
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((sm, idx) => (
            <div
              key={idx}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-slate-950  rounded-lg border border-slate-950"
            >
              <Link href={sm.url}>
                <Image src={sm.image} className="text-white" alt="icons" width={20} height={20} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
