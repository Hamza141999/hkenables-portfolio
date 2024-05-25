import React, { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import classes from "./modal.module.css"

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
};

const App = ({ open, setOpen }) => {
  const onOpenModal = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div style={styles}>
      <Modal center open={open} onClose={onClose}>
        <div className={classes.container}>
          <Carousel style={{height: '50px'}}>
            <div>
              {/* <img src="assets/1.jpeg" /> */}
              <p className="legend">Legend 1</p>
            </div>
            <div>
              {/* <img src="assets/2.jpeg" /> */}
              <p className="legend">Legend 2</p>
            </div>
            <div>
              {/* <img src="assets/3.jpeg" /> */}
              <p className="legend">Legend 3</p>
            </div>
          </Carousel>
        </div>
      </Modal>
    </div>
  );
};

export default App;
