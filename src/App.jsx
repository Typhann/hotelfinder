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
import Favorites from "./pages/Favorites";
import Checkout from "./pages/Checkout";
import "./styles/index.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="hotel/:id" element={<Hotel />} />
      <Route element={<AuthRequired />}>
        <Route path="favorites" element={<Favorites />} />
      </Route>
      <Route path="checkout" element={<Checkout />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
