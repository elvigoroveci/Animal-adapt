import logoAdoptMe from "./logoAdoptMe.png";
import "./MenuMain.scss";
import zoomicon from "./zoom-icon.svg";
import "./Mediascreens.scss";
import { useState } from "react";
import lupasearch from "./lupasearch.svg";

export default function MenuMain() {
  const [isActive, setIsActive] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <nav className="navbari">
      <div className="navbar__logo">
        <img src={logoAdoptMe} alt="Logo" />
      </div>
      <button
        className={`navbar__toggle ${isActive ? "active" : ""}`}
        onClick={toggleMenu}
      ></button>

      <ul className={`navbar__menu ${isActive ? "active" : ""}`}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Category</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <div
            className={`navbar__searchii ${showSearch ? "active" : ""}`}
            onClick={toggleSearch}
          >
            <i className="fa fa-search"></i>
            <input type="text" placeholder="Search something here!" />
          </div>
        </li>
      </ul>
      <div className={`navbar__search ${isActive ? "active" : ""}`}>
        <input type="text" placeholder="Search something here!" />
      </div>
      <button className={`navbar__login ${isActive ? "active" : ""}`}>
        <a className="navbar__login-text">Login</a>
      </button>
    </nav>
  );
}
//hey?
