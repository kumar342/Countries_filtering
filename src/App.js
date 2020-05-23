import React, { useState, useEffect } from "react";
import CountryCard from "./components/CountryCard";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  });

  const changeHandler = (e) => {
    setInputValue(e.target.value);
  };
  const byInputValue = (country) => {
    return country.name.toLowerCase().includes(inputValue.toLowerCase());
  };

  return (
    <div className="rout">
      <h1 className="countries">COUNTRIES LIST</h1>
      <br />
      <div className="search-input">
        <input
          className="border-3 p-2 w-1/2"
          type="text"
          placeholder="Search for a country"
          onChange={changeHandler}
        />
      </div>
      <div className="flex flex-wrap">
        {countries.filter(byInputValue).map((country) => {
          return <CountryCard country={country} key={country.alpha2Code} />;
        })}
      </div>
    </div>
  );
}
export default App;
