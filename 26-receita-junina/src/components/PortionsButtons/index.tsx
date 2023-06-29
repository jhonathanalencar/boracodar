import { useState } from "react";
import styles from "./styles.module.css";

export function PortionsButtons() {
  const [portionsAmount, setPortionsAmount] = useState(1);

  function handleIncreasePortionsAmount() {
    if (portionsAmount === 99) return;

    setPortionsAmount((prev) => prev + 1);
  }

  function handleDecreasePortionsAmount() {
    if (portionsAmount === 1) return;

    setPortionsAmount((prev) => prev - 1);
  }

  return (
    <div className={styles.buttonsWrapper}>
      <button type="button" onClick={handleDecreasePortionsAmount}>
        <span>-</span>
      </button>
      <span>{String(portionsAmount).padStart(2, "0")}</span>
      <button type="button" onClick={handleIncreasePortionsAmount}>
        <span>+</span>
      </button>
    </div>
  );
}
