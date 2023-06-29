import potIcon from "../../assets/pot.svg";
import groceryBasketIcon from "../../assets/grocery-basket.svg";

import styles from "./styles.module.css";

interface RecipeInstructionsProps {
  ingredients: string[];
  methodSteps: string[];
}

export function RecipeInstructions({
  ingredients,
  methodSteps,
}: RecipeInstructionsProps) {
  return (
    <div className={styles.recipeInstructions}>
      <div className={styles.recipeIngredients}>
        <h2 className={styles.listTitle}>
          <img src={groceryBasketIcon} alt="Grocery Basket Icon" /> Ingredientes
        </h2>
        <ul className={styles.list}>
          {ingredients.map((ingredient, index) => {
            return <li key={`${index}-${ingredient}`}>{ingredient}</li>;
          })}
        </ul>
      </div>
      <div className={styles.recipeHowToMake}>
        <h2 className={styles.listTitle}>
          <img src={potIcon} alt="Pot Icon" /> Modo de preparo
        </h2>
        <ol className={styles.list}>
          {methodSteps.map((step, index) => {
            return <li key={`${index}-${step}`}>{step}</li>;
          })}
        </ol>
      </div>
    </div>
  );
}
