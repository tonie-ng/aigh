import LocalCommiteeImg1 from "@/public/localcommitee1.png";
import LocalCommiteeImg2 from "@/public/localcommitee2.png";
import LocalCommiteeImg3 from "@/public/localcommitee3.png";
import LocalCommiteeImg4 from "@/public/localcommitee4.png";
import LocalCommiteeImg5 from "@/public/localcommitee5.png";
import LocalCommiteeImg6 from "@/public/localcommitee6.png";
import LocalCommiteeImg7 from "@/public/localcommitee7.png";
import { StaticImageData } from "next/image";

interface localcommiteetype {
  id: number;
  image: StaticImageData;
  name: string;
  entity: string;
  phonenumber: string;
  email: string;
}

export const LocalCommiteeData: localcommiteetype[] = [
  {
    id: 0,
    image: LocalCommiteeImg1,
    name: "Joselyne Musana",
    entity: "AIESEC in RMU",
    phonenumber: "+233551584546",
    email: "joselyne.musana@aiesec.net",
  },
  {
    id: 1,
    image: LocalCommiteeImg2,
    name: "Seyram Daketsey",
    entity: "AIESEC in UMaT",
    phonenumber: "+233599974871",
    email: "seyram.daketsey@aiesec.net",
  },
  {
    id: 2,
    image: LocalCommiteeImg3,
    name: "Osbert Kweku Coleman",
    entity: "AIESEC in UCC",
    phonenumber: "+233560179720",
    email: "osbertkweku.coleman@aiesec.net",
  },
  {
    id: 3,
    image: LocalCommiteeImg4,
    name: "Huda Kafaabu Zuberu",
    entity: "AIESEC in Legon",
    phonenumber: "+233209360494",
    email: "huda.zuberu@aiesec.net",
  },
  {
    id: 4,
    image: LocalCommiteeImg5,
    name: "Edmund Quartey",
    entity: "AIESEC in UENR",
    phonenumber: "+233545335027",
    email: "edmund.quartey@aiesec.net",
  },
  {
    id: 5,
    image: LocalCommiteeImg6,
    name: "Grace Thelma Awadzie",
    entity: "AIESEC in CU",
    phonenumber: "+233553775504",
    email: "grace.awadzie@aiesec.net",
  },
  {
    id: 6,
    image: LocalCommiteeImg7,
    name: "Kwame Omari-Anim Danful",
    entity: "AIESEC in KNUST",
    phonenumber: "+233553602813",
    email: "kwamedanful@aiesec.net",
  },
];
