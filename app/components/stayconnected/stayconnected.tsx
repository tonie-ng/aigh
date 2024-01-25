"use client";
import React, { useState } from "react";
import { subscribe } from "./actions";
import styles from "./stayconnected.module.css";
import { SubmitBtn } from "./submitbtn";

function StayConnected() {
  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  async function onSubscribe(formData: FormData) {
    const res = await subscribe(formData);
    setMessage(res.message);
    setError(res.error);
    setSuccess(res.success);
    const formElement = document.forms[0];
    formElement.reset();
  }
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
            action={onSubscribe}
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
            <SubmitBtn error={error} success={success} />
          </form>
        </div>
      </div>
    </section>
  );
}

export default StayConnected;
