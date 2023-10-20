import { useLocation } from "react-router-dom";
import { renderHotels } from "../../utils";
import { motion } from "framer-motion";
import BackButton from "../components/BackButton";

export default function SearchResult() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const search = queryParams.get("q");

  window.scrollTo(0, 0);
  return (
    <>
      <motion.div
        className="fade-in"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
      >
        <BackButton />
        {renderHotels(search, "grid")}
      </motion.div>
    </>
  );
}
