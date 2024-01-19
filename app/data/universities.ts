import CapeCoastUni from "@/public/capecoastuni.png";
import CentralUni from "@/public/centraluni.png";
import KwameUni from "@/public/kwameuni.png";
import RegionalMaritimeUni from "@/public/regionalmaritimeuni.png";
import UniofEnergy from "@/public/uniofenergy.png";
import UniofGhana from "@/public/uniofghana.png";
import UniofMines from "@/public/uniofmines.png";
import { StaticImageData } from "next/image";

interface unidata {
  id: number;
  image: StaticImageData;
  name: string;
  alt: string;
}

export const UniversityData: unidata[] = [
  {
    id: 0,
    image: CentralUni,
    name: "Central University",
    alt: "",
  },
  {
    id: 1,
    image: RegionalMaritimeUni,
    name: "Regional Maritime University",
    alt: "",
  },
  {
    id: 2,
    image: UniofGhana,
    name: "University of Ghana",
    alt: "",
  },
  {
    id: 3,
    image: CapeCoastUni,
    name: "University of Cape Coast",
    alt: "",
  },
  {
    id: 4,
    image: KwameUni,
    name: "Kwame Nkrumah University of Science and Technology",
    alt: "",
  },
  {
    id: 5,
    image: UniofEnergy,
    name: "University of Energy and Natural Resources",
    alt: "",
  },
  {
    id: 6,
    image: UniofMines,
    name: "University of Mines and Technology",
    alt: "",
  },
];
