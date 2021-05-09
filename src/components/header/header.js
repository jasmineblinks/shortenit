import React from "react";
import classes from "./header.module.css";
import '.../fonts/Lobster-Regular.ttf';

const Header = () => {
  return (
    <div className={classes.container}>
      <section className={classes.mobile}>
        <header>
            <section>
                <h2>Jasmyne</h2>
            </section>
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
