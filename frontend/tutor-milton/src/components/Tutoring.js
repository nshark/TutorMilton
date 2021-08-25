import PropTypes from 'prop-types';
import './profcomps.css';

const Tutoring = ({ tutee }) => {
    return (
        
        <div className="prof-container">
            
            <header className="prof-comp">
             <h1 className="top-bar-title">
                 <span className="top-bar-title-tutor">Currently Tutoring</span>
             </h1>
             </header>
        
        {tutee.map((tut) => (
            <div className="inner-container"> 
                <h2 className="top-text">{tut.name}, {tut.class}</h2>
                <h2 className="bottom-text">{tut.time}</h2>  
             </div>
        ))}

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