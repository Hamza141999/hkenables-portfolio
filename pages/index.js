import classes from "../styles/Home.module.css";

// Media Imports
import laptop from "../public/assets/banner_section_assets/laptop.svg";
import bg1 from "../public/assets/banner_section_assets/bg1.png";
import bg2 from "../public/assets/banner_section_assets/bg2.png";
import music_logo_2 from "../public/assets/banner_section_assets/music_logo_2.svg";
import music_logo from "../public/assets/banner_section_assets/music_logo.svg";
import screen from "../public/assets/banner_section_assets/screen.svg";
import screen2 from "../public/assets/banner_section_assets/screen2.svg";
import cup from "../public/assets/banner_section_assets/cup.svg";
import smoke from "../public/assets/banner_section_assets/smoke.svg";
import down_arrow from "../public/assets/banner_section_assets/down_arrow.svg";
import linkedin_icon from "../public/assets/banner_section_assets/linkedin_icon.svg";
import resume_icon from "../public/assets/banner_section_assets/resume_icon.svg";
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import Head from "next/head";
import react, { useState, useEffect } from "react";
import $ from "jquery";
import AboutMeSection from "../components/aboutMeSection";
import BarLoader from "react-spinners/BarLoader";
import { useInView } from "react-intersection-observer";
import { useAnimation, useAnimationFrame, motion } from "framer-motion";
import PortfolioSection from "../components/portfolioSection";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useTheme } from "../contextAPI";
import ContactScreen from "../components/contactSection";

