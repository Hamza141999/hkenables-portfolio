import React from "react";
import classes from "./aboutMeSections.module.css";
import web3 from "../../public/assets/about_me/web3.png";
import { motion, useScroll, useTransform } from "framer-motion";

function Web3Section() {
  const headingVariants = {
    offscreen: {
      y: -200,
    },
    onscreen: {
      y: 0,
      transition: {
        ease: "circOut",
        duration: 0.8,
      },
    },
  };

  const gadgetVariantsRight = {
    offscreen: {
      x: 200,
    },
    onscreen: {
      x: 0,
      transition: {
        ease: "circOut",
        duration: 0.8,
      },
    },
  };

  const textAnimation = {
    offscreen: {
      opacity: 0,
    },
    onscreen: {
      opacity: 1,
      transition: {
        ease: "easeOut",
        duration: 0.5,
        delay: 1.1
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
      <motion.div
        style={{
          justifyContent: "flex-start",
          position: "relative",
        }}
      >
        <motion.div
          variants={gadgetVariantsRight}
          className={classes.parallax_img_container}
        >
          <img
            className={classes.parallax_img}
            src={web3?.src}
            alt="A London skyscraper"
          />
        </motion.div>

        <motion.div
          className={classes.text_container}
          style={{
            left: "calc(36% + 70px)",
          }}
        >
          <motion.div variants={headingVariants} className={classes.heading_container}>
            <motion.h2 className={classes.h2}>Web3 DApps</motion.h2>
            <div className={classes.heading_underline} />
          </motion.div>
          <motion.p variants={textAnimation} className={classes.text}>
            3+ years of experience making amazing webapps. Solo developed apps
            from ground up. Developed a variety of types ranging from Web3 apps
            to real estate portals
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default Web3Section;
