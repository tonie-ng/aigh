"use client";

import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFormStatus } from "react-dom";
import styles from "./stayconnected.module.css";

export function SubmitBtn({
  error,
  success,
}: {
  error: boolean;
  success: boolean;
}) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      aria-disabled={pending}
      className={styles.submit_btn}
      style={{
        backgroundColor: error ? "red" : success ? "green" : "#037ef3",
      }}
    >
      {pending ? (
        <FontAwesomeIcon icon={faSpinner} />
      ) : error ? (
        "Error"
      ) : success ? (
        "Successful!"
      ) : (
        "Subscribe"
      )}
    </button>
  );
}
