import {FaTimes} from 'react-icons/fa'

function FreeList(frees) {


    return (
        <>
            {frees.map((free) => (
                <div className="inner-container">
                    <h1 className="top-text">{free.freeText} <FaTimes style={{color: 'red', cursor: 'pointer'}}/></h1>
                </div>
            ))}
        </>
    )
}

export default FreeList