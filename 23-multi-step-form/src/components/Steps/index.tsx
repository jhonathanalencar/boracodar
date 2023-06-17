import styles from "./styles.module.css";

import { Step } from "../Step";
import { steps } from "../../constants/steps";

export function Steps() {
  return (
    <div className={styles.steps}>
      {steps.map((step) => {
        return <Step key={step.order} order={step.order} title={step.title} />;
      })}
    </div>
  );
}
