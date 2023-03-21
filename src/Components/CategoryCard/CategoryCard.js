import { useState, useEffect, useRef } from "react";

const CategoryCard = (props) => {
  const [selectedIndices, setSelectedIndices] = useState([]);
  const [lastSelectedIndex, setLastSelectedIndex] = useState(null);

  const cardRef = useRef(null);

  const handleSelectedCategory = (index) => {
    setSelectedIndices([index]);
    setLastSelectedIndex(index);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        setSelectedIndices([]);
        setLastSelectedIndex(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [cardRef]);

  return (
    <div className="categories-section" ref={cardRef}>
      {props.category.map((item, id) => {
        const isSelected = selectedIndices.includes(id);
        const isLastSelected = lastSelectedIndex === id;
        return (
          <div
            className={`card-container ${isSelected || isLastSelected ? "selected" : ""}`}
            key={id}
            onClick={() => handleSelectedCategory(id)}
          >
            <div>{item.logo}</div>
            <h3>{item.title}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default CategoryCard;
