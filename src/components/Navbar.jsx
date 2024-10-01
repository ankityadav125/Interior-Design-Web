import React from "react";
import { motion } from "framer-motion";

const NavLinks = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "About",
    link: "/about",
  },
  {
    id: 3,
    title: "Product",
    link: "/product",
  },
  {
    id: 4,
    title: "Services",
    link: "/services",
  },
  {
    id: 5,
    title: "Contact Us",
    link: "/contact",
  },
];
const Navbar = () => {
  return (
    <>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="container py-6 flex justify-between items-center"
      >
        <div className="flex items-center gap-3">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMK8Gh722DeoPASp6I9Z68lLi30bcIUTZ63zWHmT_JYmWDE1TtEJ0OsV0k0jSidE_jbMU&usqp=CAU"
            alt="logo"
            className="w-10 h-10"
          />
          <span className="text-2xl font-bold font-mono">Interior Design</span>
        </div>
        <div className="hidden md:block !space-x-12">
          {NavLinks.map((link) => {
            return (
              <a
                href={link.link}
                className="inline-block mx-4 text-lg font-semibold font-mono"
              >
                {link.title}
              </a>
            );
          })}
        </div>
        <div>
          <button className="primary-btn font-mono rounded-md ">
            Explore More
          </button>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
