import PropTypes from 'prop-types';
import './profcomps.css';

const Frees = ({ free }) => {
    return (
        <div className="prof-container">
        <header className="prof-comp">
            <h1 className="top-bar-title">
                <span className="top-bar-title-tutor">My Free Periods</span>
                <button className="nav-element nav-button">Add Free</button>
                
            </h1>
            <div className="inner-container">
                <h1 className="top-text">{free}</h1>
            </div>
        </header>
        </div>
    )
}

Frees.defaultProps = {
    free: "Wednesday 2nd",
}

Frees.propTypes = {
    username: PropTypes.string,
    loggedIn: PropTypes.bool,
}

export default Frees