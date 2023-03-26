import facebook from "./facebook.png";
import twitter from "./twitter.png";
import instagram from "./instagram.png";
import youtube from "./youtube.png";
import "./UnderRegisterSocials.scss";
import "./UnderRegisterSocialsResponsive.scss";
export default function UnderRegisterSocial() {
  return (
    <div className="Total-Under-Subscribe-Socials">
      <div className="Under-Subscribe-Socials">
        <div className="Under-Subscribe-Menu">
          <span>
            <a href="#">Home</a>
          </span>
          <span>
            <a href="#">Category</a>
          </span>
          <span>
            <a href="#">About</a>
          </span>
          <span>
            <a href="#">Contact</a>
          </span>
        </div>
        <div className="Logo-Subscribe-Socials">
          <span>
            <img
              src={facebook}
              alt="logo"
              style={{ height: "23.85px", width: "24px" }}
            />
          </span>
          <span>
            <img
              src={twitter}
              alt="logo"
              style={{ height: "23.85px", width: "24px" }}
            />
          </span>
          <span>
            <img
              src={instagram}
              alt="logo"
              style={{
                height: "23.85px",
                width: "24px",
                marginRight: "5.84px",
              }}
            />
          </span>
          <span>
            <img
              src={youtube}
              alt="logo"
              style={{ height: "23.85px", width: "24px" }}
            />
          </span>
        </div>
      </div>
    </div>
  );
}
