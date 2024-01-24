import React from "react";
import styles from "./Hero.module.css";
import HeadPhone from "../../Assets/hero_headphones.png";

function Hero() {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.text}>
          <h1> 100 Thousand Songs, Ad-free </h1>
          <h1> Over Thousands of Podacast Episodes </h1>
        </div>
        <div>
          <img src={HeadPhone} width={112} alt="headphone" />
        </div>
      </div>
    </>
  );
}

export default Hero;
