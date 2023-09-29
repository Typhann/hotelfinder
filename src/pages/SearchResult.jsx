import { useLocation } from "react-router-dom";
import { renderHotels } from "../../utils";

export default function SearchResult() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const search = queryParams.get("q");

  return <>{renderHotels(search, "grid")}</>;
}
