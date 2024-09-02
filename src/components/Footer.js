import React from "react";
import { FaGooglePlay } from "react-icons/fa";
import {
  FaFacebook,
  FaYoutube,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import logo from "../assets/images/logo2.jpg"

const Footer = () => {
  return (
    <footer className="bg-[#414143] text-white py-10">
      <div className="container mx-auto px-6 w-5/6">
        {/* <!-- Footer Content in the Same Row --> */}
        <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-20">
          {/* <!-- Footer Columns --> */}
          <div className="w-full md:w-1/5 mb-2">
            <ul>
              <li>
                <a href="#" className="hover:text-gray-300">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Vlog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Affiliates
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/5 mb-2">
            <ul>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Partnerships
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Newsletter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Newsletter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Copyright
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/5 mb-2">
            <ul>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Register as
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Instructor
                </a>
              </li>
            </ul>
          </div>

          {/* <!-- Newsletter Subscription   --> */}
          <div className="w-full md:w-1/3 flex flex-col items-center md:items-start space-y-4 ">
            <h5 className="text-lg font-semibold">Subscribe to Newsletter</h5>
            <div className="relative w-full">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 pr-12 rounded-md border border-gray-600 bg-gray-900 text-white w-full"
              />
              <button className="absolute inset-y-0 right-0 p-2 bg-blue-500 text-white rounded-r-md flex items-center">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 17l4-4-4-4m8 8l4-4-4-4"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          {/* Google Play Button */}

          <button
            className="p-2 bg-black text-white rounded-md flex items-center mt-20 md:mt-0 md:w-1/5 "
            style={{ marginTop: "3%" }}
          >
            <FaGooglePlay className="w-8 h-7 mr-3" />
            <div className="flex flex-col items-start leading-tight">
              <span className="text-xs">Get it on</span>
              <span className="text-lg font-bold">Google Play</span>
            </div>
          </button>
        </div>

        {/* <!-- Footer Bottom --> */}
        <div className="border-t border-gray-600 pt-4 flex flex-col md:flex-row justify-between items-center mt-6">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <img
              src={logo} // Replace this with the path to your logo image
              alt="Logo"
              className="h-12 md:h-16 mix-blend-multiply	" // Adjust the height to your preference
            />
          </div>
          <div className="text-center mb-4 md:mb-0">
            <span className="text-sm">
              Copyright © 2020 All rights reserved
            </span>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              className="text-gray-400 hover:text-white"
            >
              <FaFacebook className="w-6 h-6" />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              className="text-gray-400 hover:text-white"
            >
              <FaYoutube className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              className="text-gray-400 hover:text-white"
            >
              <FaInstagram className="w-6 h-6" />
            </a>
            <a
              href="https://www.twitter.com/"
              target="_blank"
              className="text-gray-400 hover:text-white"
            >
              <FaTwitter className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              className="text-gray-400 hover:text-white"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
