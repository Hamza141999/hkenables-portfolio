import React from "react";
import classes from "./aboutMeSections.module.css";
import web_dev from "../../public/assets/about_me/web_dev.png";
import { motion, useScroll, useTransform } from "framer-motion";

function WebSection() {
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
            src={web_dev?.src}
            alt="A London skyscraper"
          />
        </motion.div>

        <motion.div
          className={classes.text_container}
          style={{
            right: "calc(36% + 70px)",
            width: "55%",
            rowGap: "12px",
          }}
        >
          <motion.div
            variants={headingVariants}
            className={classes.heading_container}
          >
            <motion.h2 className={classes.h2}>React/NextJS Apps</motion.h2>
            <div className={classes.heading_underline} />
          </motion.div>
          <motion.p variants={textAnimation(0.5)} className={classes.text}>
            <span>🚀</span>Developing your web app from scratch
          </motion.p>

          <motion.p variants={textAnimation(0.7)} className={classes.text}>
            <span>📈</span>Upgrading your website's UI to improve user
            rentention by at least 80%
          </motion.p>

          <motion.p variants={textAnimation(0.9)} className={classes.text}>
            <span>🛠️</span>Optimising your website performance for better SEO
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default WebSection;
