import { useContext } from "react";
import { useParams } from "react-router-dom";
import { contextApi } from "../context";
import { Link } from "react-router-dom";
const Cocktail = () => {
  const { drinks } = useContext(contextApi);
  const { cocktailId } = useParams();

  const findCocktail = drinks.find((drink) => drink.idDrink === cocktailId);
  if (!findCocktail) {
    return (
      <section>
        <h2 className="info__center">No cocktails found.</h2>
      </section>
    );
  }
  if (findCocktail) {
    return (
      <article className="cocktail__details" key={findCocktail.idDrink}>
        <div className="card__container">
          <img src={findCocktail.strDrinkThumb} alt="mojito" />
          <div className="card__info">
            <p>
              <span className="card__infoDetail">Name:</span>
              {findCocktail.strDrink}
            </p>
            <p>
              <span className="card__infoDetail">Category:</span>
              {findCocktail.strCategory}
            </p>
            <p>
              <span className="card__infoDetail">Glass:</span>
              {findCocktail.strGlass}
            </p>
            <p>
              <span className="card__infoDetail">Info:</span>
              {findCocktail.strAlcoholic}
            </p>
            <p>
              <span className="card__infoDetail">Instructions:</span>
              {findCocktail.strInstructions}
            </p>
            <p>
              <span className="card__infoDetail">Ingredients:</span>
              {findCocktail.strIngredient1}, {findCocktail.strIngredient2},
              {findCocktail.strIngredient3}
            </p>
            <p className="backHome">
              <Link to="/">Back to Home</Link>
            </p>
          </div>
        </div>
      </article>
    );
  }
};
export default Cocktail;
