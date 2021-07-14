import PropTypes from 'prop-types';
import './Header.css';

const TutorHeader = ({ username }) => {
    return (
        <header className="App-header">
            <h1 className="top-bar-title">
                <span className="top-bar-title-tutor">{username}'s </span>
                <span className="top-bar-title-milton">Tutor Page</span>
            </h1>
            <div className="top-bar-nav">
                
                <button className="nav-button">My Tutee Page</button>
            </div>
        </header>
    )
}

TutorHeader.defaultProps = {
    username: "Gunner Peterson"
}

TutorHeader.propTypes = {
    username: PropTypes.string,
    loggedIn: PropTypes.bool,
}

export default TutorHeader
