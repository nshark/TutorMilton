import PropTypes from 'prop-types';

const Header = (props) => {
    return (
        <header className="App-header">
            <h1><span className="top-bar-title-tutor">Tutor</span><span className="top-bar-title-milton">Milton</span></h1>
            <div className="top-bar-nav">
                <button>Sign in</button>
                <button>Find Open Tutors</button>
            </div>
        </header>
    )
}

Header.propTypes = {
    loggedIn: PropTypes.bool
}

export default Header
