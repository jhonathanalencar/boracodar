import { useFormContext } from "../../hooks/useFormContext";

import { Button } from "../Button";

import styles from "./styles.module.css";

const formIds: { [key: number]: string } = {
  1: "contact",
  2: "company",
  3: "project",
};

export function NavButtons() {
  const { activeStep, canNextStep, canPreviousStep, handlePreviousStep } =
    useFormContext();

  return (
    <div className={styles.buttonsWrapper}>
      {activeStep !== 1 ? (
        <Button
          variant="outline"
          onClick={handlePreviousStep}
          disabled={canPreviousStep}
        >
          Voltar
        </Button>
      ) : null}

      {activeStep === Object.keys(formIds).length ? (
        <Button type="submit" form={formIds[activeStep]}>
          Enviar Proposta
        </Button>
      ) : (
        <Button type="submit" form={formIds[activeStep]} disabled={canNextStep}>
          Continuar
        </Button>
      )}
    </div>
  );
}
