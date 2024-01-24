import React from "react";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import Button from "../Button/Button";
import styles from "./Navbar.module.css";

function Navbar({ searchData }) {
  return (
    <>
      <nav className={styles.navbar}>
        <a href="/">
          <Logo />
        </a>

        <Search
          placeholder={"Seach a song for Your Choice"}
          searchdata={searchData}
        />
        <Button>Give Feedback</Button>
      </nav>
    </>
  );
}

export default Navbar;
