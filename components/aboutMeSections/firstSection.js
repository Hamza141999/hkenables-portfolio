import React from "react";
import classes from "./aboutMeSections.module.css";
import { motion, useScroll, useTransform } from "framer-motion";

function FirstSection() {
    
  const headingVariants = {
    offscreen: {
      y: -200,
    },
    onscreen: {
      y: 0,
      transition: {
        ease: "circOut",
        duration: 1.2,
      },
    },
  };

  return (
    <motion.section
      className={classes.section}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.2 }}
    >
      <motion.h2
        variants={headingVariants}
        className={classes.big_heading}
      >
        About Me?
      </motion.h2>
    </motion.section>
  );
}

export default FirstSection;
