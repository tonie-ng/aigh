import FooterLogo from "@/public/footer-logo.png";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdMail } from "react-icons/md";
import styles from "./footer.module.css";

function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footer_container}>
          <div className={styles.footer_logo}>
            <Image
              src={FooterLogo}
              alt="AIESEC in Ghana's logo"
              loading="lazy"
            />
          </div>

          <p>16 2nd Aprotech St, Adenta Municipality, Ghana</p>
        </div>
        <div className={styles.footer_container}>
          <h4>AIESEC in Ghana</h4>
          <Link
            href="https://www.linkedin.com/company/aiesecinghana/about/?viewAsMember=true"
            target="_blank"
          >
            About us
          </Link>
          <Link href="https://medium.com/@aiesecgh" target="_blank">
            Our Blog
          </Link>
        </div>
        <div className={styles.footer_container}>
          <h4>Our Programs</h4>
          <Link href="https://forms.gle/wGKSSioNhSoMdMvN9" target="_blank">
            Volunteering
          </Link>
          <Link href="https://forms.gle/U9uUUrBJK3grfoRU7" target="_blank">
            Internship
          </Link>
          <Link href="https://forms.gle/TiE5uKbiGoU4EMqo6" target="_blank">
            Teaching
          </Link>
          <Link href="/membership">Membership</Link>
        </div>
        <div className={styles.footer_container}>
          <h4>Contact Us</h4>
          <Link href="tel:+233508581455">
            <FaPhone className={styles.logo} />
            +(233) 508581455
          </Link>
          <Link href="mailto:hello@aiesecgh.net" target="_blank">
            <MdMail className={styles.logo} /> hello@aiesecgh.net
          </Link>
          <div className={styles.footer_socials}>
            {/* <Link href="">
              <FaFacebook />
            </Link> */}
            <Link
              href="https://www.instagram.com/aiesecinghana/"
              target="_blank"
            >
              <AiFillInstagram />
            </Link>
            <Link href="https://twitter.com/aiesecinghana" target="_blank">
              <FaTwitter />
            </Link>
            <Link
              href="https://www.linkedin.com/company/aiesecinghana/about/?viewAsMember=true"
              target="_blank"
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </footer>
      <p className={styles.footer__tag}>AIESEC in Ghana.</p>
    </>
  );
}

export default Footer;
