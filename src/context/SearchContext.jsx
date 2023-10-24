import { createContext, useState } from "react";

// creates and sets up context for the search functionality that is used for the checkout process.
// Context is being set by the Search component and the ReservationForm component.
const SearchContext = createContext({
  search: {
    where: "",
    when: "",
    rooms: [],
    roomsNextToEachOther: false,
    totalPrice: 0,
    reservedRooms: [],
    displayModal: [],
  },
  setSearch: () => undefined,
});

export const SearchContextProvider = ({ children }) => {
  // initialized context values
  const [search, setSearch] = useState({
    where: "",
    when: "",
    rooms: [{ adults: 0, children: 0, pets: 0 }],
    roomsNextToEachOther: false,
    totalPrice: 0,
    reservedRooms: [],
    displayModal: "",
  });

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;
