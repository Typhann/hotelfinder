import { useState } from "react";
import "./toast.css";

export default function Feedback(props) {
  const [isVisible, setIsVisible] = useState(true);

  // Displays feedback for 4 seconds
  setTimeout(() => {
    setIsVisible(false);
  }, 10000);

  let type = "";
  let icon = "";

  switch (props.type) {
    case "error":
      type = "Error: ";
      icon = "😞";
      break;
    case "warning":
      type = "Tip! ";
      icon = "🤗";
      break;
    case "success":
      type = " ";
      icon = "😍";
      break;
    default:
      type = " ";
      icon = "🧐";
      break;
  }

  return (
    <div>
      {isVisible && (
        <div className="feedback-container">
          <div className="feedback-timer" id={props.type}></div>
          <p>{`${type} ${props.message} ${icon}`}</p>
        </div>
      )}
    </div>
  );
}
