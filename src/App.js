import Categories from "./Components/Categories";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="body-container">
    <BrowserRouter >
      <Routes>
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
