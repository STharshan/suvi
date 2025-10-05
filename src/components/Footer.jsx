import React from "react";
import { FaFacebookF, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 py-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-25 text-left">
        {/* Column 1 */}
        <div>
          <img
            className="h-25 w-40 font-serif tracking-widest ml-8 sm:ml-5"
            src="/logo.png"
            alt="logo"
          />
          <p className="text-md font-semibold text-gray-400 mb-4 mt-3">
              At <strong>Maruthady Travels & Moters</strong>, we specialize in providing high-quality vehicle 
              parts and accessories designed to keep your Vehicle running smoothly and safely.
          </p>
          <div className="flex gap-5">
            <div className="flex space-x-4 text-white justify-center bg-[#a45731] rounded-full p-2 w-8">
              {/* Facebook Icon */}
              <a
                href="https://www.facebook.com/p/Chocoholic-desserts-61561513890525/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600"
              >
                <FaFacebookF />
              </a>
            </div>
            <div className="flex space-x-4 text-white justify-center bg-[#a45731] rounded-full p-2 w-8">
              {/* TikTok Icon */}
              <a
                href="https://www.tiktok.com/@maruthadytravels?_t=ZS-90H1Fz7EXeq&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black" // TikTok's color code
              >
                <FaTiktok />
              </a>
            </div>
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-xl font-bold mb-5 text-[#a45731]">Quick Links</h3>
          <ul className="space-y-2 text-md text-gray-400 font-semibold">
            <li>
              <a href="#" className="hover:text-[#a45731]">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-[#a45731]">
                About
              </a>
            </li>
            <li>
              <a href="#menu" className="hover:text-[#a45731]">
                Menu
              </a>
            </li>
            <li>
              <a href="#hire" className="hover:text-[#a45731]">
                Contact
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[#a45731]">
                FindUs
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-xl font-bold mb-5 text-[#a45731]">Contact Info</h3>
          <ul className="space-y-2 text-md text-gray-400 font-semibold">
            <li className="flex items-start gap-2">
              <a
                href="https://maps.app.goo.gl/9d6Yyp1i51TVRsdo8"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 hover:text-[#a45731]"
              >
                <FiMapPin className="mt-1 text-[#a45731]" />
                Sothivembedi Lane,<br />
                Manipay,<br />
                Jaffna
              </a>
            </li>
            <li className="flex items-center gap-2">
              <a
                href="tel: +94775001384"
                className="flex items-center gap-2 hover:text-[#a45731]"
              >
                <FiPhone className="text-[#a45731]" />
                0775001384
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FiMail className="text-[#a45731]" />
              <a
                href="mailto:suvirthan@gmail.com"
                className="hover:text-[#a45731]"
              >
                suvirthan@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <hr className="my-8 border-gray-600" />

      {/* Bottom Bar */}
      <div className="text-center text-md text-white font-semibold">
        © 2025 Maruthady Travels & Stores. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
