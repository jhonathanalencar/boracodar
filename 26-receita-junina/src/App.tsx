import styles from "./App.module.css";

import { recipes } from "./constants/data";
import { Recipe } from "./components/Recipe";
import { RecipeInstructions } from "./components/RecipeInstructions";

export function App() {
  const pamonha = recipes[0];

  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <Recipe
          name={pamonha.name}
          description={pamonha.description}
          imageUrl={pamonha.imageUrl}
        />

        <RecipeInstructions
          ingredients={pamonha.ingredients}
          methodSteps={pamonha.howToMake}
        />
      </div>
    </main>
  );
}
