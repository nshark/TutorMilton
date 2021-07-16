import { FaTimes } from 'react-icons/fa'

const FreeList = ({ frees }) => {
    

    return(
        <>
            {frees.map((free) => (
                <div className="inner-container">
                    <h1 className="top-text">{free.free} <FaTimes style={{ color: 'red', cursor: 'pointer'}}/> </h1>
                </div>
            ))}
        </>
    )
}

export default FreeList