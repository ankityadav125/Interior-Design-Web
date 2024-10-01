import React from "react";
import { motion } from "framer-motion";
import { SlideUp } from "../animate";

const Hero = () => {
  return (
    <>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 md:min-h-[600px] gap-10">
          <div className="flex flex-col justify-center gap-7 md:pr-8 xl:pr-52 text-center md:text-left pt-20 md:pt-0 px-10">
            <motion.h1
              variants={SlideUp(0.2)}
              initial="initial"
              animate="animate"
              className="text-4xl font-bold font-mono"
            >
              Yellow Flamingo Design Group
            </motion.h1>
            <motion.p
              variants={SlideUp(0.5)}
              initial="initial"
              animate="animate"
              className="text-sm md:text-base text-gray-500 font-mono leading-7"
            >
              Dreaming of a home that looks like it came straight from a
              magazine? Now you can make it happen! With one-on-one design help
              and hand-picked products tailored to your style, space, and
              budget, you can bring your dream home to life.
            </motion.p>
            <div className="space-x-4">
              <motion.button
                variants={SlideUp(0.8)}
                initial="initial"
                animate="animate"
                className="primary-btn uppercase rounded-md shadow-[5px_5px_0px_0px_#6c6c6c] font-mono bg-black text-white "
              >
                {/* shadow-[5px_5px_0px_0px_#6c6c6c] */}
                Get started
              </motion.button>
              <motion.button
                variants={SlideUp(1.1)}
                initial="initial"
                animate="animate"
                className="primary-btn uppercase font-mono rounded-md"
              >
                Contact Us
              </motion.button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center ">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              src="https://img.freepik.com/premium-vector/monochrome-living-spaces-vector-emblems-capture-peaceful-essence-modern-house-interiors-b_706143-89581.jpg"
              alt=""
              className="w-[80%] md:w-[700px] object-cover "
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
