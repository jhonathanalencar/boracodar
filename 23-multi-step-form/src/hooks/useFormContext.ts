import { useContext } from "react";

import { FormContext } from "../contexts/FormContext";

export function useFormContext() {
  return useContext(FormContext);
}
