import { useState } from "react";
import "./Alert.css";

function Alert() {
  const [status, setStatus] = useState("");

  return (
    <div className="alert-container">
      <h2 className={`alert-text ${status}`}>
        This is an alert
      </h2>

      <div className="btn-group">
        <button className="btn" onClick={() => setStatus("success")}>
          Success
        </button>
        <button className="btn" onClick={() => setStatus("warning")}>
          Warning
        </button>
        <button className="btn" onClick={() => setStatus("error")}>
          Error
        </button>
      </div>
    </div>
  );
}

export default Alert;