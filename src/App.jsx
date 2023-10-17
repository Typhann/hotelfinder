import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "./components/Layout";
import AuthRequired from "./components/AuthRequired";
import Home from "./pages/Home";
import Hotel from "./pages/Hotel";
import SearchResult from "./pages/SearchResult";
import Favorites from "./pages/Favorites";
import Checkout from "./pages/Checkout";
import "./styles/index.css";
import Register from "./components/Register";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="hotel/:id" element={<Hotel />} />
      <Route path="search" element={<SearchResult />} />
      <Route path="favorites" element={<Favorites />} />
      <Route path="register" element={<Register />} />
      <Route element={<AuthRequired />}>
    </Route>
      <Route path="checkout/hotel/:id" element={<Checkout />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
