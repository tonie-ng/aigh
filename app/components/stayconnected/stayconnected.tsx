"use client";

import React, { useState } from "react";
import styles from "./stayconnected.module.css";
import { SubmitBtn } from "./submitbtn";
import { SubmitHandler, useForm } from "react-hook-form";

type Input = {
	email: string
}
function StayConnected() {
  const [error, setError] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

	const {
		register,
		reset,
		handleSubmit,
		formState: {errors, isSubmitting}
	} = useForm<Input>()

	const processForm: SubmitHandler<Input> = async(data) => {
		const res = await fetch("/api/newsletter", {
      cache: "no-store",
      method: "POST",
      mode: "same-origin",
			body: JSON.stringify(data) 
		});

		if (res.status != 201) {
			setError(true);
			reset();
		} else {
			setSuccess(true);
			reset();
		}
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
						onSubmit={handleSubmit(processForm)}
            className={styles.subscribe_form}
          >
            <input
              type="email"
              required
              placeholder="hello@aiesecgh.net"
							{...register("email")}
            />
            <SubmitBtn error={error} success={success} pending={isSubmitting}/>
          </form>
        </div>
      </div>
    </section>
  );
}

export default StayConnected;
