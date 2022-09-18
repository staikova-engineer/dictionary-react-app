import React, { useState } from "react";

import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  function search(event) {
    event.preventDefault();
    alert(`Submit ${keyword}`);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <div className="row">
          <div className="col">
            <input
              type="search"
              onChange={handleKeywordChange}
              autoFocus="on"
              autoComplete="off"
            />
          </div>
          <div className="col">
            <input type="submit" />
          </div>
        </div>
      </form>
    </div>
  );
}
