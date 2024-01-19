"use client";

import { useFormStatus } from "react-dom";
import styles from "./stayconnected.module.css";

export function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" aria-disabled={pending} className={styles.submit_btn}>
      Subscribe
    </button>
  );
}
