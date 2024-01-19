"use client";

import { PartnersData } from "@/app/data/partners";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { PartnerType } from "../types";
import styles from "./partners.module.css";

interface PartnersProps {
  title: string;
  type: PartnerType;
}
export const Partners = ({ type, title }: PartnersProps) => {
  const autoplayOptions = {
    delay: 3000,
    stopOnInteraction: false,
  };
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      containScroll: "keepSnaps",
      duration: 50,
      startIndex: 0,
      slidesToScroll: "auto",
    },
    [Autoplay(autoplayOptions)]
  );

  return (
    <section className={styles.partners}>
      <h3 className="section_title">{title}</h3>
      <div className={styles.embla} ref={emblaRef}>
        <div className={styles.embla__container}>
          {PartnersData.map((elem) => (
            <div className={styles.embla__slide} key={elem.id}>
              <Image src={elem.image} alt={elem.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
