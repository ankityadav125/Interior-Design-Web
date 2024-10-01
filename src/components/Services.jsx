import React from "react";
import { FaVectorSquare } from "react-icons/fa";
import { FaPenToSquare } from "react-icons/fa6";
import { BiSolidDollarCircle } from "react-icons/bi";
import { GrUserExpert } from "react-icons/gr";
import { SiEasyeda } from "react-icons/si";
import { FaShippingFast } from "react-icons/fa";

import { motion } from "framer-motion";
import { SlideUp } from "../animate";

const ServiceCard = [
  {
    id: 1,
    title: "Luxury Facilities",
    description:
      "Luxury interior design focuses on high-quality materials, craftsmanship, and attention to detail. It creates a sophisticated atmosphere through custom furnishings, unique art pieces, and a curated blend of elements.",
    icon: <FaVectorSquare />,
    link: "#",
    delay: 0.2,
  },
  {
    id: 2,
    title: "Quality Products",
    description:
      "Quality in interior design is mainly defined by the quality of raw materials used in the product and the quality of craftmanship. The most common raw materials used are plywood, particle board, veneer, glue, laminate, paint etc.",
    icon: <FaPenToSquare />,
    link: "#",
    delay: 0.4,
  },
  {
    id: 3,
    title: "Affordable Price",
    description:
      "If you think about it, art and design go hand in hand. Based on the type of art you choose, it can also be a great option for a low-budget home design. Be it fun posters or detailed portraits, there’s a wide variety of options to choose from for your walls.",
    icon: <BiSolidDollarCircle />,
    link: "#",
    delay: 0.6,
  },

  {
    id: 4,
    title: "Expert People's",
    description:
      "If you think about it, art and design go hand in hand. Based on the type of art you choose, it can also be a great option for a low-budget home design. Be it fun posters or detailed portraits, there’s a wide variety of options to choose from for your walls.",
    icon: <GrUserExpert />,
    link: "#",
    delay: 0.2,
  },
  {
    id: 5,
    title: "Easily Availables",
    description:
      "If you think about it, art and design go hand in hand. Based on the type of art you choose, it can also be a great option for a low-budget home design. Be it fun posters or detailed portraits, there’s a wide variety of options to choose from for your walls.",
    icon: <SiEasyeda />,
    link: "#",
    delay: 0.4,
  },
  {
    id: 6,
    title: "Fast Services",
    description:
      "Quality in interior design is mainly defined by the quality of raw materials used in the product and the quality of craftmanship. The most common raw materials used are plywood, particle board, veneer, glue, laminate, paint etc.",
    icon: <FaShippingFast />,
    link: "#",
    delay: 0.6,
  },
];
const Services = () => {
  return (
    <div>
      <div className="container py-20">
        <div className="space-y-2 text-center max-w-[600px] mx-auto mb-8">
          <motion.h1
            variants={SlideUp(0.2)}
            initial="initial"
            whileInView={"animate"}
            className="text-3xl font-bold font-mono"
          >
            WHAT WE PROVIDE
          </motion.h1>
          <motion.p
            variants={SlideUp(0.4)}
            initial="initial"
            whileInView={"animate"}
            className="text-gray-500 text-sm font-mono"
          >
            Dreaming of a home that looks like it came straight from a magazine?
            Now you can make it happen! With one-on-one design help and
            hand-picked products tailored to your style, space, and budget, you
            can bring your dream home to life.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 cursor-pointer">
          {ServiceCard.map((card) => {
            return (
              <motion.div
                variants={SlideUp(card.delay)}
                initial="initial"
                whileInView={"animate"}
                key={card.id}
                className="space-y-4 border-[1px] border-black/30 px-6 py-12 hover:bg-black hover:text-white hover:shadow-[7px_7px_0px_0px_#6c6c6c] duration-300 rounded-lg"
              >
                <span className="inline-block text-xl border-[1px] border-black rounded-full p-3">
                  {card.icon}
                </span>
                <p className="text-2xl font-bold font-mono">{card.title}</p>
                <p className="text-gray-400 text-xs font-mono">
                  {card.description}
                </p>
                <a
                  href={card.link}
                  className="inline-block border-b font-mono border-black"
                >
                  Explore More
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
