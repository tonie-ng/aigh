import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import { PiArrowRightThin } from "react-icons/pi";
import styles from "./reverse.module.css";

interface FourCardProps {
  title?: string;
  subtitle: string;
  text: string;
  href: string;
  linktext?: string;
  button: boolean;
  images: StaticImageData[];
  color: string;
  span?: string;
}
function ReverseFourCardLayout({
  title,
  subtitle,
  text,
  href,
  linktext,
  button,
  images,
  color,
  span,
}: FourCardProps) {
  return (
    <section className={styles.fourcard}>
      <h3 className="section_title">{title}</h3>

      <div className={styles.fourcard_bottom}>
        {button && (
          <Link
            className={`${styles.fourcard_left_button} ${styles.fourcard_extra_button}`}
            href={href}
            target="_blank"
            style={{ backgroundColor: color }}
          >
            {linktext}
          </Link>
        )}
        <div className={styles.fourcard_right}>
          <div className={styles.fourcard_image_container}>
            {images.map((elem, id) => (
              <div className={styles.fourcard_image} key={id}>
                <Image
                  src={elem}
                  alt=""
                  className={id % 2 != 0 ? styles.img_right : styles.img_left}
                  loading="lazy"
                  placeholder="blur"
                />
              </div>
            ))}
          </div>
        </div>
        <div className={styles.fourcard_left}>
          <h4>
            {subtitle} <br />
            <span style={{ color }}>{span}</span>
          </h4>
          <p>{text}</p>
          <Link
            className={
              button ? styles.fourcard_left_button : styles.fourcard_left_circle
            }
            href={href}
            target="_blank"
            style={{ backgroundColor: color }}
          >
            {button ? linktext : <PiArrowRightThin fontWeight={900} />}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ReverseFourCardLayout;
