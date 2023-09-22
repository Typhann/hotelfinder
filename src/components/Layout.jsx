import { Outlet } from "react-router-dom";
import WorldMap from "./WorldMap";

export default function Layout() {
  return (
    <>
      {/* <h1>Header 1</h1>
      <h2>Header 2</h2>
      <h3>Header 3</h3>
      <p>Text</p>
      <p>
        <small>small</small>
      </p>
      <p>
        <strong>Strong</strong>
      </p>
      <a href="#">Link</a>
      <button>Log in</button>
      <WorldMap /> */}
      <Outlet />
    </>
  );
}
