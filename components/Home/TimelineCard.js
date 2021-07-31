import React from "react";
import styles from "./Timeline.module.css";

function TimelineCard({year}) {
  return (
    <div className={styles.timelineCard}>
      <div className={styles.card}>
        <div className={styles.year}>
            <span>{year||2015}</span>
        </div>
        
        
        <p>
          Lorem Ipsum is simply dummy text of the printing and Lom Ipsum has
          Lorem Ipsu
        </p>
      </div>
      
    </div>
  );
}
export default TimelineCard;