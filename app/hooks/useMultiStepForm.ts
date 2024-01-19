"use client";

import { Inputs } from "@/lib/schema";
import { ReactElement, useState } from "react";
import {
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormTrigger,
} from "react-hook-form";

type FieldName = keyof Inputs;
const individualsteps = [
  { fields: ["fullname", "gender", "email", "phonenumber"] },
  { fields: ["dateofbirth", "nationality", "university", "course"] },
  { fields: ["yearofstudy", "employmentstatus"] },
];

export function useMultiStepForm(
  steps: ReactElement[],
  trigger: UseFormTrigger<Inputs>,
  handleSubmit: UseFormHandleSubmit<Inputs>,
  processForm: SubmitHandler<Inputs>
) {
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);

  async function next() {
    const fields = individualsteps[currentStepIndex].fields;

    const output = await trigger(fields as FieldName[], { shouldFocus: true });

    if (!output) return;

    if (currentStepIndex <= steps.length - 1) {
      if (currentStepIndex == steps.length - 1) {
        await handleSubmit(processForm)();
        setCurrentStepIndex(0);
        return;
      }
      setCurrentStepIndex((i) => i + 1);
    }
  }

  function back() {
    setCurrentStepIndex((i) => {
      if (i <= 0) return i;
      return i - 1;
    });
  }

  function goTo(index: number) {
    setCurrentStepIndex(index);
  }

  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    steps,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
    goTo,
    next,
    back,
  };
}
