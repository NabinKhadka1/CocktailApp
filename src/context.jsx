import { createContext, useEffect, useState, useCallback } from "react";
import axios from "axios";

const contextApi = createContext();

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const ContextProvider = ({ children }) => {
  const [drinks, setDrinks] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchApi = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${url}${searchText}`);
      const data = await response.data;
      if (data.drinks) {
        setDrinks(data.drinks);
      } else {
        setDrinks([]);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }, [searchText]);
  useEffect(() => {
    fetchApi();
  }, [searchText, fetchApi]);
  return (
    <contextApi.Provider value={{ drinks, loading, searchText, setSearchText }}>
      {children}
    </contextApi.Provider>
  );
};

export { contextApi, ContextProvider };
