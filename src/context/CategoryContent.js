"use client"
import { createContext, useState } from "react";

// Create the context
export const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  // Use state to manage the category
  const [category, setCategory] = useState("");

  // Function to change the category
  const changeCategory = (cat) => {
    setCategory(cat);
  };

  // Provide the category state and changeCategory function to the children components
  return (
    <CategoryContext.Provider value={{ category, changeCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};
