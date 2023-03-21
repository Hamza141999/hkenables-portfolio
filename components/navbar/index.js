import React, { useEffect, useState, useContext } from "react";
import classes from "./navbar.module.css";
import { useRouter } from "next/router";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import Link from "next/link";
import { useWindowSize } from "../../utils.js";
import logo from "../../public/assets/banner_section_assets/logo.svg";
import logo_white from "../../public/assets/banner_section_assets/logo_white.svg";
import linkedin from "../../public/assets/banner_section_assets/linkedin.svg";
import resume from "../../public/assets/banner_section_assets/resume.svg";
import { useTheme } from "../../contextAPI";

function Navbar() {
  const { isDarkTheme, toggleTheme } = useTheme();
  const router = useRouter();
  const { width } = useWindowSize();
  const [openPanel, setOpenPanel] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("transparent");
  const [isNavbarVisisbleFromTop, setIsNavbarVisibleFromTop] = useState(false);
  const [darkTheme, setDarkTheme] = useState(true);
  const [panelType, setPanelType] = useState("left");
  const [panelSize, setPanelSize] = useState(60);
  const [noBackdrop, setNoBackdrop] = useState(false);

  let listener = null;

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
    document.addEventListener("scroll", () => {
      if (document !== null) {
        let scrolled = document.scrollingElement.scrollTop;

        if (scrolled >= 10) {
          if (backgroundColor !== "opaque") {
            setBackgroundColor("opaque");
          }
        } else {
          if (backgroundColor !== "transparent") {
            setBackgroundColor("transparent");
          }
        }
      }
    });
    return () => {
      document.removeEventListener("scroll", listener);
    };
  }, [backgroundColor]);

  return (
    <div
      className={
        backgroundColor === "opaque"
          ? classes.navbar_body_opaque
          : classes.navbar_body
      }
    >
      <div className={classes.left_panel}>
        <>
          <img
            src={darkTheme ? logo_white.src : logo.src}
            className={classes.logo}
          />
        </>
      </div>
      <div className={classes.right_panel}>
        <div className={classes.menu_container}>
          <p className={classes.navbar_item}>Contact</p>
          <div className={classes.menu}>
            <div className={classes.single_tab}>
              <p className={classes.menu_title}>LinkedIn</p>{" "}
              <img src={linkedin.src} style={{ width: "30px" }} />
            </div>
            <div className={classes.single_tab}>
              <p className={classes.menu_title}>View Resume</p>{" "}
              <img src={resume.src} style={{ width: "30px" }} />
            </div>
          </div>
        </div>
        <p className={classes.navbar_item}>What I do</p>
        <p className={classes.navbar_item}>My Works</p>
        <div className={classes.divider} />
        <DarkModeSwitch checked={darkTheme} onChange={handleToggle} size={30} />
      </div>
    </div>
  );
}

export default Navbar;
