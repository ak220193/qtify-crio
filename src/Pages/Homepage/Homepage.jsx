import React from "react";
import styles from "./Homepage.module.css";
import { useOutletContext } from "react-router-dom";
import Hero from "../../Components/Hero/Hero";
import Section from "../../Components/Section/Section";
function HomePage() {
  const { data } = useOutletContext();
  const { topAlbums, songs, newAlbums } = data;

  return (
    <>
      <Hero />
      <div className={styles.wrapper}>
        <Section tittle="Top Albums" data={topAlbums} type="albums" />
        <Section tittle="New Albums" data={newAlbums} type="albums" />
      </div>
    </>
  );
}

export default HomePage;
