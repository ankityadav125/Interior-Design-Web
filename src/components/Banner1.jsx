import React from "react";
import { motion } from "framer-motion";
import { SlideUp } from "../animate";

const Banner1 = () => {
  return (
    <div>
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col justify-center  ">
            <motion.img
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR43ts-C3OcIDTf_4zB1cDUjp94BDvkVSoQUkNL8iPLZsjpO1Zt"
              alt=""
              className="w-[95%] md:w-full mx-auto rounded-xl"
            />
          </div>
          <div className="space-y-5 flex justify-center flex-col xl:max-w-[500px] ">
            <motion.h1
              variants={SlideUp(0.2)}
              initial="initial"
              whileInView="animate"
              className="text-4xl font-bold font-mono"
            >
              I have extensive experience in interior design project management.
            </motion.h1>
            <motion.p
              variants={SlideUp(0.4)}
              initial="initial"
              whileInView="animate"
              className="text-gray-500 text-sm font-mono leading-7"
            >
              Should I take PMP or a master's in project management to further
              my career?
            </motion.p>
            <div>
              <motion.button
                variants={SlideUp(0.6)}
                initial="initial"
                whileInView="animate"
                className="primary-btn bg-black font-mono text-white shadow-[5px_5px_0px_0px_#6c6c6c] rounded-md"
              >
                Explore More
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner1;
