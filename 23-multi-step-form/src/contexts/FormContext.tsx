import { ChangeEvent, ReactNode, createContext, useState } from "react";

import { steps } from "../constants/steps";

interface FormState {
  name: string;
  phone: string;
  email: string;
  companyName: string;
  employeesAmount: number;
  companyDescription: string;
  projectPurpose: string;
}

interface FormContextData {
  activeStep: number;
  canNextStep: boolean;
  canPreviousStep: boolean;
  formState: FormState;
  handleNextStep: () => void;
  handlePreviousStep: () => void;
  changeActiveStepOnClick: (step: number) => void;
  handleOnChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

interface FormContextProviderProps {
  children: ReactNode;
}

const EMAIL_PATTERN = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
const PHONE_PATTERN = /(?:^\([0]?[1-9]{2}\)|^[0]?[1-9]{2})[9]?[1-9]\d{3}\d{4}$/;

export const FormContext = createContext({} as FormContextData);

export function FormContextProvider({ children }: FormContextProviderProps) {
  const [activeStep, setActiveStep] = useState(1);
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
    companyName: "",
    employeesAmount: 0,
    companyDescription: "",
    projectPurpose: "",
  } as FormState);

  const stepsAmount = steps.length;

  const canNextStep = activeStep >= stepsAmount;

  const canPreviousStep = activeStep === 1;

  function handleNextStep() {
    setActiveStep((prev) => prev + 1);
  }

  function handlePreviousStep() {
    setActiveStep((prev) => prev - 1);
  }

  function changeActiveStepOnClick(step: number) {
    if (step > stepsAmount || step < 1) return;

    switch (step) {
      case 1: {
        setActiveStep(step);
        break;
      }
      case 2: {
        const isValidName = formState.name.trim().length > 0;
        const isValidEmail = EMAIL_PATTERN.test(formState.email);
        const isValidPhone = PHONE_PATTERN.test(formState.phone);

        const isValid = isValidName && isValidEmail && isValidPhone;

        if (isValid) {
          setActiveStep(step);
        }
        break;
      }
      case 3: {
        const isCompanyNameValid = formState.companyName.trim().length > 0;
        const isEmployeesAmountValid = formState.employeesAmount > 0;
        const isCompanyDescriptionValid =
          formState.companyDescription.trim().length > 0;

        const isValid =
          isCompanyNameValid &&
          isEmployeesAmountValid &&
          isCompanyDescriptionValid;

        if (isValid) {
          setActiveStep(step);
        }
        break;
      }
      default: {
        return;
      }
    }
  }

  function updateFormState(data: Partial<FormState>) {
    setFormState((prev) => ({ ...prev, ...data }));
  }

  function handleOnChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const name = e.target.name;
    const value = e.target.value;

    const data = {
      [name]: value,
    };

    updateFormState(data);
  }

  return (
    <FormContext.Provider
      value={{
        formState,
        activeStep,
        canNextStep,
        canPreviousStep,
        handleOnChange,
        handleNextStep,
        handlePreviousStep,
        changeActiveStepOnClick,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}
