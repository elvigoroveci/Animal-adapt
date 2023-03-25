import { BrowserRouter, Routes, Route } from "react-router-dom";
import Categories from "./Components/Categories";
import Adoptation from "./Components/Adoptation/Adoptation";
import SingleAnimalPage from './Components/SingleAnimalPage/SingleAnimalPage';
import MenuMain from "./Navbar-Wrapper/MenuMain";


function App() {
  return (
    <div className="body-container">
      <BrowserRouter >
       <Routes>
        <Route index element={<Adoptation />} />
        <Route path="/" element={<MenuMain/>} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/animals/:id" element={<SingleAnimalPage />} />       
        <Route path="/:petsId" element={ <Adoptation/>} />
       </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
