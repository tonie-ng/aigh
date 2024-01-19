import AboutUsImg from "@/public/aboutus.png";
import Blog1 from "@/public/blog1.png";
import HeaderImage from "@/public/homeheader.png";
import RecentProject1 from "@/public/recentProject1.png";
import RecentProject2 from "@/public/recentProject2.png";
import RecentProject3 from "@/public/recentProject3.png";
import RecentProject4 from "@/public/recentProject4.png";
import X1 from "@/public/x1.png";
import X2 from "@/public/x2.png";
import X3 from "@/public/x3.png";
import X4 from "@/public/x4.png";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import { PiArrowRightThin } from "react-icons/pi";
import Alumni from "./Alumni";
import Experience from "./components/experience/experience";
import FindUsSection from "./components/findus/findus";
import FourCardLayout from "./components/fourcard/fourcard";
import HeaderOne from "./components/header/headerone";
import MorePartnersSection from "./components/partners/morepartners";
import { Partners } from "./components/partners/partners";
import PartnerWithUs from "./components/partnerwithus/partnerwithus";
import StayConnected from "./components/stayconnected/stayconnected";
import { HeaderOneType, PartnerType } from "./components/types";
import { ProgramsData } from "./data/programs";
import styles from "./page.module.css";

function Page() {
  return (
    <main>
      <HeaderOne
        type={HeaderOneType.HOME}
        image={HeaderImage}
        href="/projects"
        linktext="Explore Our Programs"
      />
      {/* Programs section */}
      <section className={styles.programs_section}>
        <h3 className="section_title">Discover Our Programs</h3>
        <div className={styles.programs_container}>
          {ProgramsData.map((elem) => (
            <div className={styles.programs_card} key={elem.id}>
              <div className={styles.programs_image}>
                <Image
                  src={elem.image}
                  alt={elem.alt}
                  loading="lazy"
                  placeholder="blur"
                />
              </div>
              <span>{elem.text}</span>
              <Link href={elem.href} target="_blank">
                Learn More <PiArrowRightThin />
              </Link>
            </div>
          ))}
        </div>
      </section>
      {/* Recent Projects */}
      <FourCardLayout
        images={images}
        button={false}
        color="#037EF3"
        href=""
        subtitle="Youth & Health Activism"
        text="In partnership with PharmAccess and Grand Casamora, we launched this event to empower and inspire youth to become proactive advocates for improved health and wellness in their communities. Creating a future where every young person is equipped with the knowledge, resources, and motivation to address critical health issues."
        title="Our Recent Projects"
      />
      {/* About us section */}
      <section className={styles.about_section}>
        <div className={styles.about_left}>
          <div className={styles.about_image}>
            <Image src={X1} alt="" className={styles.about_x} />
            <Image src={X2} alt="" className={styles.about_x} />
            <Image src={X3} alt="" className={styles.about_x} />
            <Image src={X4} alt="" className={styles.about_x} />
            <Image
              src={AboutUsImg}
              alt=""
              className={styles.about_image_img}
              loading="lazy"
              placeholder="blur"
            />
          </div>
        </div>
        <div className={styles.about_right}>
          <h3>About Us</h3>
          <p>
            AIESEC is a youth run non-governmental and not-for-profit
            organization for youths and it was founded in the year 1948. We run
            a global platform for young people to develop their leadership
            potential through practical experiences of many kinds, including
            internships, volunteering opportunities and more.
          </p>
          <Link href="/membership">Join AIESEC</Link>
        </div>
      </section>
      {/* Experience Section */}
      <Experience
        title="You can always experience AIESEC through"
        subtitle="Becoming a Member"
        href="/membership"
        text="The world&rsquo;s largest Youth organisation is made up of people like you and me who want to make a difference in the world and be the best they can be!"
      />
      {/* Alumni Section */}
      <Alumni />
      {/* Blog Section */}
      <section className={styles.blog__section}>
        <div className={styles.blog_left}>
          <div className={styles.blog_image}>
            <Image src={Blog1} alt="" loading="lazy" placeholder="blur" />
          </div>
        </div>
        <div className={styles.blog_right}>
          <h3>Let&rsquo;s dive into our blog world</h3>
          <p>
            Do you have an idea that has the potential to contribute to better
            financing or delivery of health care or make quality health care
            affordable or available to all segments of the population? Can you
            take advantage of the transformative potential of the digital
            revolution to contribute to Universal Health Coverage? Does your
            idea positively impact your community, country, or society? If the
            answer to these questions is yes. In that case, the AIESEC Essay
            Competition 2022 Competition allows you to share your ideas on
            healthcare financing and delivery, connect with peers and explore
            how to bring your idea to the next level.
          </p>
          <Link href="https://medium.com/@aiesecgh" target="_blank">
            Visit Blog Page
          </Link>
        </div>
      </section>
      {/* ====================== More Partners section */}
			{/* <MorePartnersSection /> */}
      {/* Our Partners */}
      <Partners type={PartnerType.SHORT} title="Our Partners" />
      {/* Partner With Us Section */}
      <PartnerWithUs />
      {/* Find Us in Any of These Schools */}
      <FindUsSection />
      <StayConnected />
    </main>
  );
}

export default Page;

const images: StaticImageData[] = [
  RecentProject1,
  RecentProject2,
  RecentProject3,
  RecentProject4,
];
