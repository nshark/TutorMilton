import Header from "./Header.tsx";
export default function LandingPage(){
    return (
        [<Header />,
            <div className="App-bg">
                <h1 className="main-title">Welcome.</h1>
                <div className="welcome-subtitle">Take me to the tutoring portal</div>
            </div>]
    );
}