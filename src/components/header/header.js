import React from "react";
import classes from "./header.module.css";


const Header = () => {
  return (
    <div className={classes.container}>
      <section className={classes.mobile}>
        <header>
            <section className={classes.logo}>
                <h2>Jasmyne</h2>
            </section>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </header>
      </section>
      <section className={classes.desktop}>
      <section className={classes.logo}>
                <h2>Jasmyne</h2>
            </section>
            <ul className={classes.list_head}>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <button>Sign Up</button>
            <button>Login</button>
      </section>
    </div>
  );
};
export default Header;
