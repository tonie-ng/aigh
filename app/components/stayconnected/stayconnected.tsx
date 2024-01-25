import SubscribeBackground from "@/public/subscribebg.png";
import React from "react";
import styles from "./stayconnected.module.css";
import { SubmitBtn } from "./submitbtn";

function StayConnected() {
  const subscribe = async (formData: FormData) => {
    "use server";

    const email = formData.get("email");

    const data: { email: FormDataEntryValue | null } = {
      email,
    };

    const res = await fetch("https://aiesecgh.net/api/newsletter", {
      cache: "no-store",
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify(data),
    });
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
              placeholder="hello@aiesecgh.net"
            />
            <SubmitBtn />
          </form>
        </div>
      </div>
    </section>
  );
}

export default StayConnected;
