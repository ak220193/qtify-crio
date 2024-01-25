import React, { useState } from "react";
import styles from "./Section.module.css";
import Card from "../Card/Card";
import { CircularProgress } from "@mui/material";

export default function Section({ title, data, type }) {
  const [carouselToggle, setCarouselTogggle] = useState(true);

  const handleToggle = () => {
    setCarouselTogggle((prevState) => !prevState);
  };
  return (
    <>
      <div className={styles.header}>
        <h3> {title}</h3>
        <h4 className={styles.toggeleText} onClick={handleToggle}>
          {carouselToggle ? "Collapse all" : "Show All"}
        </h4>
      </div>
      {data.length === 0 ? (
        <CircularProgress />
      ) : (
        <div className={styles.cardWrapper}>
          {!carouselToggle ? (
            <div className={styles.wrapper}>
              {data.map((ele) => (
                <Card data={ele} type={type} />
              ))}
            </div>
          ) : null}
        </div>
      )}
    </>
  );
}
