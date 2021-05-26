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
            <a href="https://web.facebook.com/pueneh.faithkb">
              <img src={fs} className={classes.facebook} alt="facebook" />
            </a>{" "}
          </span>
          <span>
            <a href="https://twitter.com/PuenehFaith">
              <img src={ts} className={classes.twitter} alt="twitter" />
            </a>{" "}
          </span>
          <span>
            {" "}
            <a href="https://www.linkedin.com/in/faith-pueneh-6a17a6120/">
              <img src={ls} className={classes.linkedin} alt="linkedin" />
            </a>
          </span>
        </div>
      </section>
    </div>
  );
};
export default Footer;
