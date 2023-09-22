import { Outlet } from "react-router-dom";
import WorldMap from "./WorldMap";
import Header from "./Header";

export default function Layout() {
  return (
    <>
      <div className="site-wrapper">
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
}
