import FreeList from "./FreeList.tsx";
export default function Frees(showFree:boolean, onAddFree, free){
    return (
        <div className="prof-container">
            <header className="prof-comp">
                <h1 className="top-bar-title">
                    <span className="top-bar-title-tutor">My Free Periods</span>
                    <button className="nav-element nav-button" text ={showFree ? 'close' : 'Add Subject'} onClick = {onAddFree}>Add Free</button>

                </h1>
                < FreeList  frees = {free}/>
            </header>
        </div>
    )
}