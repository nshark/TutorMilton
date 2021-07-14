import PropTypes from 'prop-types';
import './profcomps.css';

const Tutoring = ({ tutee }) => {
    return (
        <div className="prof-container">
        <header className="prof-comp">
            <h1 className="top-bar-title">
                <span className="top-bar-title-tutor">Currently Tutoring</span>
            </h1>
            <div className="inner-container"> 
                <h2 className="top-text">{tutee}</h2>
                <h2 className="bottom-text">Wednesday, 2nd Period</h2>  
            </div>
            <div className="inner-container"> 
                <h2 className="top-text">Mary Sue, L2H</h2>
                <h2 className="bottom-text">Monday, 5th Period</h2>  
            </div>
        </header>
        </div>
    )
}

Tutoring.defaultProps = {
    tutee: "John Doe, SP2",
}

Tutoring.propTypes = {
    username: PropTypes.string,
    loggedIn: PropTypes.bool,
}

export default Tutoring