import Joyin from "@/public/JoyinAlumni.png";
import Mogbo from "@/public/MogboAlumni.png";
import { StaticImageData } from "next/image";

interface alumnitype {
  id: number;
  name: string;
  text: string;
  image: StaticImageData;
}
export const AlumniSectionData: alumnitype[] = [
  {
    id: 0,
    name: "Joyin Afolarin",
    text: "She is an Alumni who is currently working with Energia. According to Joyin, AIESEC shaped her experience in so many ways.",
    image: Joyin,
  },
  {
    id: 1,
    name: "Mogbo Oluwa",
    text: "He is an Alumni who is currently working with Microsoft. According to Mogbo, AIESEC shaped his experience in iso many ways.",
    image: Mogbo,
  },
  {
    id: 2,
    name: "Joyin Afolarin",
    text: "She is an Alumni who is currently working with Energia. According to Joyin, AIESEC shaped her experience in so many ways.",
    image: Joyin,
  },
  {
    id: 3,
    name: "Mogbo Oluwa",
    text: "He is an Alumni who is currently working with Microsoft. According to Mogbo, AIESEC shaped his experience in iso many ways.",
    image: Mogbo,
  },
  {
    id: 4,
    name: "Joyin Afolarin",
    text: "She is an Alumni who is currently working with Energia. According to Joyin, AIESEC shaped her experience in so many ways.",
    image: Joyin,
  },
];
