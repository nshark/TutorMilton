import {firebase} from "../config/firebase-config.ts"
import StyledFirebaseAuth from "./StyledFirebaseAuth"
import {auth} from "firebaseui";
export default function loginButton(){
    const uiConfig:auth.Config = {
        signInFlow: "popup",
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        ]
    }
    return(
    <div className="container">
        <StyledFirebaseAuth className="sign-in-button"
                            uiConfig={uiConfig}
                            firebaseAuth={firebase.auth()}
        />
    </div>
    );
}