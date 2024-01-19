import Form from "@/app/components/form/form";
import { UniversityData } from "@/app/data/universities";
import Image from "next/image";
import React from "react";
import FindUsSection from "../components/findus/findus";
import styles from "./page.module.css";

function Page() {
  return (
    <main className={styles.register_page}>
      <div className={styles.register_left}>
        <h1>
          Unlock your <span>Leadership Potential</span> with us!
        </h1>
        <div className={styles.findus}>
          <h3>Find us in any of these schools</h3>
          <div className={styles.findus_bottom}>
            {UniversityData.map((elem) => (
              <div key={elem.id} className={styles.image}>
                <Image src={elem.image} alt={elem.name} />
              </div>
            ))}
          </div>
        </div>
        <div className={styles.circle}></div>
        <div className={styles.circle2}></div>
      </div>
      <div className={styles.register_right}>
        <div className={styles.form}>
          <Form />
        </div>
      </div>

      <div className={styles.hidden}>
        <FindUsSection />
      </div>
    </main>
  );
}

export default Page;
