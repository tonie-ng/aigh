import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./stayconnected.module.css";

export function SubmitBtn({
  error,
  success,
	pending,
}: {
  error: boolean;
  success: boolean;
	pending: boolean
}) {

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
        "Retry"
      ) : success ? (
        "Successful!"
      ) : (
        "Subscribe"
      )}
    </button>
  );
}
