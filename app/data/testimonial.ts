import BukolaImg from "@/public/bukolatestimonial.png";
import GraceImg from "@/public/gracetestimonial.png";
import OlaniyiImg from "@/public/olaniyitestimonial.png";
import { StaticImageData } from "next/image";

interface testimonialtype {
  id: number;
  image: StaticImageData;
  name: string;
  text: string;
}
export const TestimonialData = [
  {
    id: 0,
    image: OlaniyiImg,
    name: "Olaniyi",
    text: `"Incredible journey with AIESEC's Global Volunteer program. Making a positive impact in communities, I gained cultural insights and formed lasting connections."`,
  },
  {
    id: 1,
    image: BukolaImg,
    name: "Bukola",
    text: `"Inspired by AIESEC's Global Teacher program. Teaching abroad, I connected with diverse cultures, made lifelong friends, and contributed to meaningful change."`,
  },
  {
    id: 2,
    image: GraceImg,
    name: "Olaniyi",
    text: `"AIESEC's Global Internship opened doors to a world of possibilities. Professional growth, cross-cultural understanding, and lasting friendships—all in one incredible journey."`,
  },
  {
    id: 3,
    image: BukolaImg,
    name: "Bukola",
    text: `"Inspired by AIESEC's Global Teacher program. Teaching abroad, I connected with diverse cultures, made lifelong friends, and contributed to meaningful change."`,
  },
  {
    id: 4,
    image: GraceImg,
    name: "Olaniyi",
    text: `"AIESEC's Global Internship opened doors to a world of possibilities. Professional growth, cross-cultural understanding, and lasting friendships—all in one incredible journey."`,
  },
];
