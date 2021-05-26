import React, { useState } from "react";
import classes from "./header.module.css";
import { FaTimes, FaAlignRight } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={classes.container}>
      <section className={classes.mobile}>
        <header className={classes.header}>
          <section className={classes.logo}>
            <h2>
              SHORTEN<span className={classes.it}>IT</span>
            </h2>
          </section>

          {isOpen !== true ? (
            <FaAlignRight
              size="35px"
              style={{
                color: "#ffffff",

                marginRight: "25px",
              }}
              onClick={() => setIsOpen(true)}></FaAlignRight>
          ) : (
            <FaTimes
              size="30px"
              style={{
                color: "#ffffff",

                marginRight: "25px",
              }}
              onClick={() => setIsOpen(false)}></FaTimes>
          )}
          {isOpen && (
            <section className={classes.menu}>
              <ul className={classes.listItem}>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </section>
          )}
        </header>
      </section>
      <section className={classes.desktop}>
        <header className={classes.header}>
          <section className={classes.logo}>
            <h2>
              SHORTEN<span className={classes.it}>IT</span>
            </h2>
          </section>
          <ul className={classes.listItem}>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <button className={classes.btnOrange}>Sign Up</button>
            <button className={classes.btnWhite}>Login</button>
          </ul>
        </header>
      </section>
    </div>
  );
};
export default Header;
