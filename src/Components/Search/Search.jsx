
import React from "react";
import styles from "./Search.module.css";
import SearchIcon from "../../Assets/Search icon.png";

function Search({ placeholder }) {
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form className={styles.wrapper} onSubmit={onSubmit}>
        <input className={styles.Search} placeholder={placeholder} required />
        <button type="submit" className={styles.searchButton}>
          <img src={SearchIcon} alt="Search Icon" />
        </button>
      </form>
    </>
  );
}

export default Search;
