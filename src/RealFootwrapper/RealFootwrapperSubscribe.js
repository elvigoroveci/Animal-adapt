import "./RealFootwrapperSubscribe.scss";
import "./RealFootwrapperSubscribeResponsive.scss";
export default function RealFooterWrapperSubscribe() {
  return (
    <div className="Register-Now-Component-Total">
      <div className="Subscribe-Component-Total">
        <div className="Text-Left-Subscribe">
          <p>Register now so you don't miss our programs</p>
        </div>
        <div className="Email-Input-Button">
          <input
            className="Email-Input-Subscribe"
            type="text"
            placeholder="Enter your email"
          />
          <button className="Subscribe-Now-Button">
            <a href="#" className="Text-Inside-Subscribe-Now-Button">
              Subscribe now
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
