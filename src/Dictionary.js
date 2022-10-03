import React, { useState } from "react";
import Results from "./Results";
import axios from "axios";

import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h2>What word do you want to look up?</h2>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col">
                <input
                  type="search"
                  onChange={handleKeywordChange}
                  defaultValue={props.defaultKeyword}
                  autoFocus="on"
                  autoComplete="off"
                />
              </div>
              <div className="col">
                <input type="submit" />
              </div>
            </div>
          </form>
          <div className="hint">
            suggested words: coffee, yoga, sunset, bread etc.
          </div>
        </section>
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
