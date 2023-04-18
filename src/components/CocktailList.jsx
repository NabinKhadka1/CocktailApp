import { contextApi } from "../context";
import { useContext } from "react";
import { Link } from "react-router-dom";

const CocktailList = () => {
  const { drinks, loading } = useContext(contextApi);
  if (loading) {
    return <h2 className="info__center">Loading...</h2>;
  }
  if (drinks.length < 1) {
    return (
      <section>
        <h2 className="info__center">No cocktails found.</h2>
      </section>
    );
  }
  return (
    <section className="cocktails">
      <h4>Cocktails</h4>
      <div className="cocktails__list">
        <div className="cocktails__center">
          {drinks.map((drink) => (
            <article className="cocktail__info" key={drink.idDrink}>
              <div className="image__container">
                <img src={drink.strDrinkThumb} alt={drink.strDrink} />
              </div>
              <div className="footer__container">
                <h3>{drink.strDrink}</h3>
                <h4>{drink.strGlass}</h4>
                <p>{drink.strAlcoholic}</p>
                <Link to={`cocktail/${drink.idDrink}`}>Details</Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
export default CocktailList;
