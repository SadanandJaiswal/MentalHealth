import React, { useState } from "react";
import { meditationTypes } from "./meditationData";
import "./Navbar.css";
function Navbar() {
  const categories = [...new Set(meditationTypes.map((meditation) => meditation.category))];
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <nav>
      <ul>
        {categories.map((category) => (
          <button className="button-85">
          <li
            key={category}
            className={selectedCategory === category ? "active" : ""}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </li></button>
        ))}
      </ul>
      {selectedCategory && (
        <div>
          <h2>{selectedCategory}</h2>
          <ul>
            {meditationTypes
              .filter((meditation) => meditation.category === selectedCategory)
              .map((meditation) => (
                <li key={meditation.id}>
                  <h3>{meditation.name}</h3>
                  <p>{meditation.description}</p>
                  {/* Render other information for each meditation type */}
                </li>
              ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
