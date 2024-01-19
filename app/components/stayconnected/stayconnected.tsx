import SubscribeBackground from "@/public/subscribebg.png";
import React from "react";
import styles from "./stayconnected.module.css";
import { SubmitBtn } from "./submitbtn";

function StayConnected() {
  const subscribe = async (formData: FormData) => {
    "use server";

    const email = formData.get("email");
    console.log(email);
  };
  return (
    <section className={styles.stayconnected_section}>
      <h3 className="section_title">Stay Connected</h3>
      <div className={styles.stayconected_bottom}>
        <div className={styles.subscribe_container}>
          <p>
            Get refreshing updates on recruitment and opportunity programs that
            aligns with your interest.
          </p>
          <form
            action={subscribe}
            className={styles.subscribe_form}
            name="subsribe"
          >
            <input
              type="email"
              name="email"
              id=""
              required
              placeholder="claraezejitu@gmail.com"
            />
            <SubmitBtn />
          </form>
        </div>
      </div>
    </section>
  );
}

export default StayConnected;
