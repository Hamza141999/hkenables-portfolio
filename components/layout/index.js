import React, { useState, useEffect } from "react";
import classes from "./layout.module.css";
import Head from "next/head";
import Navbar from "../navbar";
// import Footer from "../footer";
import { useRouter } from "next/router";
// import { useWindowSize } from "../../utils";

function Layout({ children }) {
  return (
    <div className={classes.container}>
      {/* <Navbar /> */}
      <div className={classes.main}>{children}</div>
      {/* <Footer /> */}
    </div>
  );
}

export default Layout;
