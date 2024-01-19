import Barcardi from "@/public/barcardi.png";
import Datacamp from "@/public/datacamp.png";
import Fruitelli from "@/public/fruitelli.png";
import Majique from "@/public/mediamajique.png";
import { StaticImageData } from "next/image";

interface partnerstype {
  id: number;
  image: StaticImageData;
  text: string;
  alt: string;
}
export const PartnersData: partnerstype[] = [
  {
    id: 0,
    image: Barcardi,
    text: "This could also be your story to tell. All you need to do is volunteer.  lorem ispum lorem ispum lorem ispum lorem spum lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum. lorem ispum lorem ispum loremispum lorem ",
    alt: "Barcardi's logo",
  },
  {
    id: 1,
    image: Datacamp,
    text: "This could also be your story to tell. All you need to do is volunteer.  lorem ispum lorem ispum lorem ispum lorem spum lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum. lorem ispum lorem ispum loremispum lorem ",
    alt: "Barcardi's logo",
  },
  {
    id: 2,
    image: Fruitelli,
    text: "This could also be your story to tell. All you need to do is volunteer.  lorem ispum lorem ispum lorem ispum lorem spum lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum. lorem ispum lorem ispum loremispum lorem ",
    alt: "Barcardi's logo",
  },
  {
    id: 3,
    image: Majique,
    text: "This could also be your story to tell. All you need to do is volunteer.  lorem ispum lorem ispum lorem ispum lorem spum lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum. lorem ispum lorem ispum loremispum lorem ",
    alt: "Barcardi's logo",
  },
  {
    id: 4,
    image: Fruitelli,
    text: "This could also be your story to tell. All you need to do is volunteer.  lorem ispum lorem ispum lorem ispum lorem spum lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum. lorem ispum lorem ispum loremispum lorem ",
    alt: "Barcardi's logo",
  },

  {
    id: 5,
    image: Barcardi,
    text: "This could also be your story to tell. All you need to do is volunteer.  lorem ispum lorem ispum lorem ispum lorem spum lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum. lorem ispum lorem ispum loremispum lorem ",
    alt: "Barcardi's logo",
  },
  {
    id: 6,
    image: Datacamp,
    text: "This could also be your story to tell. All you need to do is volunteer.  lorem ispum lorem ispum lorem ispum lorem spum lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum. lorem ispum lorem ispum loremispum lorem ",
    alt: "Barcardi's logo",
  },
  {
    id: 7,
    image: Fruitelli,
    text: "This could also be your story to tell. All you need to do is volunteer.  lorem ispum lorem ispum lorem ispum lorem spum lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum. lorem ispum lorem ispum loremispum lorem ",
    alt: "Barcardi's logo",
  },
  {
    id: 8,
    image: Majique,
    text: "This could also be your story to tell. All you need to do is volunteer.  lorem ispum lorem ispum lorem ispum lorem spum lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum. lorem ispum lorem ispum loremispum lorem ",
    alt: "Barcardi's logo",
  },
];
