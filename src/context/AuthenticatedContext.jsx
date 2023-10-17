import { createContext, useState } from "react";

const AuthenticatedContext = createContext({
  authenticated: false,
  setAuthenticated: () => {},
});

export const AuthenticatedContextProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <AuthenticatedContext.Provider value={{ authenticated, setAuthenticated }}>
      {children}
    </AuthenticatedContext.Provider>
  );
};

export default AuthenticatedContext;
