import { BrowserRouter, Routes, Route } from "react-router-dom";
import Categories from "./Components/Categories";
import Adoptation from "./Components/Adoptation/Adoptation";
import HomePage from "./HomePage";

function App() {
  return (
    <div className="body-container">
      <HomePage />
      <BrowserRouter>
        <Routes>
          <Route index element={<Adoptation />} />
          {/* <Route path="/categories" element={<Categories />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
