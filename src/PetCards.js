
const PetCards = ({ pets }) => {
  console.log("Pets:", pets);
  return (
    <div>
      {pets.map((pet) => (
        <div key={pet.id}>
          <h2>{pet.name}</h2>
          <img src={pet.image} alt={pet.name} />
          <p>{pet.description}</p>
        </div>
      ))}
    </div>
  );
};
export default PetCards;