export default function Home() {
  const [isMusicOn, setIsMusicOn] = useState(true);
  const [music, setMusic] = useState();
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const leftScreenAnimation = useAnimation();
  const rightScreenAnimation = useAnimation();
  const headingAnimation = useAnimation();
  const splashScreenAnimation = useAnimation();
  const [darkTheme, setDarkTheme] = useState(true);
  const { isDarkTheme, toggleTheme } = useTheme();
  const splashScreenHeadingAnimation = useAnimation();

  const [displayScreen, setDisplayScreen] = useState(false);

  useEffect(() => {
    if (darkTheme !== undefined) {
      if (darkTheme) {
        // Set value of  darkmode to dark
        document.documentElement.setAttribute("data-theme", "dark");
        window.localStorage.setItem("theme", "dark");
      } else {
        // Set value of  darkmode to light
        document.documentElement.removeAttribute("data-theme");
        window.localStorage.setItem("theme", "light");
      }
    }
  }, [darkTheme]);

  const handleToggle = () => {
    setDarkTheme(!darkTheme);
    toggleTheme(!darkTheme);
  };

  useEffect(() => {
    setTimeout(() => {
      setDisplayScreen(true);
    }, 1500);
  }, []);

  const scrollTo = function () {
    scroll.scrollTo(800);
  };

  console.log("DISPLAY SCREEN: ", displayScreen);

  useEffect(() => {
    if (inView) {
      console.log("Landing screen in view: ", inView);
      leftScreenAnimation.start({
        // opacity: 0,
        scale: 1,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
        },
      });
      rightScreenAnimation.start({
        scale: 1,
        // opacity: 1,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
        },
      });
      headingAnimation.start({
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.2,
        },
      });
    }
    if (!inView) {
      leftScreenAnimation.start({ scale: 0.1 });
      rightScreenAnimation.start({ scale: 0.1 });
      headingAnimation.start({ y: "-50vw", opacity: 0 });
    }
  }, [inView]);

  useEffect(() => {
    if (!displayScreen) {
      splashScreenAnimation.start({
        scale: 1,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 1.5,
          // : 0.3,
        },
      });
    } else if (displayScreen) {
      splashScreenAnimation.start({ scale: 0 });
    }
  }, [displayScreen]);

  const music_url =
    "https://auqta-bucket.s3.ap-southeast-1.amazonaws.com/bg_music.mp3";

  const handleToggleMusic = async () => {
    setIsMusicOn(!isMusicOn);
  };

  var terms = ["Web 3.0 Dapps", "Amazing Frontends", "Websites/Webapps"];

  useEffect(() => {
    function rotateTerm() {
      var ct = $("#rotate").data("term") || 0;
      $("#rotate")
        .data("term", ct == terms.length - 1 ? 0 : ct + 1)
        .text(terms[ct])
        .fadeIn()
        .delay(2000)
        .fadeOut(200, rotateTerm);
    }
    $(rotateTerm);
  }, []);

  useEffect(() => {
    const audio = new Audio(
      "https://auqta-bucket.s3.ap-southeast-1.amazonaws.com/bg_music.mp3"
    );
    audio?.play();
  }, []);

  return (
    <div
      style={{
        height: !displayScreen ? "100vh" : "fit-content",
        overflow: !displayScreen && "hidden",
      }}
      className={classes.outer_container}
    >
      <div
        style={{ backgroundColor: !darkTheme ? "white" : "black" }}
        className={classes.dark_mode_btn_container}
      >
        <DarkModeSwitch checked={darkTheme} onChange={handleToggle} size={30} />
      </div>
      <motion.div
        animate={splashScreenAnimation}
        // style={{ opacity: !displayScreen ? "1" : "0" }}
        className={classes.splash_screen}
      >
        <motion.div
          initial={{ scale: 3.4 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 1, bounce: 0.3 }}
          className={classes.splash_heading}
        >
          Welcome Aboard! 👋
        </motion.div>
        <motion.div
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", duration: 0.7, bounce: 0 }}
        >
          <BarLoader color={"white"} loading={true} size={180} />
        </motion.div>
      </motion.div>
      <div className={classes.main_container}>
        <div className={classes.container}>
          <Head>
            <title>Hkenables | Portfolio</title>
          </Head>
          <div className={classes.left_bean} />
          <div className={classes.right_bean} />
          <img src={bg1.src} className={classes.bg1} />
          <img src={bg2.src} className={classes.bg2} />

          <div className={classes.mid_dark_phase} />
          <motion.div
            animate={headingAnimation}
            className={classes.heading_container}
          >
            <h2 className={classes.intro_heading}>Hamza here!</h2>
            <div className={classes.heading_underline} />
          </motion.div>
          <h3 className={classes.intro_subheading}>and I make</h3>

          <div ref={ref} className={classes.table_container}>
            <div className={classes.table_top_content_container}>
              <img
                onClick={scrollTo}
                className={classes.down_arrow}
                src={down_arrow.src}
              />
              <motion.div
                animate={leftScreenAnimation}
                className={classes.screen_container}
              >
                {displayScreen && (
                  <div className={classes.screen_text_container}>
                    <div className={classes.code_1_line_1} />
                    <div className={classes.code_1_line_2} />
                    <div className={classes.code_1_line_3} />
                    <div className={classes.code_1_line_4} />

                    <div className={classes.code_2_line_1} />
                    <div className={classes.code_2_line_2} />

                    <div className={classes.code_3_line_1} />
                    <div className={classes.code_3_line_2} />
                    <div className={classes.code_3_line_3} />
                    <div className={classes.code_3_line_4} />
                    <div className={classes.code_3_line_5} />
                  </div>
                )}

                <img src={screen.src} className={classes.screen_left} />
              </motion.div>
              <div className={classes.laptop_container}>
                <div className={classes.laptop_text_container}>
                  <span id="rotate"></span>
                </div>{" "}
                <img src={laptop.src} className={classes.laptop} />
              </div>
              <motion.div
                animate={rightScreenAnimation}
                className={classes.screen_container}
              >
                <div className={classes.screen_text_container_right}>
                  <div className={classes.social_container}>
                    <a
                      className={classes.link}
                      target={"_blank"}
                      href="https://www.linkedin.com/in/hamza-khalid-5a40931a5/"
                    >
                      <img
                        src={linkedin_icon.src}
                        className={classes.linkedin_icon}
                      />
                      <p className={classes.linkedin}>LinkedIn!</p>
                    </a>
                  </div>

                  <div className={classes.social_container_2}>
                    <img
                      src={resume_icon.src}
                      className={classes.resume_icon}
                    />
                    <p className={classes.resume_text}>View Resume</p>
                  </div>
                </div>
                <img src={screen2.src} className={classes.screen} />
              </motion.div>
              <div className={classes.cup_container}>
                <div className={classes.cup_wrapper}>
                  <img src={cup.src} className={classes.cup} />
                  <img src={smoke.src} className={classes.smoke1} />
                </div>
              </div>
              <div
                onClick={handleToggleMusic}
                className={classes.speaker_container}
              >
                <div
                  className={
                    isMusicOn ? classes.speaker_top : classes.speaker_top_off
                  }
                >
                  <img
                    src={music_logo.src}
                    className={
                      isMusicOn ? classes.music_logo : classes.music_logo_off
                    }
                  />
                  <img
                    src={music_logo_2.src}
                    className={
                      isMusicOn ? classes.music_logo_2 : classes.music_logo_off
                    }
                  />
                </div>
                <div className={classes.speaker_body}>
                  <div
                    className={
                      isMusicOn
                        ? classes.power_button
                        : classes.power_button_off
                    }
                  ></div>
                </div>
              </div>
            </div>
            <div className={classes.table_top}>
              <div className={classes.table_top_cover}></div>
            </div>
            <div className={classes.table_mid} />
            <div className={classes.legs_container}>
              <div className={classes.table_leg_left} />
              <div className={classes.table_leg_right} />
            </div>
          </div>
        </div>
        <AboutMeSection id="containerElement" />
        <PortfolioSection />
        <ContactScreen />
      </div>
    </div>
  );
}
