import "../LoginPage/LoginPage.scss";
import facebookImg from "../../images/facebook.png";
import googleImg from "../../images/google-icon.png";
import twitterImg from "../../images/twitter.png";
import vkSocial from "../../images/vk-social.png";
import dogImg from "../../images/dog-img.jpg";

const LoginPage = () => {
  return (
    <>
      <div className="register-page">
        <div className="signup">
          <h1 className="header">Create account</h1>
          <div className="socials">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <img src={facebookImg} alt="facebook icon" />
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <img src={googleImg} alt="facebook icon" />
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <img src={twitterImg} alt="facebook icon" />
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <img src={vkSocial} alt="vk social icon" />
            </a>
          </div>
          <div className="input-group">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Last Name" />
            <input type="email" placeholder="E-Mail" />
            <input type="number" placeholder="Age" />
            <input type="tel" placeholder="Phone Number" />
            <input type="text" placeholder="City" />
            <input type="text" placeholder="Adress" />
            <input type="password" placeholder="Password" />
          </div>
          <h2>
            <input className="checkbox" type="checkbox" />I agree to{""}
            <span>Terms</span> and{""} <span>Privacy Policy</span>
          </h2>
          <button className="btn" type="submit">
            Sign Up
          </button>
        </div>
        <img src={dogImg} alt="dog-img" />
      </div>
    </>
  );
};

export default LoginPage;
