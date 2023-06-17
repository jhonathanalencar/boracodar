import { ButtonHTMLAttributes, ReactNode } from "react";

import styles from "./styles.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "solid" | "outline";
}

export function Button({ children, variant = "solid", ...props }: ButtonProps) {
  const buttonTypeClass = variant === "solid" ? styles.solid : styles.outline;

  return (
    <button
      className={`${styles.button} ${buttonTypeClass} text-bold`}
      {...props}
    >
      {children}
    </button>
  );
}
