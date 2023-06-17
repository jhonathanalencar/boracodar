import { ReactNode } from "react";
import styles from "./App.module.css";

import { CompanyForm } from "./components/CompanyForm";
import { ContactForm } from "./components/ContactForm";
import { NavButtons } from "./components/NavButtons";
import { ProjectForm } from "./components/ProjectForm";
import { Steps } from "./components/Steps";
import { useFormContext } from "./hooks/useFormContext";

export function App() {
  const content: { [key: number]: ReactNode } = {
    1: <ContactForm />,
    2: <CompanyForm />,
    3: <ProjectForm />,
  };

  const { activeStep } = useFormContext();

  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <Steps />

        <div className={styles.divisor} />

        {content[activeStep]}

        <NavButtons />
      </div>
    </main>
  );
}
