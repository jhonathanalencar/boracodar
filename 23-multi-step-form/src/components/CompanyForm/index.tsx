import { FormEvent } from "react";

import { useFormContext } from "../../hooks/useFormContext";

import { Form } from "../Form";
import { FormInput } from "../FormInput";

export function CompanyForm() {
  const { formState, handleOnChange, handleNextStep } = useFormContext();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const isCompanyNameValid = formState.companyName.trim().length > 0;
    const isEmployeesAmountValid = formState.employeesAmount > 0;
    const isCompanyDescriptionValid =
      formState.companyDescription.trim().length > 0;

    const isValid =
      isCompanyNameValid && isEmployeesAmountValid && isCompanyDescriptionValid;

    if (isValid) {
      handleNextStep();
    }
  }

  return (
    <Form id="company" onSubmit={handleSubmit}>
      <FormInput.Root>
        <FormInput.Label htmlFor="companyName">Nome da empresa</FormInput.Label>
        <FormInput.Input
          type="text"
          id="companyName"
          name="companyName"
          placeholder="Qual é o nome da empresa"
          required
          value={formState.companyName}
          onChange={handleOnChange}
        />
      </FormInput.Root>

      <FormInput.Root>
        <FormInput.Label htmlFor="employeesAmount">
          Número de funcionários
        </FormInput.Label>
        <FormInput.Input
          type="number"
          id="employeesAmount"
          name="employeesAmount"
          placeholder="Digite o número de colaboradores"
          required
          value={formState.employeesAmount}
          onChange={handleOnChange}
        />
      </FormInput.Root>

      <FormInput.Root>
        <FormInput.Label htmlFor="companyDescription">
          Sobre seu negócio
        </FormInput.Label>
        <FormInput.Input asChild>
          <textarea
            id="companyDescription"
            name="companyDescription"
            placeholder="Fale um pouco sobre seus produtos ou serviços"
            required
            value={formState.companyDescription}
            onChange={handleOnChange}
          />
        </FormInput.Input>
      </FormInput.Root>
    </Form>
  );
}
