import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./CardsHomePage/CardsHomePage";
import NavbarWrapper from "./Navbar-Wrapper/WrapperNav";
import MenuMain from "./Navbar-Wrapper/MenuMain";
import RealFootwrapperSubscribe from "./RealFootwrapper/RealFootwrapperSubscribe";
import UnderRegisterSocial from "./RealFootwrapper/UnderRegisterSocials/UnderRegisterSocials";

function App() {
  return (
    <div className="body-container">
      <NavbarWrapper />
      <HomePage />
      <RealFootwrapperSubscribe />
      <BrowserRouter>
        <Routes>
          {/* <Route index element={<Adoptation />} />
        <Route path="/categories" element={<Categories />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
