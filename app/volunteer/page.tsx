import VolunteerImg9 from "@/public/globalteacher1.png";
import VolunteerImg10 from "@/public/globalteacher2.png";
import VolunteerImg11 from "@/public/globalteacher3.png";
import VolunteerImg12 from "@/public/globalteacher4.png";
import VolunteerImg1 from "@/public/volunteer1stsection1.png";
import VolunteerImg2 from "@/public/volunteer1stsection2.png";
import VolunteerImg3 from "@/public/volunteer1stsection3.png";
import VolunteerImg4 from "@/public/volunteer1stsection4.png";
import VolunteerImg5 from "@/public/volunteer2ndsection1.png";
import VolunteerImg6 from "@/public/volunteer2ndsection2.png";
import VolunteerImg7 from "@/public/volunteer2ndsection3.png";
import VolunteerImg8 from "@/public/volunteer2ndsection4.png";
import VolunteerHeaderImg from "@/public/volunteerheaderimg.png";
import { StaticImageData } from "next/image";
import React from "react";
import Experience from "../components/experience/experience";
import FourCardLayout from "../components/fourcard/fourcard";
import ReverseFourCardLayout from "../components/fourcard/reversefourcard";
import HeaderOne from "../components/header/headerone";
import Testimonial from "../components/testimonial/testimonial";
import { HeaderOneType } from "../components/types";
function Page() {
  return (
    <main>
      <HeaderOne
        type={HeaderOneType.VOLUNTEER}
        image={VolunteerHeaderImg}
        href="https://forms.gle/wGKSSioNhSoMdMvN9"
        linktext="Become a Volunteer"
      />

      <ReverseFourCardLayout
        images={section1images}
        button={true}
        color="#F85A40"
        href="https://forms.gle/wGKSSioNhSoMdMvN9"
        subtitle="Become a"
        text="Broaden your horizons with AIESEC. Join us in shaping a world of impact, fostering cross-cultural understanding, and leaving a lasting legacy. Dare to make a difference!"
        linktext="Become A Global Volunteer"
        span=" Global Volunteer."
      />

      <FourCardLayout
        images={section2images}
        button={true}
        color="#0CB9C1"
        href="https://forms.gle/U9uUUrBJK3grfoRU7"
        subtitle="Become a"
        text="The best way to develop your proficiency in any given task or skill is to actively work in that area/field and learn from the experience you get on the job."
        linktext="Become A Global Intern"
        span=" Global Intern."
      />

      <ReverseFourCardLayout
        images={section3images}
        button={true}
        color="#F48924"
        href="https://forms.gle/TiE5uKbiGoU4EMqo6"
        subtitle="Become a"
        text="Our Global Teacher program offer educators a platform to transcend borders, cultivate cross-cultural competence, and inspire students worldwide. Join us in shaping a future where education knows no bounds."
        linktext="Become A Global Teacher"
        span=" Global Teacher."
      />

      <Testimonial />
    </main>
  );
}

export default Page;

const section1images: StaticImageData[] = [
  VolunteerImg1,
  VolunteerImg2,
  VolunteerImg3,
  VolunteerImg4,
];

const section2images: StaticImageData[] = [
  VolunteerImg5,
  VolunteerImg6,
  VolunteerImg7,
  VolunteerImg8,
];

const section3images: StaticImageData[] = [
  VolunteerImg9,
  VolunteerImg10,
  VolunteerImg11,
  VolunteerImg12,
];
