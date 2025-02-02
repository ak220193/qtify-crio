import React from "react";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import Button from "../Button/Button";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

function Navbar({ searchData }) {
  return (
    <>
      <nav className={styles.navbar}>
        <Link to="/">
          <Logo />
        </Link>

        <Search
          placeholder={"Search a song"}
          searchdata={searchData}
        />
        <Link to="/Feedback">
          <Button>Give Feedback</Button>
        </Link>
      </nav>
    </>
  );
}

export default Navbar;
