import { useLocation } from "react-router-dom";
import { renderHotels } from "../../utils";
import FilterSection from "../components/FilterButtons";

export default function SearchResult() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const search = queryParams.get("q");

  return (
  <>  
    <FilterSection />
    {renderHotels(search, "grid")}
  </>);
}
