import React from "react";
import { FaPhone } from "react-icons/fa6";
import { LuMessageSquare } from "react-icons/lu";
import { motion } from "framer-motion";
import { SlideLeft } from "../animate";

const Footer = () => {
  return (
    <motion.footer
      variants={SlideLeft(0.2)}
      initial="initial"
      whileInView="animate"
    >
      <div className="container py-11">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4 font-semibold">
            <div className="flex items-center space-x-3">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMK8Gh722DeoPASp6I9Z68lLi30bcIUTZ63zWHmT_JYmWDE1TtEJ0OsV0k0jSidE_jbMU&usqp=CAU"
                alt=""
                className="w-10"
              />
              <p className="text-xl font-semibold font-mono">Interior Design</p>
            </div>
            <p className="font-mono">Bhopal, Madhya Pradesh, India</p>
            <p className="font-mono">
              @ 2024 Ankit Yadav : All rights reserved
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-4">
              <h1 className="text-xl font-semibold font-mono">About us</h1>
              <ul className="text-sm space-y-4">
                <li>
                  <a className="font-mono" href="#">
                    Our Story
                  </a>
                </li>
                <li>
                  <a className="font-mono" href="#">
                    Designer
                  </a>
                </li>
                <li>
                  <a className="font-mono" href="#">
                    Craftmanship
                  </a>
                </li>
                <li>
                  <a className="font-mono" href="#">
                    Sustainability
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h1 className="text-xl font-semibold font-mono">Support</h1>
              <ul className="text-sm space-y-4">
                <li>
                  <a className="font-mono" href="#">
                    FAQ's
                  </a>
                </li>
                <li>
                  <a className="font-mono" href="#">
                    Shipping & Returns
                  </a>
                </li>
                <li>
                  <a className="font-mono" href="#">
                    Care Guide
                  </a>
                </li>
                <li>
                  <a className="font-mono" href="#">
                    Guaranty
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="space-y-4">
            <h1 className="text-xl font-semibold font-mono">Contact us</h1>
            <ul className="text-base font-semibold space-y-4">
              <li className="flex items-center space-x-3">
                <FaPhone />
                <a className="font-mono" href="#">
                  +91 8085092203
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <LuMessageSquare />
                <a className="font-mono" href="#">
                  Email:ankityadav12502@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="text-center text-sm font-semibold font-mono border-t-2 pt-5 mt-5">
          &copy; 2024 Ankit Yadav ❤️. All rights reserved
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
