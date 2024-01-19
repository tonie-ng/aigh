import Internship from "@/public/internshipp.png";
import Membership from "@/public/membershipp.png";
import Teaching from "@/public/teachingp.png";
import Volunteer from "@/public/volunteeringp.png";
import { StaticImageData } from "next/image";

interface programstype {
  id: number;
  image: StaticImageData;
  href: string;
  text: string;
  alt: string;
}

export const ProgramsData: programstype[] = [
  {
    id: 0,
    image: Volunteer,
    href: "https://forms.gle/wGKSSioNhSoMdMvN9",
    text: "Volunteering Program",
    alt: "",
  },
  {
    id: 1,
    image: Internship,
    href: "https://forms.gle/U9uUUrBJK3grfoRU7",
    text: "Internship Program",
    alt: "",
  },
  {
    id: 2,
    image: Teaching,
    href: "https://forms.gle/TiE5uKbiGoU4EMqo6",
    text: "Teaching Program",
    alt: "",
  },
  {
    id: 3,
    image: Membership,
    href: "/membership",
    text: "Membership Program",
    alt: "",
  },
];
