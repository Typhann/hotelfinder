import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./Footer";

// Component for site layout
export default function Layout() {
  return (
    <>
      <div className="site-wrapper">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}
