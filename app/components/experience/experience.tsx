import Link from "next/link";
import React from "react";
import { PiArrowRightThin } from "react-icons/pi";
import styles from "./experience.module.css";

interface ExperienceProps {
  title: string;
  href: string;
  subtitle: string;
  text: string;
}
function Experience({ title, subtitle, text, href }: ExperienceProps) {
  return (
    <section className={styles.section}>
      <h3 className="section_title">{title}</h3>
      <div className={styles.card}>
        <div className={styles.card_top}>
          <h4>{subtitle}</h4>
          <p>{text}</p>
        </div>
        <Link href={href}>
          <PiArrowRightThin />
        </Link>
      </div>
    </section>
  );
}

export default Experience;
