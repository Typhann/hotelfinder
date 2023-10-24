import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./Footer";

export default function Layout() {
  return (
    <>
      <div className="site-wrapper">
        <Header />
        <main>
          {/* Outlet changes depending on the route */}
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}
