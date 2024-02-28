import React, { useState, createContext } from "react";

// Create a Context
export const FilterContext = createContext();

// Provider Component
export const FilterProvider = ({ children }) => {
  const [filterCategory, setFilterCategory] = useState(null);

  return (
    <FilterContext.Provider value={{ filterCategory, setFilterCategory }}>
      {children}
    </FilterContext.Provider>
  );
};
