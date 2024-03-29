import { useEffect, useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import bg from "../../public/assets/1.jpg";
import classes from "./parallax.module.css";
import web_dev from "../../public/assets/about_me/web_dev.png";
import react_native from "../../public/assets/about_me/react_native.png";
import web3 from "../../public/assets/about_me/web3.png";
import cool from "../../public/assets/about_me/cool.png";
import boring from "../../public/assets/about_me/boring.png";

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

  return (
    <motion.section
      className={classes.section}
    >
      <div
        ref={ref}
        style={{
          justifyContent: index % 2 === 0 ? "flex-start" : "flex-end",
        }}
      >
        {image?.img && (
          <div className={classes.parallax_img_container}>
            <img
              className={classes.parallax_img}
              src={image?.img?.src}
              alt="A London skyscraper"
            />
          </div>
        )}
      </div>
      <motion.h2
        className={image?.isText ? classes.big_heading : classes.h2}
        style={{
          left: !image?.isText
            ? index % 2 === 0 && "calc(45% + 70px)"
            : "initial",
          right: !image?.isText
            ? index % 2 !== 0 && "calc(45% + 70px)"
            : "initial"
          // y,
        }}
      >
        {image?.heading}
      </motion.h2>
    </motion.section>
  );
}

export default function ParallaxSection() {

  return (
    <div className={classes.parallax_container}>
      {aboutMeArray?.map((image, index) => (
        <Image key={index} index={index} image={image} />
      ))}
    </div>
  );
}
