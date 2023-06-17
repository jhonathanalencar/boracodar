import {
  HTMLAttributes,
  InputHTMLAttributes,
  LabelHTMLAttributes,
  ReactNode,
} from "react";
import { Slot } from "@radix-ui/react-slot";

import styles from "./styles.module.css";

interface FormInputRootProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

function FormInputRoot({ children, ...props }: FormInputRootProps) {
  return (
    <div className={styles.container} {...props}>
      {children}
    </div>
  );
}

interface FormInputLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
}

function FormInputLabel({ children, ...props }: FormInputLabelProps) {
  return (
    <label className={`${styles.label} text-bold`} {...props}>
      {children}
    </label>
  );
}

interface FormInputInputProps extends InputHTMLAttributes<HTMLInputElement> {
  asChild?: boolean;
}

function FormInputInput({ asChild = false, ...props }: FormInputInputProps) {
  const Comp = asChild ? Slot : "input";

  return <Comp {...props} className={`${styles.input} text-regular`} />;
}

export const FormInput = {
  Root: FormInputRoot,
  Label: FormInputLabel,
  Input: FormInputInput,
};
