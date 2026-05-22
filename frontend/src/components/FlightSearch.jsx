import { useState } from "react";
import "../styles/FlightSearch.css";

function FlightSearch() {

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const handleSearch = () => {
    alert(`Searching flight from ${from} to ${to}`);
  };

  return (
    <div className="search-card">

      <div className="field-group">
        <label>From</label>

        <input
          type="text"
          placeholder="Mumbai"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
        />
      </div>

      <div className="field-group">
        <label>To</label>

        <input
          type="text"
          placeholder="Delhi"
          value={to}
          onChange={(e) => setTo(e.target.value)}
        />
      </div>

      <button onClick={handleSearch}>
        Search Flight
      </button>

    </div>
  );
}

export default FlightSearch;