import './App.css';
import Adoptation from './Components/Adoptation/Adoptation';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Adoptation />}>

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
