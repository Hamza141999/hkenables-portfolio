import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import classes from "./parallax.module.css";
import web_dev from "../../public/assets/about_me/web_dev.png";
import react_native from "../../public/assets/about_me/react_native.png";
import web3 from "../../public/assets/about_me/web3.png";
import cool from "../../public/assets/about_me/cool.png";
import boring from "../../public/assets/about_me/boring.png";
import FirstSection from "../aboutMeSections/firstSection";
import WebSection from "../aboutMeSections/webSection";
import Web3Section from "../aboutMeSections/web3Section";
import MobileSection from "../aboutMeSections/mobileSection";
import WhyMe from "../aboutMeSections/whyMe";
import { useInView } from "react-intersection-observer";

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

const aboutMeArray = [
  {
    isText: true,
    heading: "About Me?",
    subheading:
      "I make tech, interesting. And turn boring into something exciting",
  },
  {
    img: web_dev,
    heading: "React/NextJS Developer",
  },
  {
    img: react_native,
    heading: "React Native Developer",
  },
  {
    img: web3,
    heading: "Web3 DApps",
  },
  {
    img: boring,
    heading: "transform boring stuff into..",
  },
  {
    img: cool,
    heading: "into something cool",
  },
];

function Image({ image, index }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 350);

  const headingVariants = {
    offscreen: {
      y: -200,
    },
    onscreen: {
      y: 0, // Change the x value to animate in view
      transition: {
        ease: "circOut",
        duration: 1.2,
      },
    },
  };

  const gadgetVariantsLeft = {
    offscreen: {
      x: -200,
    },
    onscreen: {
      x: 0, // Change the x value to animate in view
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
      x: 0, // Change the x value to animate in view
      transition: {
        ease: "circOut",
        duration: 0.8,
      },
    },
  };

  const reactSecondaryLaptop = {
    offscreen: {
      x: 200,
    },
    onscreen: {
      x: 0, // Change the x value to animate in view
      transition: {
        ease: "circOut",
        duration: 0.8,
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
      {image?.img && (
        <motion.div
          ref={ref}
          style={{
            justifyContent: index % 2 === 0 ? "flex-start" : "flex-end",
            position: "relative",
          }}
        >
          <motion.div
            variants={
              index % 2 === 0 ? gadgetVariantsRight : gadgetVariantsLeft
            }
            className={classes.parallax_img_container}
          >
            <img
              className={classes.parallax_img}
              src={image?.img?.src}
              alt="A London skyscraper"
            />
          </motion.div>

          <motion.div
            variants={
              index % 2 === 0 ? gadgetVariantsRight : gadgetVariantsLeft
            }
            className={classes.parallax_img_container_secondary}
          >
            <img
              className={classes.parallax_img}
              src={image?.img?.src}
              alt="A London skyscraper"
            />
          </motion.div>
        </motion.div>
      )}

      <motion.h2
        variants={headingVariants}
        className={image?.isText ? classes.big_heading : classes.h2}
        style={{
          left: !image?.isText
            ? index % 2 === 0 && "calc(45% + 70px)"
            : "initial",
          right: !image?.isText
            ? index % 2 !== 0 && "calc(45% + 70px)"
            : "initial",
          // y,
        }}
      >
        {image?.heading}
      </motion.h2>
    </motion.section>
  );
}

export default function ParallaxSection() {

  // const { ref: firstSectionRef, inView: firstSectionInView } = useInView({
  //   threshold: 0.99,
  // });

  // useEffect(() => {
  //   let timer;
  //   const outerContainer = document.getElementById('outer_container');

  //   if (firstSectionInView && outerContainer) {
  //     outerContainer.style.overflowY = 'hidden';
  //     console.log("Hidden");

  //     timer = setTimeout(() => {
  //       if (outerContainer) {
  //         outerContainer.style.overflowY = 'scroll';
  //         console.log("Scroll");
  //       }
  //     }, 1000);
  //   } else {
  //     timer = setTimeout(() => {
  //       if (outerContainer) {
  //         outerContainer.style.overflowY = 'scroll';
  //         console.log("Scroll");
  //       }
  //     }, 1000);
  //   }

  //   return () => clearTimeout(timer);
  // }, [firstSectionInView]);

  // console.log("firstSectionInView: ", firstSectionInView);

  return (
    <div className={classes.parallax_container}>
      <FirstSection 
      // firstSectionRef={firstSectionRef}
       />
      <WebSection />
      <Web3Section />
      <MobileSection />
      <WhyMe />
    </div>
  );
}
