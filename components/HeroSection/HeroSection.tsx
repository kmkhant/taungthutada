import React from "react";
import { motion } from "framer-motion";
import { fadeUp, container } from "../../variants";

interface HeroSectionProps {
  title: string;
  children: React.ReactNode;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, children }) => {
  return (
    <section className="bg-midColor h-[400px] flex justify-center items-center">
      <div className="flex space-x-2">
        <motion.div
          className="w-16 h-0.5 bg-white rounded-full mt-3"
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
        ></motion.div>
        <motion.div
          className="sm:w-[600px]"
          variants={container}
          initial="initial"
          whileInView="animate"
        >
          <div className="overflow-hidden inline-block">
            <motion.h2
              className="text-white font-semibold text-xl lg:text-2xl"
              variants={fadeUp}
            >
              {title}
            </motion.h2>
          </div>

          <motion.p className="text-white text-md lg:text-lg" variants={fadeUp}>
            {children}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
