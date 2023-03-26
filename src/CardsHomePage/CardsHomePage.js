import React, { useState, useEffect } from "react";
import "./CardStyle.scss";
import "./CardsHomePageResponsive.scss";

const server_path = "http://localhost:5000";

const HomePage = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/pets");
        const data = await response.json();
        setPets(data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  console.log(pets);

  return (
    <div className="Cards-Api-Total">
      {pets.map((pet) => (
        <div className="cardsoo" key={pet.id}>
          <div className="image-cards">
            <img src={server_path + pet.image} alt={pet.name} width="250px" />
          </div>
          <div className="cardsoo-info">
            <h4 className="EmertimiCard">Emertimi :{pet.name}</h4>
            <p className="RracaCard">Rraca: {pet.breed}</p>
            <p className="fillCard">{pet.age} ∞∞</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
