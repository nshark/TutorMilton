import { FaTimes } from 'react-icons/fa'

const SubjectList = ({ subjects }) => {
    

    return(
        <>
            {subjects.map((sub) => (
                <div className="inner-container">
                    <h1 className="top-text">{sub.subject} <FaTimes style={{ color: 'red', cursor: 'pointer'}}/> </h1>
                </div>
            ))}
        </>
    )
}

export default SubjectList