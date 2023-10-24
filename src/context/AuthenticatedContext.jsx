import { createContext, useState } from "react";

// Creates context for the login. The context is used to check if the person is logged in or not and is being used by the AuthRequired component to provide Favorites as a protected route and to allowed logged in users to see their profile.
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
