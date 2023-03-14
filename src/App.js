import logo from './logo.svg';
import './App.css';
import SingleAnimalPage from './SingleAnimalPage/SingleAnimalPage';
import AnimalCreationPopup from './AnimalCreationPopup/AnimalCreationPopup';
import RegisterNewPet from './AnimalCreationPopup/RegisterNewPet';



function App() {
  return (
    <div className="App">

        <AnimalCreationPopup />
         <SingleAnimalPage />
         
         

       
    </div>
  );
}

export default App;
