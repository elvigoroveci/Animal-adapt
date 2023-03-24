import { useState } from "react";
import logoAdoptMe from "./logoAdoptMe.png";

export default function MenuMainjs() {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
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
      </ul>
      <div className={`navbar__search ${isActive ? "active" : ""}`}>
        <input type="text" placeholder="  Search something here!" />
      </div>
      <button className={`navbar__login ${isActive ? "active" : ""}`}>
        <a className="navbar__login-text">Login</a>
      </button>
    </nav>
  );
}
