import { Check } from "@phosphor-icons/react";
import { useFormContext } from "../../hooks/useFormContext";

import styles from "./styles.module.css";

interface StepProps {
  order: number;
  title: string;
}

export function Step({ order, title }: StepProps) {
  const { activeStep, changeActiveStepOnClick } = useFormContext();

  const isActive = activeStep === order;
  const isCompleted = activeStep > order;

  const activeClasses = isActive ? styles.active : "";
  const completedClasses = isCompleted ? styles.completed : "";
  const buttonClasses = `${styles.step} ${activeClasses} ${completedClasses}`;

  return (
    <button
      className={buttonClasses}
      onClick={() => changeActiveStepOnClick(order)}
    >
      {isCompleted ? (
        <span className={styles.stepCircle}>
          <Check weight="bold" />
        </span>
      ) : (
        <span className={styles.stepCircle}>{order}</span>
      )}
      <span className={styles.stepText}>{title}</span>
    </button>
  );
}
