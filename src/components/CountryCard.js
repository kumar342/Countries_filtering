import React from "react";

export default function CountryCard({ country }) {
  return (
    <div className="w-64 shadow m-10">
      <img
        className="w-64 h-48 object-cover"
        src={country.flag}
        alt="This is the country flag"
      />
      <div className="p-3 bg-white">
        <h3 className="text-xl font-bold">{country.name}</h3>
      </div>
    </div>
  );
}
