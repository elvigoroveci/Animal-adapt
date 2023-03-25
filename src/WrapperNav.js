import MenuMain from "./MenuMain";
import wrappernav from "./wrappernav.png";
export default function WrapperNav() {
  return (
    <div
      style={{
        height: "574.17px",
        width: "1189.64px",
        background:
          "linear-gradient(102.87deg, #FCEED5 6.43%, #FCEED5 78.33%, #FFE7BA 104.24%)",
        borderRadius: "0px 0px 33.0458px 33.0458px",
      }}
    >
      <div className="Component-Inside-Wrapper">
        <MenuMain />
      </div>
      <div className="Full-Wrapper">
        <div className="Main-Div-Wrapper">
          <h1 className="text-first">One more friend </h1>
          <h2 className="text-second">thousand more fun!</h2>
          <p className="paragraph">
            Having a pet means you have more joy, a new friend, a happy person
            who will always be with you to have fun. We have 200+ different pets
            that can meet your needs!
          </p>
        </div>
        <div className="Div-photo">
          <img className="photo-home" src={wrappernav} alt="Woman and a dog" />
        </div>
      </div>
    </div>
  );
}
