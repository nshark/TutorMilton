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
            <div id="Navigation_Menu">
                    <li>
                        <NavLink exact to="/" className="Navigation" activeClassName="activeRoute">Home</NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/profile" className="Navigation" activeClassName="activeRoute">Profile</NavLink>
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
