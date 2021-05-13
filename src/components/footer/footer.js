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
        <ul className={classes.icons}>
          <li>
            {" "}
            <img src={fs} className={classes.facebook} alt="facebook" />{" "}
          </li>
          <li>
            {" "}
            <img src={ts} className={classes.twitter} alt="twitter" />
          </li>
          <li>
            {" "}
            <img src={ls} className={classes.linkedin} alt="linkedin" />
          </li>
        </ul>
      </section>
    </div>
  );
};
export default Footer;
