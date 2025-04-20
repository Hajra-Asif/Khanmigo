import React from 'react'
import { motion } from "framer-motion";
import KhanmigoHeading from './KhanmigoHeading'



const Herosection = () => {
  return (
    <div className="herosection d-flex align-items-center justify-content-between flex-column text-center p-5 gap-4">
      
      {/* Heading with typewriter animation */}
      <motion.div
        className="divup pt-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: "spring", stiffness: 80 }}
      >
        <KhanmigoHeading />
      </motion.div>

      {/* Hero Image with zoom-in effect */}
      <motion.img
        className="img-fluid w-100"
        src={"/assets/hero.png"}
        alt="hero"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
      />

      {/* Cards container with staggered fade-up animation */}
      <motion.div
        className="d-flex justify-content-center justify-content-lg-center gap-3 text-left align-items-center flex-wrap"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.3,
            },
          },
        }}
      >
      </motion.div>
    </div>
  );
};



export default Herosection