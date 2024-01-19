import MemberCommiteeImg3 from "@/public/membercommitee3.png";
import MemberCommiteeImg4 from "@/public/membercommitee4.png";
import MemberCommiteeImg5 from "@/public/membercommitee5.png";
import MemberCommiteeImg6 from "@/public/membercommitee6.png";
import MemberCommiteeImg7 from "@/public/membercommitee7.png";
import MemberCommiteeImg8 from "@/public/membercommitee8.png";
import MemberCommiteeImg9 from "@/public/membercommitee9.png";
import MemberCommiteeImg1 from "@/public/membercommitte1.png";
import MemberCommiteeImg2 from "@/public/membercommitte2.png";
import { StaticImageData } from "next/image";

interface membercommittetype {
  id: number;
  image: StaticImageData;
  name: string;
  alt: string;
  role: string;
  phonenumber: string;
  email: string;
}
export const MemberCommiteeData: membercommittetype[] = [
  {
    id: 0,
    image: MemberCommiteeImg1,
    name: "Brian Kwame Afful",
    alt: "",
    role: "CEO/Country Manager",
    phonenumber: "+233 55 780 3147",
    email: "brian@aiesecgh.net",
  },
  {
    id: 1,
    image: MemberCommiteeImg2,
    name: "Ekow Harding",
    alt: "",
    role: "Manager, Business Development",
    phonenumber: "+233 55 436 6049",
    email: "harding@aiesecgh.net",
  },
  {
    id: 2,
    image: MemberCommiteeImg3,
    name: "Popoola Olaniyi",
    alt: "",
    role: "Marketing Manager",
    phonenumber: "+234 811 427 2582",
    email: "popoola@aiesecgh.net",
  },
  {
    id: 3,
    image: MemberCommiteeImg4,
    name: "Ese Akugbe",
    alt: "",
    role: "Manager, Finance & Legalities",
    phonenumber: "+234 912 118 3295",
    email: "akugbe@aiesecgh.net",
  },
  {
    id: 4,
    image: MemberCommiteeImg5,
    name: "Adetutu Lawson",
    alt: "",
    role: "Operations Manager (iGV)",
    phonenumber: "+234 809 887 0610",
    email: "lawson@aiesecgh.net",
  },
  {
    id: 5,
    image: MemberCommiteeImg6,
    name: "Toluwanimi Owolabi",
    alt: "",
    role: "HR Manager",
    phonenumber: "+234 803 387 0481",
    email: "owolabi@aiesecgh.net",
  },
  {
    id: 6,
    image: MemberCommiteeImg7,
    name: "Peri Bilkisu",
    alt: "",
    role: "Operations Manager (oGX)",
    phonenumber: "+234 706 644 0144",
    email: "peri@aiesecgh.net",
  },
  {
    id: 7,
    image: MemberCommiteeImg8,
    name: "Felix Dosu",
    alt: "",
    role: "Mgr. Organisational Development",
    phonenumber: "+233 54 533 5518",
    email: "dosu@aiesecgh.net",
  },
  {
    id: 8,
    image: MemberCommiteeImg9,
    name: "Qudus Adeyemi",
    alt: "",
    role: "Project Manager",
    phonenumber: "+234 905 350 6928",
    email: "adeyemi@aiesecgh.net",
  },
];
