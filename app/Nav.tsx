"use client";

import LogoBigImage from "@/public/aigh-biglogo.png";
import LogoSmallImage from "@/public/aigh-smalllogo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import styles from "./nav.module.css";

function Nav() {
  const path = usePathname();
  const [activeNav, setActiveNav] = useState<boolean>(false);
  const [dropDown, setDropDown] = useState<boolean>(false);

  return (
    <nav className={styles.nav}>
      <div
        onClick={() => window.scrollTo({ top: 0 })}
        className={styles.nav__logo}
      >
        <Image src={LogoBigImage} alt="AIESEC in Ghana's logo" priority />
      </div>

      <ul
        className={
          activeNav
            ? `${styles.nav__list} ${styles.nav__list_active}`
            : styles.nav__list
        }
      >
        <li className={styles.nav__list_item}>
          <Image src={LogoSmallImage} alt="AIESEC in Ghana's logo" />
        </li>
        <li
          className={
            path == "/"
              ? `${styles.nav__list_item} ${styles.active_nav_item}`
              : styles.nav__list_item
          }
        >
          <Link href="/">Home </Link>
        </li>
        <li
          className={
            path == "/recruitment"
              ? `${styles.nav__list_item} ${styles.active_nav_item}`
              : styles.nav__list_item
          }
        >
          <Link href="/recruitment">Recruitment</Link>
        </li>
        <li
          className={
            path == "/programs"
              ? `${styles.nav__list_item} ${styles.active_nav_item} ${styles.nav_program_container}`
              : `${styles.nav__list_item} ${styles.nav_program_container}`
          }
        >
          <div
            className={styles.nav_program}
            onClick={() => setDropDown(!dropDown)}
          >
            Programs <IoIosArrowDown />
          </div>
          <ul
            className={
              dropDown ? styles.dropdown_menu_active : styles.dropdown_menu
            }
          >
            <li className={styles.dropdown_item}>
              <Link href="/volunteer">Volunteer with AIESEC</Link>
            </li>
            <li className={styles.dropdown_item}>
              <Link href="/essay">Essay competition</Link>
            </li>
          </ul>
        </li>
        <li
          className={
            path == "/projects"
              ? `${styles.nav__list_item} ${styles.active_nav_item}`
              : styles.nav__list_item
          }
        >
          <Link href="/projects">Projects & Events</Link>
        </li>

        <Link href="/contact" className={styles.nav__list_item}>
          Contact Us
        </Link>
      </ul>

      <Link href="/contact" className={styles.nav__button}>
        Contact Us
      </Link>

      <div className={styles.nav_hamburger}>
        <RxHamburgerMenu onClick={() => setActiveNav(!activeNav)} />
      </div>
    </nav>
  );
}

export default Nav;
