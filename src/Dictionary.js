import React, { useState } from "react";
import axios from "axios";

import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response.data);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
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
