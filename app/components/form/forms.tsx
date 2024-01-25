"use client";

import { Inputs } from "@/lib/schema";
import React from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import styles from "./form.module.css";

type FormProps = {
  register: UseFormRegister<Inputs>;
  errors: FieldErrors<Inputs>;
};

export function FirstForm({ register, errors }: FormProps) {
  return (
    <div className={styles.form_wrapper}>
      <div className={styles.form_input}>
        {errors.root?.message}
        <label>Full Name</label>
        <input
          type="text"
          autoFocus
          placeholder="John Doe"
          {...register("fullname")}
        />
        <p style={{ color: "red", fontSize: "0.8rem" }}>
          {errors.fullname?.message}
        </p>
      </div>

      <div className={styles.form_input}>
        <label>Email Address</label>
        <input
          type="text"
          placeholder="hello@aiesecgh.net"
          {...register("email")}
        />
        <p style={{ color: "red", fontSize: "0.8rem" }}>
          {errors.email?.message}
        </p>
      </div>

      <div className={styles.form_input}>
        <label>Gender</label>
        <select {...register("gender")}>
          <option value="">Choose an option</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="prefer not to speak">Prefer not to speak</option>
        </select>
        <p style={{ color: "red", fontSize: "0.8rem" }}>
          {errors.gender?.message}
        </p>
      </div>

      <div className={styles.form_input}>
        <label>Phone Number</label>
        <input
          type="tel"
          placeholder="2238308323"
          minLength={11}
          maxLength={15}
          {...register("phonenumber")}
        />
        <p style={{ color: "red", fontSize: "0.8rem" }}>
          {errors.phonenumber?.message}
        </p>
      </div>
    </div>
  );
}

export function SecondForm({ register, errors }: FormProps) {
  return (
    <div className={styles.form_wrapper}>
      <div className={styles.form_input}>
        <label>Date of Birth</label>
        <input
          autoFocus
          type="date"
          placeholder="21-05-2023"
          {...register("dateofbirth")}
        />
        <p style={{ color: "red", fontSize: "0.8rem" }}>
          {errors.dateofbirth?.message}
        </p>
      </div>

      <div className={styles.form_input}>
        <label>Nationality</label>
        <input
          type="text"
          placeholder="Ghanaian"
          {...register("nationality")}
        />
        <p style={{ color: "red", fontSize: "0.8rem" }}>
          {errors.nationality?.message}
        </p>
      </div>

      <div className={styles.form_input}>
        <label>University</label>
        <input
          type="text"
          placeholder="Accra University"
          {...register("university")}
        />
        <p style={{ color: "red", fontSize: "0.8rem" }}>
          {errors.university?.message}
        </p>
      </div>

      <div className={styles.form_input}>
        <label>Course of Study</label>
        <input
          type="text"
          placeholder="Computer Science"
          {...register("course")}
        />
        <p style={{ color: "red", fontSize: "0.8rem" }}>
          {errors.course?.message}
        </p>
      </div>
    </div>
  );
}

export function ThirdForm({ register, errors }: FormProps) {
  return (
    <div className={styles.form_wrapper}>
      <div className={styles.form_input}>
        <label>Year of Study</label>
        <input
          autoFocus
          type="number"
          placeholder="2"
          min="1"
          {...register("yearofstudy")}
        />
        <p style={{ color: "red", fontSize: "0.8rem" }}>
          {errors.yearofstudy?.message}
        </p>
      </div>

      <div className={styles.form_input}>
        <label>Employment status</label>
        <select {...register("employmentstatus")}>
          <option value="">Please select an option</option>
          <option value="employed">Employed</option>
          <option value="unemployed">Unemployed</option>
          <option value="student">Student</option>
        </select>
        <p style={{ color: "red", fontSize: "0.8rem" }}>
          {errors.employmentstatus?.message}
        </p>
      </div>

      <div className={styles.form_input}>
        <label>How did you hear about AIESEC ?</label>
        <textarea
          rows={10}
          {...register("note")}
          placeholder="Note..."
        ></textarea>
        <p style={{ color: "red", fontSize: "0.8rem" }}>
          {errors.note?.message}
        </p>
      </div>
    </div>
  );
}
