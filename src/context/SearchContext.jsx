import { createContext, useState } from "react";

const SearchContext = createContext({
  search: { where: "", when: "", who: "" },
  setSearch: () => undefined,
});

export const SearchContextProvider = ({ children }) => {
  const [search, setSearch] = useState({
    where: "",
    when: "",
    who: "",
  });

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;
