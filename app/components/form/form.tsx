"use client";
import { useMultiStepForm } from "@/app/hooks/useMultiStepForm";
import { FormDataSchema, Inputs } from "@/lib/schema";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import styles from "./form.module.css";
import { FirstForm, SecondForm, ThirdForm } from "./forms";

function Form() {
  const {
    register,
    handleSubmit,
    reset,
    trigger,

    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<Inputs>({ resolver: zodResolver(FormDataSchema) });

  let submiterror: boolean = false;
  const processForm: SubmitHandler<Inputs> = async (data) => {
    const res = await fetch("/api/membership", {
      cache: "no-store",
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify(data),
    });

    if (res.status != 201) {
      submiterror = true;
      reset();
      return;
    }
    reset();
  };

  const { steps, currentStepIndex, step, isFirstStep, back, isLastStep, next } =
    useMultiStepForm(
      [
        <FirstForm key={0} register={register} errors={errors} />,
        <SecondForm key={1} register={register} errors={errors} />,
        <ThirdForm key={2} register={register} errors={errors} />,
      ],
      trigger,
      handleSubmit,
      processForm
    );

  return (
    <form
      onSubmit={handleSubmit(processForm)}
      className={styles.form_component}
    >
      <div className={styles.form_top}>
        <h3
          className={styles.form_header}
          style={{
            color: submiterror ? "red" : isSubmitSuccessful ? "green" : "black",
          }}
        >
          {submiterror
            ? "An error occured, please try again"
            : isSubmitSuccessful
            ? "Thank you! We'll be in touch soon."
            : "Membership Registration"}
        </h3>

        <span className={styles.form_index}>
          {currentStepIndex + 1}/{steps.length}{" "}
        </span>
      </div>
      {step}
      <div className={styles.form_end}>
        <button
          onClick={back}
          type="button"
          className={isFirstStep ? styles.form_prev_none : styles.form_prev}
        >
          Prev
        </button>
        <button
          disabled={isSubmitting}
          type="button"
          className={styles.form_next}
          onClick={next}
        >
          {isSubmitting ? (
            <FontAwesomeIcon icon={faSpinner} />
          ) : isLastStep ? (
            "Submit"
          ) : (
            "Next"
          )}
        </button>
      </div>
    </form>
  );
}

export default Form;
