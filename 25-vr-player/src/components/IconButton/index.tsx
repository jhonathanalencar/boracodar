import { ButtonHTMLAttributes } from "react";

import styles from "./IconButton.module.css";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: JSX.Element;
}

export function IconButton({ icon, ...rest }: IconButtonProps) {
  return (
    <button type="button" className={styles.button} {...rest}>
      {icon}
    </button>
  );
}
