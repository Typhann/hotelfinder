import Search from "./header/search/Search";
import { useState, useEffect } from "react";

export default function Hero() {
  const [mobile, setMobile] = useState(window.innerWidth < 968);

  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth < 968);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the event listener when component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount
  return (
    <div className="hero">
      <div>
        <h2>Find Hotels With Ease</h2>
        <div>{mobile && <Search />}</div>
        {!mobile && (
          <a href="#popular-destinations" className="button">
            Explore Destinations
          </a>
        )}
      </div>
    </div>
  );
}
