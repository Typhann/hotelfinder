import { Outlet, useLocation } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./Footer";
import Hero from "../components/Hero";

// Component for site layout
export default function Layout() {
  const location = useLocation();
  const isFrontPage = location.pathname === "/";
  return (
    <>
      <div className="site-wrapper">
        <Header />
        {isFrontPage && <Hero />}
        <main className={isFrontPage ? "hero-margin" : ""}>
          {/* Outlet changes depending on the route */}
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}
