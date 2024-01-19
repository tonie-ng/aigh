import AfricanMap from "@/public/africamap.png";
import EssayAboutImg from "@/public/essayabout1.png";
import EssayParticipateImg from "@/public/essayabout3.png";
import EssayBlack1 from "@/public/essayblack1.png";
import EssayBlack2 from "@/public/essayblack2.png";
import EssayGold1 from "@/public/essaygold1.png";
import EssayGold2 from "@/public/essaygold2.png";
import HeaderImg1 from "@/public/essayheader1.png";
import HeaderImg2 from "@/public/essayheader2.png";
import HeaderImg3 from "@/public/essayheader3.png";
import EssayFocusIMg from "@/public/focus1.png";
import PharmAccessImg from "@/public/pharmaccessimg.png";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { BsClipboard2Check } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { TfiWrite } from "react-icons/tfi";
import Headertwo from "../components/header/headertwo";
import { HeaderTwoType } from "../components/types";

import styles from "./page.module.css";

function Page() {
  return (
    <main>
      <Headertwo
        type={HeaderTwoType.ESSAY}
        href="mailto:hello@aiesecgh.net?subject = Submission for AiGh Essay Competition&body=Message"
        images={headerimages}
        linktext="Submit Your Essay"
      />

      <section className={styles.partnership_section}>
        <h3 className="section_title">In Partnership With</h3>
        <div className={styles.pharmaccessimg}>
          <Image
            src={PharmAccessImg}
            alt=""
            loading="lazy"
            placeholder="blur"
          />
        </div>
        <div className={styles.partnership_bottom}>
          <span className={styles.essay_title}>AIESEC Essay Competition</span>
          <div className={styles.partnership_card}>
            <h4>
              YOUTH ENGAGEMENT, DIGITALIZATION and FINANCING FOR TRANSFORMING
              HEALTH CARE AND ENDING POVERTY IN AFRICA
            </h4>
            <p>
              Rapid technological changes have created opportunities in Africa,
              and we must take advantage of its transformative potential to make
              Africa more prosperous and inclusive for all.
            </p>
          </div>
          <p className={styles.bottom_p}>
            If you are up to 30 years of age and could take advantage of today’s
            technology. How could you use it to support the transformation of
            healthcare delivery, end poverty and boost prosperity in Africa?
            What role do you think the youth can play in digitalising and
            financing health care in Africa?
          </p>
          <span className={styles.bottom_span}>
            Deadline for Submission: 31 January, 2024
          </span>
        </div>
      </section>

      <section className={styles.essay_about}>
        <div className={styles.essay_left}>
          <div className={styles.essay_image}>
            <Image
              src={EssayAboutImg}
              alt=""
              loading="lazy"
              placeholder="blur"
            />
          </div>
        </div>
        <div className={styles.essay_right}>
          <h3 className="section_title">About The Competition</h3>
          <p>
            In Africa, more than 15 million people are pushed below the
            $1.90-a-day poverty line yearly due to high household health
            expenses. And more than 109 million Africans spend 10% or more of
            their household income on health. At the same time, Africa has
            become the bedrock of digital transformation. Africa comprises 16%
            of the world population and carries 23% of the global disease
            burden, yet it accounted for just 1% of total global health
            expenditures in 2015. Rethinking digitalisation to ensure that all
            people across Africa are well equipped and have access to resources
            and opportunities to fully realise their potential and shape their
            access to health care is one of the most pressing challenges of our
            time. Everybody has a role to play - but no one is better placed
            than young people as early adapters and most active technology users
            to identify the obstacles and find ways to overcome them. The
            purpose of this competition is to challenge young people to take
            advantage of today&rsquo;s rapidly changing technology to craft
            solutions to address the challenges of health financing and delivery
            in their respective countries. In addition, the competition also
            aims to inspire and create a dialogue on innovative ways to address
            some of the problems. The needs that have also been created by this
            &ldquo;technology revolution&rdquo; hinder sustainable development.
          </p>
        </div>
      </section>

      <section className={styles.essay_focus}>
        <div className={styles.focus_left}>
          <h3 className="section_title">Why We Are Focusing on Youth</h3>
          <p>
            Around Africa, young people see entrepreneurship as a means to
            achieve social and economic development. By lowering information
            barriers and costs and expanding access to digitalisation, the
            internet, mobile technologies and data increase experimentation and
            give rise to new opportunities for entrepreneurship for young
            people. Youth entrepreneurs are crucial in generating new business
            ideas that transform local and global communities. Youth with the
            right skills can come up with ideas, leveraging on digital
            technologies to promote business models or more efficient approaches
            which lead to benefits for economic transformation, including
            healthcare delivery. Young entrepreneurs and innovators can disrupt
            markets and create significant impact, compelling a serious
            commitment from governments and private firms to change their
            business ways. What can be done to spark the entrepreneurial
            potential inherent in African youth? How can youth entrepreneurs
            help unleash the power of digital technology, business modelling,
            private sector-led growth, and public-private partnerships to
            improve the financing and delivery of health and benefit their
            societies?
          </p>
        </div>
        <div className={styles.focus_right}>
          <div className={styles.focus_image}>
            <Image
              src={EssayBlack1}
              alt=""
              className={styles.focus_small_img}
            />
            <Image
              src={EssayFocusIMg}
              alt=""
              loading="lazy"
              placeholder="blur"
              className={styles.focus_image_img}
            />
            <Image
              src={EssayBlack2}
              alt=""
              className={styles.focus_small_img}
            />
          </div>
        </div>
      </section>

      {/* Basically Duplicated to avoid stress :) */}
      <section className={styles.essay_about}>
        <div className={styles.essay_left}>
          <div className={styles.essay3_image}>
            <Image src={EssayGold1} alt="" className={styles.essaygold_img} />
            <Image
              src={EssayParticipateImg}
              alt=""
              className={styles.essay3_image_img}
            />
            <Image src={EssayGold2} alt="" className={styles.essaygold_img} />
          </div>
        </div>
        <div className={styles.essay_right}>
          <h3 className="section_title">Why You Should Participate</h3>
          <p>
            Do you have an idea that has the potential to contribute to better
            financing or delivery of health care or make quality health care
            affordable or available to all segments of the population? Can you
            take advantage of the transformative potential of the digital
            revolution to contribute to Universal Health Coverage? Does your
            idea positively impact your community, country, or society? If the
            answer to these questions is yes. In that case, the AIESEC Essay
            Competition 2022 Competition allows you to share your ideas on
            healthcare financing and delivery, connect with peers and explore
            how to bring your idea to the next level.
          </p>
        </div>
      </section>

      <section className={styles.essay_focus}>
        <div className={styles.focus_left}>
          <h3 className="section_title">Participant Context</h3>
          <p>
            If you are up to 30 years of age and could take advantage of
            today&rsquo;s technology, how could you use it to support the
            transformation of healthcare delivery, end poverty and boost
            prosperity in Africa? What role do you think the youth can play in
            the digitalization and financing of health care in Africa?Contribute
            to building the inclusive health system of tomorrow by sharing your
            idea
          </p>
        </div>
        <div className={styles.focus_right}>
          <div className={styles.africa_map}>
            <Image src={AfricanMap} alt="" loading="lazy" placeholder="blur" />
          </div>
        </div>
      </section>

      <section className={styles.benefits_section}>
        <h3 className="section_title">Benefits of Participating</h3>
        <div className={styles.benefits_container}>
          <p>
            Applicants of the best 10 essays will be mentored by a network of
            experts (companies, organizations and entrepreneurs). These
            applicants will be invited to the AIESEC Youth leadership summit as
            paneliist and speakers
          </p>
          <p>
            Applicants of the best 10 essays will be mentored by a network of
            experts (companies, organizations and entrepreneurs). These
            applicants will be invited to the AIESEC Youth leadership summit as
            paneliist and speakers
          </p>
          <p>
            Applicants of the best 10 essays will be mentored by a network of
            experts (companies, organizations and entrepreneurs). These
            applicants will be invited to the AIESEC Youth leadership summit as
            paneliist and speakers
          </p>
        </div>
      </section>

      <section className={styles.ready_section}>
        <h3 className="section_title">Are you Ready to Apply?</h3>
        <span>
          To enter the AIESEC Youth and Digitalisation of Health Competition,
          you must write an essay in English addressing any subthemes defined
          under the Scope of the Competition. An applicant shall meet the
          following eligibility requirements:
        </span>

        <div className={styles.ready_container}>
          <ol className={styles.og_ol}>
            <li>
              The Competition is open to individuals aged 18 to 30 years,
              irrespective of education, gender, and political persuasion.
            </li>
            <li>
              The Competition is open to nationals or residents of Africa.
            </li>
            <li>
              The essay must not exceed 3000 words, including all texts, titles,
              headings, tables, footnotes, endnotes, references, annexes, etc.
            </li>
            <li>
              An essay shall provide an innovative and action-oriented
              business-level or policy-level idea aimed at solving a
              problem/need related to the financing or delivery of health (see
              Scope of the Competition).
            </li>
            <li>
              An essay must:
              <ol type="a" className="os_ol">
                <li> provide a short 2-5 sentence summary of the idea;</li>
                <li> describe the problem or need that you want to address;</li>
                <li>
                  describe the solution or idea to address the problem or need,
                  describing its groundbreaking features, including business
                  model, market innovation and feasibility of implementation;
                </li>
              </ol>
            </li>
          </ol>

          <ol className={styles.og_ol} start={5}>
            <li>
              <ol type="a" start={4} className="os_ol">
                <li>
                  describe the main impacts and benefits of the solution or
                  idea, including the key aspects that make the solution or idea
                  catalytic and financially viable;
                </li>
                <li>
                  escribe the solution or idea&rsquo;s potential for replication
                  or scaling, citing any significant barriers that have been or
                  would need to be overcome and
                </li>
                <li>why does this solution or idea win?</li>
              </ol>
            </li>
            <li>
              An essay will be judged based on the following criteria:
              <ol type="a" className="os_ol">
                <li>
                  clarity, scope and relevance of the problem and the proposed
                  solution;
                </li>
                <li>Innovation and originality;</li>
                <li>
                  feasibility of implementation and whether it is sustainable in
                  time;
                </li>
                <li> potential for impact.</li>
              </ol>
            </li>
            <li style={{ visibility: "hidden" }} className="hidden_list_item">
              An essay will be judged based on the following criteria:
              <ol type="a" className="os_ol">
                <li>
                  clarity, scope and relevance of the problem and the proposed
                </li>
                <li>Innovation and originality;</li>
                <li>
                  feasibility of implementation and whether it is sustainable in
                </li>
              </ol>
            </li>
          </ol>
        </div>
      </section>

      <section className={styles.submission_section}>
        <h3 className="section_title">Submission Instructions</h3>
        <div className={styles.submission_container}>
          <div className={styles.submission_card}>
            <h4>
              Applicant Profile <CgProfile />
            </h4>
            <p>
              The Competition is open to individuals aged 18 to 30, irrespective
              of education, gender, or political persuasion. It is open to
              nationals or residents of Africa.
            </p>
          </div>
          <div className={styles.submission_card}>
            <h4>
              Essay Limit <TfiWrite />
            </h4>
            <p>
              Essay must not exceed more than 3000 words, including all texts,
              titles, headings, tables, footnotes, endnotes, references, annexes
              etc.
            </p>
          </div>
          <div className={styles.submission_card}>
            <h4>
              Submission Instruction <BsClipboard2Check />
            </h4>
            <p>
              Please send your essay ( in a pdf format) by 31st January 2024
              11:59 GMT to:
              <br />
              Email - hello@aiesecgh.net Cc - <br />
              adeyemi@aiesecgh.net
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Page;

const headerimages: StaticImageData[] = [HeaderImg1, HeaderImg2, HeaderImg3];
