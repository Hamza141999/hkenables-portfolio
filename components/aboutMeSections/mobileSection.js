import React from "react";
import classes from "./aboutMeSections.module.css";
import mobile from "../../public/assets/about_me/react_native.png";
import { motion, useScroll, useTransform } from "framer-motion";

function MobileSection() {
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

  const gadgetVariantsLeft = {
    offscreen: {
      x: -200,
    },
    onscreen: {
      x: 0,
      transition: {
        ease: "circOut",
        duration: 0.8,
      },
    },
  };

  const textAnimation = (delay) => ({
    offscreen: {
      opacity: 0,
    },
    onscreen: {
      opacity: 1,
      transition: {
        ease: "easeOut",
        duration: 0.5,
        delay: delay,
      },
    },
  });

  return (
    <motion.section
      className={classes.section}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.2 }}
    >
      <motion.div
        style={{
          justifyContent: "flex-end",
          position: "relative",
        }}
      >
        <motion.div
          variants={gadgetVariantsLeft}
          className={classes.parallax_img_container}
        >
          <img
            className={classes.parallax_img}
            src={mobile?.src}
            alt="A London skyscraper"
          />
        </motion.div>

        <motion.div
          className={classes.text_container}
          style={{
            right: "calc(36% + 70px)",
          }}
        >
          <motion.div
            variants={headingVariants}
            className={classes.heading_container}
          >
            <motion.h2 className={classes.h2}>React Native Apps</motion.h2>
            <div className={classes.heading_underline} />
          </motion.div>
          <motion.p variants={textAnimation(0.5)} className={classes.text}>
            <span>🛠️</span>Complete mobile app development with a flawless and
            unique mobile app design
          </motion.p>

          <motion.p variants={textAnimation(0.7)} className={classes.text}>
            <span>₿</span>Complete crypto wallet integrations in case of Web3
            DApps
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default MobileSection;
