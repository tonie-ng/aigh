import RecruitmentImg1 from "@/public/recruitmentimg1.png";
import RecruitmentImg2 from "@/public/recruitmentimg2.png";
import RecruitmentImg3 from "@/public/recruitmentimg3.png";
import RecruitmentImg4 from "@/public/recruitmentimg4.png";
import RecruitmentImg5 from "@/public/recruitmentimg5.png";
import RecruitmentImg6 from "@/public/recruitmentimg6.png";
import { StaticImageData } from "next/image";
import React from "react";
import FindUsSection from "../components/findus/findus";
import Headertwo from "../components/header/headertwo";
import { HeaderTwoType } from "../components/types";

function page() {
  return (
    <section>
      <Headertwo
        type={HeaderTwoType.RECRUITING}
        images={recruitingimages}
        linktext="Become a Member"
        href="/membership"
      />
      <FindUsSection />
    </section>
  );
}

const recruitingimages: StaticImageData[] = [
  RecruitmentImg1,
  RecruitmentImg2,
  RecruitmentImg3,
];

const notrecruiting: StaticImageData[] = [
  RecruitmentImg4,
  RecruitmentImg5,
  RecruitmentImg6,
];
export default page;
