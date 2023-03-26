import { useState, useEffect, useRef } from "react";
import { Icon } from "@mui/material";
import('./Categories.scss');

const CategoryCard = (props) => {
  const [selectedIndices, setSelectedIndices] = useState([]);
  const [lastSelectedIndex, setLastSelectedIndex] = useState(null);

  const cardRef = useRef(null);

  console.log(props);

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
      {props.category.data.map((item, id) => {
        const isSelected = selectedIndices.includes(id);
        const isLastSelected = lastSelectedIndex === id;
        return (
          <div
            className={`card-container ${isSelected || isLastSelected ? "selected" : ""}`}
            key={id}
            onClick={() => handleSelectedCategory(id)}
          >
            <Icon component={item.logo} />
            <h5 className="item-category">{item.category}</h5>
          </div>
        );
      })}
    </div>
  );
};

export default CategoryCard;
