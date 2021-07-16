import PropTypes from 'prop-types';
import './profcomps.css';

const Sessions = ({ tutor }) => {
    return (
        <div className="prof-container">
        <header className="prof-comp">
            <h1 className="top-bar-title">
                <span className="top-bar-title-tutor">My Sessions</span> <br/>
                <button className="nav-element nav-button">Request a Tutor</button>
            </h1>
            <div className="inner-container"> 
                <h2 className="top-text">{tutor}</h2>
                <h2 className="bottom-text">Wednesday, 2nd Period</h2>  
            </div>
            <div className="inner-container"> 
                <h2 className="top-text">Mary Sue, L2H</h2>
                <h2 className="bottom-text">Monday, 5th Period</h2>  
            </div>
            <div className="inner-container"> 
                <h2 className="top-text">Other Name, R5</h2>
                <h2 className="bottom-text">Friday, 1st Period</h2>  
            </div>
            <h1 className="top-bar-title">
                <span className="top-bar-title-tutor">Pending Requests</span> <br/>
            </h1>
            <div className="inner-container"> 
                <h2 className="top-text">HB2</h2>
                <h2 className="bottom-text">Friday, 1st Period</h2>  
            </div>
        </header>
        </div>
    )
}

// 

Sessions.defaultProps = {
    tutor: "John Doe, SP2",
}

Sessions.propTypes = {
    username: PropTypes.string,
    loggedIn: PropTypes.bool,
}

export default Sessions