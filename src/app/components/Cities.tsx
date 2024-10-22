"use client";

import React from "react";
import GetData from "./GetData";

interface CityDetails {
  name: string;
  city: string;
}

function Cities({ name, city }: CityDetails) {
  return (
    <div className="border rounded-md border-slate-300 min-w-[calc(33%-1rem)] hover:shadow-lg">
      <div className="p-2">
        <p>{name}</p>
        <GetData city={city} />
      </div>
    </div>
  );
}

export default Cities;
