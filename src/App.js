import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Categories from "./Components/CategoryCard/Categories";
// import Adoptation from "./Components/Adoptation/Adoptation";
import SingleAnimalPage from './Components/SingleAnimalPage/SingleAnimalPage';
import HomePage from './Components/HomePage/CardHome';
import WrapperNav from './Components/Navbar-Wrapper/WrapperNav';
import FooterWrapper from './Components/FooterWrapper/FooterWrapper';

function App() {
  return (
    <>
    <WrapperNav/>
    <div className="body-container">
    <BrowserRouter >
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/animals/:id" element={<SingleAnimalPage />} />
        
      </Routes>
    </BrowserRouter>
    </div>
     <FooterWrapper/>
    </>
  );
}

export default App;