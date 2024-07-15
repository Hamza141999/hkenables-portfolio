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
import linkedin_icon from "../public/assets/banner_section_assets/linkedin_icon.svg";
import resume_icon from "../public/assets/banner_section_assets/resume_icon.svg";
import { animateScroll as scroll } from "react-scroll";
import Head from "next/head";
import { useState, useEffect, useRef } from "react";
import $ from "jquery";
import AboutMeSection from "../components/aboutMeSection";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import PortfolioSection from "../components/portfolioSection";
import { useTheme } from "../contextAPI";
import Lottie from "lottie-react";
import hello from "../public/assets/banner_section_assets/hello.json";
import downArrow from "../public/assets/banner_section_assets/downArrowAnimation.json";

export default function Home() {
  const audioRef = useRef(null);
  const switchAudioRef = useRef(null);
  const [isMusicOn, setIsMusicOn] = useState(false);
  const [music, setMusic] = useState();
  const { ref: inViewRef, inView } = useInView({
    threshold: 0.5,
  });
  const leftScreenAnimation = useAnimation();
  const [isSystemOn, setTurnOnSystem] = useState(false);
  const [chainPulled, setIsChainPulled] = useState(false);
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
    }, 3000);
  }, []);

  const scrollTo = function () {
    scroll.scrollTo(800);
  };

  useEffect(() => {
    if (inView) {
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
    }
    if (!inView) {
      leftScreenAnimation.start({ scale: 0.1 });
      rightScreenAnimation.start({ scale: 0.1 });
    }
  }, [inView]);

  useEffect(() => {
    if (!displayScreen) {
      splashScreenAnimation.start({
        scale: 1,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 0.2,
        },
      });
    } else if (displayScreen) {
      splashScreenAnimation.start({ opacity: 0, scale: 0 });
    }
  }, [displayScreen]);

  const handleToggleMusic = async () => {
    setIsMusicOn(!isMusicOn);
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  var terms = [
    "Web 3.0 Dapps",
    "Amazing Frontends",
    "Websites/Webapps",
    "Solution Design",
  ];

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

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  const toggleSystemOn = async () => {
    setIsChainPulled(true);
    if (switchAudioRef.current) {
      switchAudioRef.current.play();
    }
    await delay(900);
    setTurnOnSystem(true);
    setIsMusicOn(true);
    handleToggleMusic();

    headingAnimation.start({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1,
        bounce: 0.2,
      },
    });
  };

  return (
    <div id="outer_container" className={classes.outer_container}>
      <div
        className={
          isSystemOn
            ? classes.system_off_overlay_hidden
            : classes.system_off_overlay
        }
      />
      <audio ref={audioRef} src="/assets/audio/bg_music.mp3" preload="auto" />
      <audio
        ref={switchAudioRef}
        src="/assets/audio/switch.wav"
        preload="auto"
      />
      <motion.div
        animate={splashScreenAnimation}
        className={classes.splash_screen}
      >
        <motion.div
          initial={{ scale: 3.4 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 1, bounce: 0.3 }}
          className={classes.splash_heading}
        >
          <Lottie
            animationData={hello}
            style={{ width: "360px", height: "360px" }}
            autoplay={true}
          />
        </motion.div>
        {/* <motion.div
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", duration: 0.7, bounce: 0 }}
        >
          <BarLoader color={"white"} loading={true} size={180} />
        </motion.div> */}
      </motion.div>
      <div
        style={{ animation: !isSystemOn && "initial" }}
        className={classes.container}
      >
        <div
          onClick={toggleSystemOn}
          className={
            chainPulled ? classes.lamp_cord_retracted : classes.lamp_cord
          }
        >
          <div className={classes.tip_container}>
            <p>click me to start!</p>
          </div>
          <div className={classes.cord} />
          <div className={classes.lamp_handle} />
        </div>

        <Head>
          <title>Hkenables | Portfolio</title>
        </Head>
        <div
          className={isSystemOn ? classes.left_bean : classes.left_bean_off}
        />
        <div
          className={isSystemOn ? classes.right_bean : classes.right_bean_off}
        />
        <img src={bg1.src} className={classes.bg1} />
        <img src={bg2.src} className={classes.bg2} />

        <div className={classes.mid_dark_phase} />

        <div ref={inViewRef} className={classes.table_container}>
          <div className={classes.table_top_content_container}>
            {isSystemOn && (
              <div className={classes.down_arrow}>
                <Lottie
                  animationData={downArrow}
                  style={{ width: "60px", height: "60px" }}
                  autoplay={true}
                  loop={true}
                />
              </div>
            )}

            <motion.div
              animate={leftScreenAnimation}
              className={classes.screen_container}
            >
              {displayScreen && isSystemOn && (
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

              <img
                src={screen.src}
                className={
                  isSystemOn ? classes.screen_left : classes.screen_left_off
                }
              />
            </motion.div>
            <div className={classes.laptop_container}>
              <motion.div
                initial={{ y: "20vw" }}
                animate={headingAnimation}
                className={classes.heading_container}
              >
                <h2 className={classes.intro_heading}>Hamza here!</h2>
                <div
                  style={{ animation: !isSystemOn && "initial" }}
                  className={classes.heading_underline}
                />

                <h3 className={classes.intro_subheading}>and I make</h3>
              </motion.div>
              <div className={classes.laptop_text_container}>

                <span style={{opacity: isSystemOn ? '1' : '0'}} id="rotate"></span>
              </div>

              <img src={laptop.src} className={classes.laptop} />
            </div>
            <motion.div
              animate={rightScreenAnimation}
              className={classes.screen_container}
            >
              {isSystemOn && (
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
                      <p className={classes.linkedin}>My Linkedin</p>
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
              )}

              <img
                src={screen2.src}
                className={
                  isSystemOn ? classes.screen : classes.screen_right_off
                }
              />
            </motion.div>
            <div className={classes.cup_container}>
              <div className={classes.cup_wrapper}>
                <img src={cup.src} className={classes.cup} />
                <img src={smoke.src} className={classes.smoke1} />
              </div>
            </div>
            <div
              onClick={handleToggleMusic}
              className={
                isMusicOn
                  ? classes.speaker_container
                  : classes.speaker_container_off
              }
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
                    isMusicOn ? classes.power_button : classes.power_button_off
                  }
                ></div>
              </div>
            </div>
          </div>
          <div
            style={{ animation: !isSystemOn && "initial" }}
            className={classes.table_top}
          >
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
      {/* <ContactScreen /> */}
    </div>
  );
}
