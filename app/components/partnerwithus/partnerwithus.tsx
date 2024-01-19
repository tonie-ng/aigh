import Link from "next/link";
import React from "react";
import styles from "./partnerwithus.module.css";

function PartnerWithUs() {
  return (
    <section className={styles.partner}>
      <div className={styles.partner_left}>
        <h3>Why you should partner with us ?</h3>
        <p>
          AIESEC offers solutions to various organizations such as companies,
          start-ups, and NGOs to find and bring on board the vision of your
          comapny.
        </p>
        <Link href="mailto:harding@aiesecgh.net" target="_blank">
          Become a Partner
        </Link>
      </div>
      <div className={styles.partner_right}>
        <div className={styles.right_circle}></div>
      </div>

      <div className={styles.partner_stats_container}>
        <div className={styles.partner_stats}>
          <h3>100%</h3>
          <p>Projects Success</p>
        </div>
        <div className={styles.partner_stats}>
          <h3>45+</h3>
          <p>Partners</p>
        </div>
        <div className={styles.partner_stats}>
          <h3>33,000+</h3>
          <p>Experiences Delivered</p>
        </div>
        <div className={styles.partner_stats}>
          <h3>280+</h3>
          <p>Current Members</p>
        </div>
        <div className={styles.partner_stats}>
          <h3>35+</h3>
          <p>Professional Team</p>
        </div>
      </div>
    </section>
  );
}

export default PartnerWithUs;
