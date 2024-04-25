import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./Footer";
import Hero from "../components/Hero";

// Component for site layout
export default function Layout() {
  return (
    <>
      <div className="site-wrapper">
        <Header />
        <Hero />
        <main>
          {/* Outlet changes depending on the route */}
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}
