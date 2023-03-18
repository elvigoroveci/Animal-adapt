import logo from './logo.svg';
import './App.css';
import SingleAnimalPage from './SingleAnimalPage/SingleAnimalPage';
import AnimalCreationPopup from './AnimalCreationPopup/AnimalCreationPopup';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import RegisterNewPet from './AnimalCreationPopup/RegisterNewPet';



function App() {
  return (
    <div className="App">
      <BrowserRouter>

      <Routes>
          <Route path="/" element={<Layout />}>
              <Route index element={<AnimalCreationPopup />}/>
              <Route path element={<AnimalCreationPopup />}/>
              <Route path element={<SingleAnimalPage />}/>

          </Route>
            

       
         
         </Routes>
         
      
      
      </BrowserRouter>

      

       
    </div>
  );
}

export default App;



//  <AnimalCreationPopup />
//          <SingleAnimalPage />