import React, { useState, useEffect } from "react";
import classes from "./aboutMe.module.css";
import github from "../../public/assets/aboutme_section_assets/github.svg";
import ai from "../../public/assets/aboutme_section_assets/ai.svg";
import aws from "../../public/assets/aboutme_section_assets/aws.svg";
import dart from "../../public/assets/aboutme_section_assets/dart.svg";
import figma from "../../public/assets/aboutme_section_assets/figma.svg";
import js from "../../public/assets/aboutme_section_assets/js.svg";
import metamask from "../../public/assets/aboutme_section_assets/metamask.svg";
import next from "../../public/assets/aboutme_section_assets/next.svg";
import psd from "../../public/assets/aboutme_section_assets/psd.svg";
import react from "../../public/assets/aboutme_section_assets/react.svg";
import ts from "../../public/assets/aboutme_section_assets/ts.svg";
import graph from "../../public/assets/aboutme_section_assets/graphql.svg";
import { useTheme } from "../../contextAPI";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip as ReactTooltip } from "react-tooltip";
import Marquee from "react-fast-marquee";
import ParallaxSection from "../parallaxSection";

function AboutMeSection() {
  const [darkTheme, setDarkTheme] = useState();
  const { isDarkTheme } = useTheme();
  const { ref, inView } = useInView({
    threshold: 0.4,
  });
  const headingUnderline = useAnimation();
  const textAnimation = useAnimation();

  useEffect(() => {
    if (inView) {
      headingUnderline.start({
        scale: 1,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
        },
      });
      textAnimation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
        },
      });
    }
    if (!inView) {
      headingUnderline.start({ scale: 0.2 });
      textAnimation.start({ x: "-50vw" });
    }
  }, [inView]);

  return (
    <div ref={ref} className={classes.container}>
      <h2 className={classes.heading_left}>ABOUT{"  "}ME</h2>
      <h2 className={classes.heading_right}>ABOUT{"  "}ME</h2>

      {/* <div className={classes.top_bar} /> */}

      <div className={classes.bottom_pattern_1} />
      <div className={classes.bottom_pattern_2} />
      <a target={"_blank"} href="https://github.com/Hamza141999">
        <img src={github.src} className={classes.github_icon} />
      </a>

      <div className={classes.content}>

        <ParallaxSection />

        <div className={classes.marquee_content}>
          <motion.div
            animate={textAnimation}
            className={classes.marquee_heading}
          >
            Tools and Languages I work with
          </motion.div>
          <div className={classes.marquee_container}>
            <Marquee gradient={false} speed={60}>
              <img
                id="my-element"
                data-tooltip-content="Logo designing, Digital Portraits"
                src={ai.src}
                className={classes.tech_icon}
              />
              <ReactTooltip anchorId="my-element" />
              <img
                src={psd.src}
                className={classes.tech_icon}
                id="my-element-1"
                data-tooltip-content="Picture manipulation"
              />
              <ReactTooltip anchorId="my-element-1" />

              <img
                src={js.src}
                className={classes.tech_icon}
                id="my-element-2"
                data-tooltip-content="Well versed, 2+ years. Go to language"
              />
              <ReactTooltip anchorId="my-element-2" />

              <img
                id="my-element-3"
                data-tooltip-content="Well versed, 2+ years. Go to language"
                src={ts.src}
                className={classes.tech_icon}
              />
              <ReactTooltip anchorId="my-element-3" />

              <img
                src={react.src}
                className={classes.tech_icon}
                id="my-element-4"
                data-tooltip-content="Go to Framework | Well versed | 2+ years"
              />
              <ReactTooltip anchorId="my-element-4" />

              <img
                id="my-element-5"
                data-tooltip-content="Favourite Framework | Well versed | 2+ years"
                src={next.src}
                className={classes.tech_icon}
              />
              <ReactTooltip anchorId="my-element-5" />

              <img src={metamask.src} className={classes.tech_icon} />
              <img src={figma.src} className={classes.tech_icon} />
              <img src={aws.src} className={classes.tech_icon} />
              <img src={dart.src} className={classes.tech_icon} />
              <img src={graph.src} className={classes.tech_icon} />

              {/* </marquee> */}
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMeSection;
