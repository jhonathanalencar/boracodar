import { PortionsButtons } from "../PortionsButtons";

import styles from "./styles.module.css";

interface RecipeProps {
  name: string;
  description: string;
  imageUrl: string;
}

export function Recipe({ name, description, imageUrl }: RecipeProps) {
  return (
    <div className={styles.recipe}>
      <img src={imageUrl} alt={description} />
      <div className={styles.recipeDescription}>
        <h1>{name}</h1>
        <p>{description}</p>

        <div className={styles.recipeAmount}>
          <span>Porções</span>
          <PortionsButtons />
        </div>
      </div>
    </div>
  );
}
