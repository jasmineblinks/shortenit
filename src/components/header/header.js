import React from "react";
import classes from "./header.module.css";

const Header = () => {
  return (
    <div className={classes.container}>
      <section className={classes.mobile}>
        <header>
            <div></div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </header>
      </section>
      <section className={classes.desktop}></section>
    </div>
  );
};
export default Header;
