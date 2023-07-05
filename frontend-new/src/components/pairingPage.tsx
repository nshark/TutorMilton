import {useParams} from "react-router-dom";

export default function PairingPage(){
    const { id } = useParams();

    return(
        <div className="App-bg">
            <p className = "prof-comp">Confirm Pairing with {id}?
                <div>
                    <button className="can-button">Cancel</button>
                    <button className="conf-button">Confirm</button>
                </div>
            </p>
        </div>);
}