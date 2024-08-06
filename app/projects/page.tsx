import ProjectsHeader3Img from "@/public/projecstheader3.png";
import Projects3rdImg1 from "@/public/projects3rdsection1.png";
import Projects3rdImg2 from "@/public/projects3rdsection2.png";
import Projects3rdImg3 from "@/public/projects3rdsection3.png";
import Projects3rdImg4 from "@/public/projects3rdsection4.png";
import Projects4thImg1 from "@/public/projects4thsection1.png";
import Projects4thImg2 from "@/public/projects4thsection2.png";
import Projects4thImg3 from "@/public/projects4thsection3.png";
import Projects4thImg4 from "@/public/projects4thsection4.png";
import ProjectsHeader1Img from "@/public/projectsheader1.png";
import ProjectsHeader2Img from "@/public/projectsheader2.png";
import RecentProject1 from "@/public/recentProject1.png";
import RecentProject2 from "@/public/recentProject2.png";
import RecentProject3 from "@/public/recentProject3.png";
import RecentProject4 from "@/public/recentProject4.png";
import WhatWeThinkImg from "@/public/whatwethink.png";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import FourCardLayout from "../components/fourcard/fourcard";
import ReverseFourCardLayout from "../components/fourcard/reversefourcard";
import Headertwo from "../components/header/headertwo";
import { HeaderTwoType } from "../components/types";
import styles from "./page.module.css";

function Page() {
	return (
		<main>
			<Headertwo
				type={HeaderTwoType.PROJECTS}
				linktext="Explore Our Programs"
				href=""
				images={projectheaderimages}
			/>
			<ReverseFourCardLayout
				images={section3images}
				button={false}
				color="#037EF3"
				title="Event Name: Alumni & Stakeholders Dinner."
				subtitle="Alumni &
				Stakeholders Dinner"
				href=""
				text="AIESEC in Ghana has been at the forefront of youth leadership development for over six decades, and as we celebrate our 60+ years of dedication to nurturing future leaders, we organised a special celebratory dinner to recognise the people who have supported our mission of empowering young people. We also find ourselves in an exciting position to continue the legacy of developing leadership potential in the youth."
			/>

			<FourCardLayout
				images={section2images}
				button={false}
				color="#037EF3"
				title="Youth & Health Activism."
				subtitle="Youth & Health Activism"
				href=""
				text="In partnership with PharmAccess and Grand Casamora, we launched this event to empower and inspire youth to become proactive advocates for improved health and wellness in their communities. Creating a future where every young person is equipped with the knowledge, resources, and motivation to address critical health issues."
			/>

			<ReverseFourCardLayout
				images={section4images}
				button={false}
				color="#037EF3"
				title="Project Name: National Training & Motivation Seminar"
				subtitle="NTMS 2023 Takoradi"
				href=""
				text="NTMS is the second conference of the AIESEC year. It brings together young leaders across Ghana and the world to provide them with needed skills, knowledge and motivation to shape their experience as leaders. The conference is aimed at promoting personal and professional development. NTMS provides a space for members to engage with experts to facilitate personal growth and development."
			/>
		</main>
	);
}

export default Page;

const projectheaderimages: StaticImageData[] = [
	ProjectsHeader1Img,
	ProjectsHeader2Img,
	ProjectsHeader3Img,
];

const section2images: StaticImageData[] = [
	RecentProject1,
	RecentProject2,
	RecentProject3,
	RecentProject4,
];

const section3images: StaticImageData[] = [
	Projects3rdImg1,
	Projects3rdImg2,
	Projects3rdImg3,
	Projects3rdImg4,
];

const section4images: StaticImageData[] = [
	Projects4thImg1,
	Projects4thImg2,
	Projects4thImg3,
	Projects4thImg4,
];
