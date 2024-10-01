import React from "react";
import { motion } from "framer-motion";
import { SlideUp } from "../animate";

const Banner2 = () => {
  return (
    <div>
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-5 flex justify-center flex-col xl:max-w-[500px]">
            <motion.h1
              variants={SlideUp(0.2)}
              initial="initial"
              whileInView="animate"
              className="text-4xl font-bold font-mono"
            >
              Principles of Interior Design for Small Living Rooms
            </motion.h1>
            <motion.p
              variants={SlideUp(0.4)}
              initial="initial"
              whileInView="animate"
              className="text-gray-500 text-sm font-mono leading-7"
            >
              Compact living rooms come with limited functional space and can
              present significant challenges. However, a well-designed living
              room layout with some smart styling can feel just as comfortable
              and visually attractive as a larger space. Here are some
              principles you can follow to make this happen.
            </motion.p>
            <motion.div
              variants={SlideUp(0.6)}
              initial="initial"
              whileInView="animate"
              className="flex gap-3"
            >
              <div className="max-w-[80px] space-y-2">
                <p className="text-3xl font-bold font-mono">23</p>
                <p className="text-gray-500 text-sm font-mono">
                  Years of Experience
                </p>
              </div>
              <div className="max-w-[80px] space-y-2">
                <p className="text-3xl font-bold font-mono">468</p>
                <p className="text-gray-500 text-sm font-mono">Happy Clients</p>
              </div>
              <div className="max-w-[80px] space-y-2">
                <p className="text-3xl font-bold font-mono">27</p>
                <p className="text-gray-500 text-sm font-mono">Award Gained</p>
              </div>
            </motion.div>
            <div>
              <motion.button
                variants={SlideUp(0.6)}
                initial="initial"
                whileInView="animate"
                className="primary-btn bg-black font-mono text-white shadow-[5px_5px_0px_0px_#6c6c6c] rounded-md"
              >
                Contact Us
              </motion.button>
            </div>
          </div>
          <div className="flex flex-col justify-center  ">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRaH06ydRSTJHbZRON4uXllv6jGKdjvnB5OTQsaKYmu3gQ224P-"
              alt=""
              className="w-[95%] md:w-full mx-auto rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
