import Header from "./Header.tsx";
import LoginButton from "./loginButton.tsx";
export default function LandingPage(){
    return (
        [<Header />,
            <div className="App-bg">
                <h1 className="main-title">Welcome.</h1>
                <LoginButton/>
            </div>]
    );
}