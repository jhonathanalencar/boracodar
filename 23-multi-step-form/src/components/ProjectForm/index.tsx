import { FormEvent } from "react";

import { useFormContext } from "../../hooks/useFormContext";

import { Form } from "../Form";
import { FormInput } from "../FormInput";

export function ProjectForm() {
  const { formState, handleOnChange } = useFormContext();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const isProjectPurposeValid = formState.projectPurpose.trim().length > 0;

    const isValid = isProjectPurposeValid;

    if (isValid) {
      alert("Proposta enviada");
    }
  }

  return (
    <Form id="project" onSubmit={handleSubmit}>
      <FormInput.Root>
        <FormInput.Label htmlFor="projectPurpose">
          Objetivos do projeto
        </FormInput.Label>
        <FormInput.Input asChild>
          <textarea
            id="projectPurpose"
            name="projectPurpose"
            placeholder="Descreva quais os objetivos desse projeto"
            required
            value={formState.projectPurpose}
            onChange={handleOnChange}
          />
        </FormInput.Input>
      </FormInput.Root>
    </Form>
  );
}
