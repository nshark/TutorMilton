import PropTypes from 'prop-types';
import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = ({ loggedIn, username }) => {
    return (
        <header className="App-header">
            <h1 className="top-bar-title">
                <span className="top-bar-title-tutor">Tutor</span>
                <span className="top-bar-title-milton">Milton</span>
            </h1>
            <div id="Navigation_Menu" class="navbar">
                    <li>
                        <NavLink exact to="/" className="Navigation" activeClassName="activeRoute">Home</NavLink>
                    </li>
                    <li class="dropdown">
                    <button class="dropbtn">Dropdown
                        <i class="fa fa-caret-down"></i>
                    </button>
                        <div class="dropdown-content">
                        <NavLink exact to="/tuteeprofile" className="DropDownNavigation" activeClassName="activeRoute">Tutee Profile</NavLink>
                        <div className="nav-spacer"> </div>
                        <NavLink exact to="/tutorprofile" className="DropDownNavigation2" activeClassName="activeRoute">Tutor Profile</NavLink>
                        </div>
                    </li>
                    <li>
                        <NavLink exact to="/tutorrequests" className="Navigation" activeClassName="activeRoute">Tutor Requests</NavLink>
                    </li>
                </div>
            <div className="top-bar-nav">
                {loggedIn ? ([
                    <p className="nav-element">{`Hello, ${username}.`}</p>,
                    <NavLink exact to="/signout" className="nav-element nav-button">Sign out</NavLink>
                    
                ]
                ) : (
                    <NavLink exact to="/signin" className="nav-element nav-button">Sign in</NavLink>
                )
                }
                <button className="nav-button">Find Tutors in my Dorm</button>
            </div>
        </header>
    )
}

Header.defaultProps = {
    username: "Student",
    loggedIn: false,
}

Header.propTypes = {
    username: PropTypes.string,
    loggedIn: PropTypes.bool,
}

export default Header
