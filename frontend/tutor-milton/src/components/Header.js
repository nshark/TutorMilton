import PropTypes from 'prop-types';
import './Header.css';

const Header = (props) => {
    return (
        <header className="App-header">
            <h1 className="top-bar-title">
                <span className="top-bar-title-tutor">Tutor</span>
                <span className="top-bar-title-milton">Milton</span>
            </h1>
            <div className="top-bar-nav">
                {props.loggedIn ? ([
                    <p className="nav-element">{`Hello, ${props.username}.`}</p>,
                    <button className="nav-element nav-button">Sign out</button>
                ]
                ) : (
                    <button className="nav-element nav-button">Sign in</button>
                )
                }
                <button className="nav-button">Find Open Tutors</button>
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
