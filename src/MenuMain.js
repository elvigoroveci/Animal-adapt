import logoAdoptMe from "./logoAdoptMe.png";
import zoomsearch from "./lupasearch.svg";
export default function MenuMain() {
  return (
    <nav className="Navbar-Total">
      <div className="logo-navbar">
        <img src={logoAdoptMe} width="100px" height="78px" alt="Logo" />
      </div>

      <ol className="menu-items">
        <li>Home </li>
        <li>Category </li>
        <li>About </li>
        <li>Contact </li>
      </ol>

      <div className="search">
        <img
          src={zoomsearch}
          alt="searchicon"
          class="search-icon"
          width="13.78"
          height="13.77px"
        />
        <input type="text" placeholder="Search something here!" />
      </div>
      <div className="login">
        <button>
          <a href="">Login</a>
        </button>
      </div>
    </nav>
  );
}
