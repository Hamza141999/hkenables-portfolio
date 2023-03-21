import React from "react";
import classes from "./contactSection.module.css";
import bg from "../../public/assets/banner_section_assets/bg1.png";

function ContactScreen() {
  return (
    <div className={classes.container}>
      <div className={classes.left_bean} />
      <div className={classes.right_bean} />

      <img src={bg.src} className={classes.bg} />

      <div className={classes.panel}>
        <div className={classes.left_panel}>
          <h2>Contact</h2>
        </div>
        <div className={classes.divider} />
        <div className={classes.right_panel}>
          <h2>Testimonials</h2>
        </div>
      </div>
    </div>
  );
}

export default ContactScreen;
