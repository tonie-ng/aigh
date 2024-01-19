import EvolvixLogo from "@/public/evolvixlogo.png";
import HeaderIMg from "@/public/meetheaderimg.png";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeaderOne from "../components/header/headerone";
import LocalCommitee from "../components/localcommitee/localcommitee";
import Map from "../components/map/map";
import { HeaderOneType } from "../components/types";
import { AdvisorData } from "../data/advisors";
import { MemberCommiteeData } from "../data/membercommitee";
import styles from "./page.module.css";

function Page() {
  return (
    <main>
      <HeaderOne
        type={HeaderOneType.CONTACT}
        image={HeaderIMg}
        href="https://www.linkedin.com/company/aiesecinghana/about/?viewAsMember=true"
        linktext="Follow on LinkedIn"
      />

      <section className={styles.member_commitee_section}>
        <h3 className="section_title">Our Member Committee Team</h3>
        <span className={styles.member_commitee_section_span}>
          MC Evolvix, AiGH 23.24 is rooted in a culture of Excellence,
          Integrity, and Fun. Our team functions seamlessly, capitalizing on
          each member&rsquo;s strengths to drive impactful initiatives.
        </span>
        <div className={styles.member_card_container}>
          {MemberCommiteeData.map((elem) => (
            <div className={styles.member_card} key={elem.id}>
              <div className={styles.member_image}>
                <Image
                  src={elem.image}
                  alt=""
                  loading="lazy"
                  placeholder="blur"
                />
              </div>
              <div className={styles.member_card_bottom}>
                <div className={styles.member_card_left}>
                  <h4 className={styles.membername}>{elem.name}</h4>
                  <span className={styles.member_role}>{elem.role}</span>
                  <Link href="">{elem.phonenumber}</Link>
                  <Link href="">{elem.email}</Link>
                </div>
                <div className={styles.member_card_right}>
                  <Image
                    src={EvolvixLogo}
                    alt=""
                    loading="lazy"
                    placeholder="blur"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <LocalCommitee />

      {/* <section className={styles.advisors_section}>
        <h3 className="section_title">Our Board of Advisors</h3>
        <div className={styles.advisors_container}>
          {AdvisorData.map((elem) => (
            <div key={elem.id} className={styles.advisor_card}>
              <div className={styles.advisor_image}>
                <Image
                  src={elem.image}
                  alt=""
                  loading="lazy"
                  placeholder="blur"
                />
              </div>
              <div className={styles.advisor_card_bottom}>
                <h4>{elem.name}</h4>
                <span>{elem.role}</span>
              </div>
            </div>
          ))}
        </div>
      </section> */}

      {/* <Map /> */}
    </main>
  );
}

export default Page;
