import FreeList from "./FreeList.tsx";
export default function Frees({showFree, onAddFree, free} : {showFree: boolean, onAddFree: () => void, free:any[]}){
    return (
        <div className="prof-container">
            <header className="prof-comp">
                <h1 className="top-bar-title">
                    <span className="top-bar-title-tutor">My Free Periods</span>
                    <button className="nav-element nav-button" onClick = {onAddFree}>{showFree ? 'close' : 'Add Subject'}</button>

                </h1>
                <FreeList {...free}/>
            </header>
        </div>
    )
}