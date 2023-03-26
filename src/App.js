import LoginPage from "./components/LoginPage/LoginPage";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/loginpage" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

export default App;
