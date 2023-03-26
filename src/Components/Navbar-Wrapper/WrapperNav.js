import MenuMain from "./MenuMain";
import wrappernav from "./wrappernav.png";
import "./WrapperNav.scss";
import "./WrapperNavMediaScreens.scss";
export default function WrapperNav() {
  return (
    <div className="Navbar-Jumbotron">
      <div className="Nav-Bar">
        <MenuMain />
      </div>
      <div className="Under-Navbar">
        <div className="Text-Wrapper">
          <h1 className="First-Text">One more friend </h1>
          <h2 className="Second-Text">Thousand more fun!</h2>
          <p className="Third-Text">
            Having a pet means you have more joy, a new friend, a happy person
            who will always be with you to have fun. We have 200+ different pets
            that can meet your needs!
          </p>
        </div>
        <div className="Photo-Wrapper">
          <img
            className="Photo-Homepage"
            src={wrappernav}
            alt="Woman and a dog"
          />
        </div>
      </div>
    </div>
  );
}
