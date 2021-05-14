import React from "react";
import classes from "./footer.module.css";
import fs from "../fs.svg";
import ts from "../ts.svg";
import ls from "../ls.svg";

const Footer = () => {
  return (
    <div className={classes.container}>
      <section>
        <h3>UI Design + Built By Faith Pueneh</h3>
      </section>
      <section className={classes.socialIcon}>
        <div className={classes.icons}>
          <span>
            {" "}
            <img src={fs} className={classes.facebook} alt="facebook" />{" "}
          </span>
          <span>
            {" "}
            <img src={ts} className={classes.twitter} alt="twitter" />
          </span>
          <span>
            {" "}
            <img src={ls} className={classes.linkedin} alt="linkedin" />
          </span>
        </div>
      </section>
    </div>
  );
};
export default Footer;
