import React from "react";
import Logo from "/Logo.png";
import { MdCopyright } from "react-icons/md";
import Navbar from "./navbar";
import { MdOutlineEmail } from "react-icons/md";

import {
  FaGithub,
  FaDiscord,
  FaFacebook,
  FaTwitter,
  FaSlack,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex flex-col items-start justify-between gap-3 px-3.5 py-5 transition-colors duration-500 ease-in-out border-t border-slate-300 dark:border-gray-900 md:flex-row md:flex lg:px-20 bg-background-light dark:bg-background-dark font-primary">
      <div className="flex items-center justify-center gap-5">
        <div>
          <img src={Logo} alt="" className="h-[45px] w-[45px]" />
        </div>
        <div className="flex flex-col ">
          <div className="font-semibold text-light-p font-primary dark:text-light-s">
            <Navbar />
          </div>
          <p className="flex items-center justify-center gap-5 text-sm text-light-s">
            <MdCopyright />
            2023 Philippines. All right Reserved.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-3 text-light-s">
        <div className="flex justify-between text-xl">
          <a href="https://github.com/mitzukin">
            <FaGithub />
          </a>

          <a href="https://www.facebook.com/jason.tajor1/">
            <FaFacebook />
          </a>
          <a href="https://twitter.com/kintajor">
            <FaTwitter />
          </a>
          <a href="https://codebility.slack.com/team/U066BCE2V5L">
            <FaSlack />
          </a>
          <a href="https://mail.google.com/mail/u/2/#inbox?compose=DmwnWtDkwghCrRHLGTwcwRdVGzvMVFqrlxJGnkSwLxXQDztkPqdpcbqrQDBfvMfGNkcNdQQkGPhq">
            <MdOutlineEmail />
          </a>
        </div>
        <div>
          <p className="text-xs text-DarkBlue font-Accent">
            Thank you for Visiting my Portfolio
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
