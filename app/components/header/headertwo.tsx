import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import { HeaderTwoType } from "../types";
import styles from "./headertwo.module.css";

interface HeadertwoProps {
  type: HeaderTwoType;
  images: StaticImageData[];
  linktext: string;
  href: string;
}
function Headertwo({ type, images, linktext, href }: HeadertwoProps) {
  return (
    <header className={styles.header}>
      <div className={styles.header_left}>
        {type == HeaderTwoType.RECRUITING ? (
          <RecruitingHeader />
        ) : type == HeaderTwoType.NOTRECRUITING ? (
          <NotRecruitingHeader />
        ) : type == HeaderTwoType.ESSAY ? (
          <EssayHeader />
        ) : type == HeaderTwoType.PROJECTS ? (
          <ProjectsHeader />
        ) : (
          <ProjectsHeader />
        )}
      </div>
      <div className={styles.header_right}>
        <div className={styles.header_right_images}>
          <div className={styles.header_image_left}>
            <Image src={images[0]} alt="" placeholder="blur" />
          </div>
          <div className={styles.header_image_right}>
            <div className={styles.header_image_2}>
              <Image src={images[1]} alt="" placeholder="blur" />
            </div>
            <div className={styles.header_image_3}>
              <Image src={images[2]} alt="" placeholder="blur" />
            </div>
          </div>
        </div>
        <Link href={href} className={styles.right_link}>
          {linktext}
        </Link>
      </div>
    </header>
  );
}

function RecruitingHeader() {
  return (
    <>
      <h1>
        Become an <br/>
				<span>AIESECer</span> <br />
        today!
      </h1>
      <p>
        The world&rsquo;s largest youth organisation is made up of people like
        you and me who want to make a difference in the world and be the best
        they can be!
      </p>
      <Link href="/membership">Explore Our Programs</Link>
    </>
  );
}

function NotRecruitingHeader() {
  return (
    <>
      <h1>
        Recruitment is <span>not yet </span>upon us.
      </h1>
      <p>
        Recruitment is not open yet, but you can give us your details and we
        would reach out to you when its open! We look forward to having you join
        us!
      </p>
      <Link href="">Join Our Waitlist</Link>
    </>
  );
}

function ProjectsHeader() {
  return (
    <>
      <h1>
        Making the <br />
        world better <br />
        with <span>AIESEC</span>
      </h1>
      <p>
        AIESEC in Ghana creates and facilitates initiatives that fosters growth,
        experience and builds capacity in young people to shape them thus
        equipping them to subsequently make significant impact in the world,
        starting with their immedidiate environment.
      </p>
      <Link href="/volunteer">Explore Our Programs</Link>
    </>
  );
}

function EssayHeader() {
  return (
    <>
      <h1>
        <span>Digitization</span> of Health: The Essay <span>Competition</span>
      </h1>
      <p>
        Your ideas are, of themselves, extraordinarily valuable. Showcase them
        through our essay competition!
      </p>
      <Link href="mailto:hello@aiesecgh.net?subject = Submission for AiGh Essay Competition&body = Message">
        Submit Your Essay
      </Link>
    </>
  );
}
export default Headertwo;
