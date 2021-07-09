import PropTypes from 'prop-types';

const Header = (props) => {
    return (
        <header className="App-header">
            <h1><span className="top-bar-title-tutor">Tutor</span><span className="top-bar-title-milton">Milton</span></h1>
            <div className="top-bar-nav">
                {props.loggedIn ? (
                    <div>
                        <p>{props.username}</p>
                        <button>Sign out</button>
                    </div>
                ) : (
                    <button>Sign in</button>
                )
                }
                <button>Find Open Tutors</button>
            </div>
        </header>
    )
}

Header.defaultProps = {
    loggedIn: false,
}

Header.propTypes = {
    username: PropTypes.string,
    loggedIn: PropTypes.bool,
}

export default Header
