import Advisor1 from "@/public/advisor1.png";
import Advisor2 from "@/public/advisor2.png";
import Advisor3 from "@/public/advisor3.png";
import Advisor4 from "@/public/advisor4.png";
import { StaticImageData } from "next/image";

interface advisortype {
  id: number;
  image: StaticImageData;
  name: string;
  role: string;
}

export const AdvisorData: advisortype[] = [
  {
    id: 0,
    image: Advisor1,
    name: "Mr Micheal N. A. Cobblah",
    role: "Executive Director, C-NERGY Ghana LTD",
  },
  {
    id: 1,
    image: Advisor2,
    name: "Dr. Felix Addo",
    role: "President, Ghana Association of Restructuring and Insolvency Advisors (GARIA)",
  },
  {
    id: 2,
    image: Advisor3,
    name: "Vish Ashiagbor",
    role: "Country Senior Partner PwC Ghana",
  },
  {
    id: 3,
    image: Advisor4,
    name: "Prof John Aheto",
    role: "Executive Director, Psychon HR",
  },
  {
    id: 10,
    image: Advisor1,
    name: "More about the board",
    role: "The Board's commitment to AIESEC's mission is reflected in its strategic guidance, providing a roadmap for the organization's initiatives and fostering a culture of excellence. ",
  },
];
