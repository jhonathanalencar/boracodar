import { FormEvent } from "react";

import { useFormContext } from "../../hooks/useFormContext";

import { Form } from "../Form";
import { FormInput } from "../FormInput";

const EMAIL_PATTERN = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
const PHONE_PATTERN = /(?:^\([0]?[1-9]{2}\)|^[0]?[1-9]{2})[9]?[1-9]\d{3}\d{4}$/;

export function ContactForm() {
  const { handleOnChange, handleNextStep, formState } = useFormContext();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const isValidName = formState.name.trim().length > 0;
    const isValidEmail = EMAIL_PATTERN.test(formState.email);
    const isValidPhone = PHONE_PATTERN.test(formState.phone);

    const isValid = isValidName && isValidEmail && isValidPhone;

    if (isValid) {
      handleNextStep();
    }
  }

  return (
    <Form id="contact" onSubmit={handleSubmit}>
      <FormInput.Root>
        <FormInput.Label htmlFor="name">Nome</FormInput.Label>
        <FormInput.Input
          type="text"
          id="name"
          name="name"
          value={formState.name}
          placeholder="Como prefere ser chamado"
          onChange={handleOnChange}
          required
        />
      </FormInput.Root>
      <FormInput.Root>
        <FormInput.Label htmlFor="phone">Telefone</FormInput.Label>
        <FormInput.Input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Digite seu número de WhatsApp"
          value={formState.phone}
          onChange={handleOnChange}
          required
        />
      </FormInput.Root>
      <FormInput.Root>
        <FormInput.Label htmlFor="email">E-mail</FormInput.Label>
        <FormInput.Input
          type="email"
          id="email"
          name="email"
          placeholder="Digite seu e-mail"
          value={formState.email}
          onChange={handleOnChange}
          required
        />
      </FormInput.Root>
    </Form>
  );
}
