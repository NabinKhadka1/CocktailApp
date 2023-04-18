import { useContext } from "react";
import { contextApi } from "../context";

const SearchForm = () => {
  const { searchText, setSearchText } = useContext(contextApi);
  return (
    <section className="search-section">
      <form className="search__form">
        <label htmlFor="searchCocktail">Search your favourite cocktail</label>
        <input
          type="text"
          id="searchCocktail"
          value={searchText}
          onChange={(e)=>setSearchText(e.target.value)}
        />
      </form>
    </section>
  );
};
export default SearchForm;
