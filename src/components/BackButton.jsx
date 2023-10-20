import { useNavigate } from "react-router-dom";

// Brings the user back one page in history
export default function BackButton() {
  const navigate = useNavigate();
  return (
    <button className="back-button button" onClick={() => navigate(-1)}>
      &lt;&lt; Go back
    </button>
  );
}
