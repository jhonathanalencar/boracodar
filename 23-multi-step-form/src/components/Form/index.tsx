import { FormHTMLAttributes, ReactNode } from "react";

import styles from "./styles.module.css";

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
}

export function Form({ children, ...props }: FormProps) {
  return (
    <form {...props} className={styles.form}>
      {children}
    </form>
  );
}
