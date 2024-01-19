import { UniversityData } from "@/app/data/universities";
import Image from "next/image";
import React from "react";
import styles from "./findus.module.css";

function FindUsSection() {
  return (
    <section className={styles.findus_section}>
      <h3 className="section_title">Find us in any of these schools</h3>
      <div className={styles.bottom}>
        <div className={styles.university__container}>
          {UniversityData.map((elem) => (
            <div key={elem.id} className={styles.university__image}>
              <Image src={elem.image} alt={elem.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FindUsSection;
