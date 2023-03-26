import { useState } from "react";

import "../LoginPage/LoginPage.scss";
import facebookImg from "../../images/facebook.png";
import googleImg from "../../images/google-icon.png";
import twitterImg from "../../images/twitter.png";
import vkSocial from "../../images/vk-social.png";
import dogImg from "../../images/dog-img.jpg";

const LoginPage = () => {
  const [user, setUser] = useState({
    name: "",
    lastName: "",
    email: "",
    age: "",
    phone: "",
    city: "",
    address: "",
    password: "",
  });

  const [passwordError, setPasswordError] = useState(false);

  // Define function to handle changes to input fields

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser((prevState) => ({ ...prevState, [name]: value }));
  };

  // Define function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    if (passwordError) {
      return;
    }

    // Send POST request to server with user data
    fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Failed to register user");
        }
      })
      .then((data) => {
        console.log("User registered:", data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // Render the login page
  return (
    <>
      <div className="register-page">
        <div className="signup">
          <h1 className="header">Create account</h1>
          <div className="socials">
            <a
              href="http://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebookImg} alt="facebook icon" />
            </a>
            <a
              href="http://mail.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={googleImg} alt="facebook icon" />
            </a>
            <a
              href="http://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitterImg} alt="facebook icon" />
            </a>
            <a href="http://vk.com" target="_blank" rel="noopener noreferrer">
              <img src={vkSocial} alt="vk social icon" />
            </a>
          </div>
          <form>
            <div className="input-group">
              <input
                type="text"
                placeholder="Name"
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                onChange={handleInputChange}
                required
              />
              <input
                type="email"
                placeholder="E-Mail"
                onChange={handleInputChange}
                required
              />
              <input
                type="number"
                placeholder="Age"
                onChange={handleInputChange}
                required
              />
              <input
                type="tel"
                placeholder="Phone Number"
                onChange={handleInputChange}
              />
              <input
                type="text"
                placeholder="City"
                onChange={handleInputChange}
              />
              <input
                type="text"
                placeholder="Adress"
                onChange={handleInputChange}
              />
              <input
                type="password"
                placeholder="Password"
                onChange={handleSubmit}
              />
            </div>
            <h2>
              <input className="checkbox" type="checkbox" />I agree to{""}
              <span>Terms</span> and{""} <span>Privacy Policy</span>
            </h2>
            <div className="buttons">
              <button className="btn" type="submit" onClick={handleSubmit}>
                Sign Up
              </button>
              <h3>or</h3>
              <button className="btn" type="submit">
                Log in to existing account
              </button>
            </div>
          </form>
        </div>
        <img src={dogImg} alt="dog-img" />
      </div>
    </>
  );
};

export default LoginPage;
