"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel, { EmblaCarouselType } from "embla-carousel-react";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import styles from "./morepartners.module.css";

import { PartnersData } from "@/app/data/partners";

function MorePartnersSection() {
  const isBrowser = typeof window !== "undefined";
  const isMobile = isBrowser
    ? window.matchMedia("(max-width: 480px)").matches
    : false;

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: false,
      containScroll: "keepSnaps",
      duration: 20,
      startIndex: 0,
      slidesToScroll: "auto",

      breakpoints: {
        "(min-width: 480px)": { loop: true, duration: 100 },
      },
    },
    [
      Autoplay({
        playOnInit: isMobile ? false : true,
        delay: 5000,
        stopOnInteraction: isMobile ? true : false,
        stopOnMouseEnter: true,
      }),
    ]
  );

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);

    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
    return () => {
      if (emblaApi) {
        emblaApi.off("reInit", onSelect);
        emblaApi.off("select", onSelect);
      }
    };
  }, [emblaApi, onSelect]);

  return (
    <section className={styles.partners}>
      <h3 className="section_title">More About Our Partners</h3>
      <div className={styles.embla} ref={emblaRef}>
        <div className={styles.embla__container}>
          {PartnersData.map((elem) => (
            <div className={styles.embla__slide} key={elem.id}>
              <Image src={elem.image} alt={elem.alt} loading="lazy" />
              <span>{elem.text}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.embla__buttons}>
        {!prevBtnDisabled && (
          <button
            onClick={scrollPrev}
            disabled={prevBtnDisabled}
            className={styles.embla_disabled_btn}
          >
            <FaArrowLeft />
          </button>
        )}

        {!nextBtnDisabled && (
          <button
            onClick={scrollNext}
            disabled={nextBtnDisabled}
            className={styles.embla_btn}
          >
            <FaArrowRight />
          </button>
        )}
      </div>
    </section>
  );
}

export default MorePartnersSection;
