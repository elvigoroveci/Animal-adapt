import WrapperNav from "./WrapperNav";
import "./MenuMain.scss";
import "./WrapperNav.scss";
import FooterWrapper from "./FooterWrapper/FooterWrapper";
import "./FooterWrapper/FooterWrapperStyle.scss";
import "./FooterSubcribe/SubscribeFooter.scss";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div>
      <WrapperNav />
      <FooterWrapper />
    </div>
  );
}

export default App;
