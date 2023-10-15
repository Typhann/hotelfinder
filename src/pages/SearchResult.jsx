import { useLocation } from "react-router-dom";
import { renderHotels } from "../../utils";
import Filter from "../components/Filter";

export default function SearchResult() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const search = queryParams.get("q");

  return (
  <>  
    <Filter />
    {renderHotels(search, "grid")}
  </>);
}
