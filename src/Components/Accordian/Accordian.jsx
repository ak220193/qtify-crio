import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import styles from "./Accordian.module.css";

function Accordian() {
  return (
    <>
      <div className={styles.Accordian}>
        <div className={styles.head}>
          <h1> FAQ </h1>
        </div>

        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon className={styles.arrow} />}
            aria-controls="panel1-content"
            id="panel1-header"
            className={styles.titletext}
          >
            <Typography className={styles.titletext}>
              Is QTify free to use?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Yes! It is 100% free, and has 0% ads!</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon className={styles.arrow} />}
            aria-controls="panel2-content"
            id="panel2-header"
            className={styles.titletext}
          >
            <Typography>Can I download and listen to songs offline?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Sorry, unfortunately we don't provide the service to download any
              songs.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
}

export default Accordian;
