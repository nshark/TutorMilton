import { NavLink } from "react-router-dom";

<style>import "./Header.css"</style>;
export default function Header() {
  return (
    <header className="App-header">
      <h1 className="top-bar-title">
        <span className="top-bar-title-tutor">Tutor</span>
        <span className="top-bar-title-milton">Milton</span>
      </h1>
      <div id="Navigation_Menu" className="navbar">
        <li>
          <NavLink to="/" className="Navigation">
            Home
          </NavLink>
        </li>

        {/* <li>
                        <NavLink exact to="/tuteeprofile" className="Navigation" activeClassName="activeRoute">My Profile</NavLink>
                    </li> */}

        <li>
          <NavLink to="/tutorrequests" className="Navigation">
            Requests
          </NavLink>
        </li>
      </div>
      <div className="top-bar-nav"></div>
    </header>
  );
}
