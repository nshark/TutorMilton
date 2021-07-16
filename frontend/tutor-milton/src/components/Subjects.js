import PropTypes from 'prop-types';
import './profcomps.css';

const Subjects = ({ subject }) => {
    return (
        <div className="prof-container">
        <header className="prof-comp">
            <h1 className="top-bar-title">
                <span className="top-bar-title-tutor">My Subjects</span>
                <button className="nav-element nav-button">Add Subject</button>
            </h1>
            <div className="inner-container">

            <h1 className="top-text">{subject}</h1>

            </div>
            
        </header>
    </div>
    )
}

Subjects.defaultProps = {
    subject: "Spanish 2",
}

Subjects.propTypes = {
    username: PropTypes.string,
    loggedIn: PropTypes.bool,
}

export default Subjects