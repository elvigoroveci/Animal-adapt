import { BrowserRouter, Routes, Route } from "react-router-dom";
import Categories from "./Components/Categories";
import Adoptation from "./Components/Adoptation/Adoptation";


function App() {
  return (
    <div className="body-container">
    <BrowserRouter >
      <Routes>
        <Route path="/:petsId" element={ <Adoptation/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
