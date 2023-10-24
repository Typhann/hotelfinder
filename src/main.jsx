import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { SearchContextProvider } from "./context/SearchContext.jsx";
import { AuthenticatedContextProvider } from "./context/AuthenticatedContext.jsx";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

// LocalizationProvider context is needed for DateCalendar in When component
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <AuthenticatedContextProvider>
        <SearchContextProvider>
          <App />
        </SearchContextProvider>
      </AuthenticatedContextProvider>
    </LocalizationProvider>
  </React.StrictMode>
);
