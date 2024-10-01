import React from "react";
import { delay, motion } from "framer-motion";
import { SlideLeft, SlideUp } from "../animate";

const TestimonialData = [
  {
    id: 1,
    name: "Ankit Yadav",
    designation: "Developer",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRALyQqOf9HiIMtEOKKpfiGezO9CwaDjYExXA&s",
    text: "Now you can make it happen! With one-on-one design help and hand-picked products tailored to your style, space, and budget, you can bring your dream home to life.",
    delay: 0.2,
  },
  {
    id: 2,
    name: "Akash",
    designation: "Manager",
    img: "https://freepngimg.com/thumb/categories/2448.png",
    text: "Now you can make it happen! With one-on-one design help and hand-picked products tailored to your style, space, and budget, you can bring your dream home to life.",
    delay: 0.4,
  },
  {
    id: 3,
    name: "Satish",
    designation: "Designer",
    img: "https://w7.pngwing.com/pngs/620/85/png-transparent-akshay-kumar-actor-bollywood-hum-film-actor-celebrities-tshirt-abdomen.png",
    text: "Now you can make it happen! With one-on-one design help and hand-picked products tailored to your style, space, and budget, you can bring your dream home to life.",
    delay: 0.6,
  },
];
const Testimonials = () => {
  return (
    <div className="py-14">
      <div className="space-y-4 text-center max-w-[550px] mx-auto mb-8">
        <motion.h1
          variants={SlideUp(0.2)}
          initial="initial"
          whileInView="animate"
          className="text-4xl font-bold font-mono"
        >
          Words From Our Coustomers
        </motion.h1>
        <motion.p
          variants={SlideUp(0.4)}
          initial="initial"
          whileInView="animate"
          className="text-gray-500 text-sm max-w-[600px] mx-auto font-mono"
        >
          Dreaming of a home that looks like it came straight from a magazine?
          Now you can make it happen! With one-on-one design help and
          hand-picked products tailored to your style, space, and budget, you
          can bring your dream home to life.
        </motion.p>
      </div>
      <div className="bg-black p-12">
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-6 cursor-pointer">
          {TestimonialData.map((card) => {
            return (
              <motion.div
                variants={SlideLeft(card.delay)}
                initial="initial"
                whileInView="animate"
                key={card.id}
                className="border-[1px] border-gray-500 px-5 py-10 text-white group hover:bg-white duration-300 rounded-lg "
              >
                <div className="flex flex-row items-center gap-3 ">
                  <img
                    src={card.img}
                    alt=""
                    className="w-[60px] rounded-full"
                  />
                  <div>
                    <p className="text-sm font-bold font-mono group-hover:text-black">
                      {card.name}
                    </p>
                    <p className="text-gray-400  font-mono text-xs group-hover:text-black">
                      {card.designation}
                    </p>
                    <div className="text-xs mt-2">⭐⭐⭐⭐⭐</div>
                  </div>
                </div>
                <div className="mt-5 border-t-2 border-gray-500/40 pt-5">
                  <p className="text-sm text-gray-300 font-mono group-hover:text-black duration-300">
                    {card.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
