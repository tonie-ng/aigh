import BlueStar from "@/public/bluestar.svg";
import WhiteStar from "@/public/whitestar.svg";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import { HeaderOneType } from "../types";
import styles from "./headerone.module.css";

interface HeaderOneProps {
  type: HeaderOneType;
  image: StaticImageData;
  href: string;
  linktext: string;
}
function HeaderOne({ type, image, linktext, href }: HeaderOneProps) {
  return (
    <header className={styles.header}>
      <div className={styles.header_left}>
        {type == HeaderOneType.HOME ? (
          <HomeHeaderText />
        ) : type == HeaderOneType.VOLUNTEER ? (
          <VolunterrHeaderText />
        ) : type == HeaderOneType.CONTACT ? (
          <ContactHeaderText />
        ) : (
          <HomeHeaderText />
        )}
      </div>
      <div className={styles.header_right}>
        <Image src={BlueStar} alt="A blue star" className={styles.bluestar} />
        <div className={styles.header_image}>
          <Image src={image} alt="3 AIESECERs" priority />
        </div>
        <Image
          src={WhiteStar}
          alt="A white star"
          className={styles.whitestar}
        />
      </div>
      <Link href={href} className={styles.right_link}>
        {linktext}
      </Link>
    </header>
  );
}

function HomeHeaderText() {
  return (
    <>
      <h1>
        Develop your <span>leadership </span>skills with us!
      </h1>
      <p>
        At AIESEC, we believe that young people are the driving force for
        positive change. We provide global experiences that develop leadership
        and employability skills in youths, we connect people from all over the
        world and build sustainable solutions for society. AIESEC in Ghana is a
        subsidiary of AIESEC International.
      </p>
      <Link href="/volunteer">Explore Our Programs</Link>
    </>
  );
}

function VolunterrHeaderText() {
  return (
    <>
      <h1>
        Experience <br />
        AIESEC through
        <br />
        <span>volunteering!</span>
      </h1>
      <p>
        At the heart of AIESEC&rsquo;s transformative experience is
        volunteering, we give you a chance to chart your journey with uniquely
        crafted programs and projects and lifelong connections that ignite
        permanent positive change. Discover the world, inspire growth, and make
        a global impact with AIESEC
      </p>
      <Link href="https://forms.gle/wGKSSioNhSoMdMvN9" target="_blank">
        Volunteer
      </Link>
    </>
  );
}

function ContactHeaderText() {
  return (
    <>
      <h1>
        Meet our <br />
        dedicated <span>team.</span>
      </h1>
      <p>
        AIESEC in Ghana prides itself in its a team of forward-thinking
        individuals with a deep understanding of global issues who continually
        strive for excellence in leadership development.
      </p>
      <Link
        href="https://www.linkedin.com/company/aiesecinghana/about/?viewAsMember=true"
        target="_blank"
      >
        Follow on LinkedIn
      </Link>
    </>
  );
}

export default HeaderOne;
