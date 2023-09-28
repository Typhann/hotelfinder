import { createContext, useState } from "react";

const SearchContext = createContext({
  search: { where: "", when: "", rooms: [] },
  setSearch: () => undefined,
});

export const SearchContextProvider = ({ children }) => {
  const [search, setSearch] = useState({
    where: "",
    when: "",
    rooms: [{ adults: 0, children: 0, pets: 0 }],
  });

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;
