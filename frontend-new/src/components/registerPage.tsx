import {useParams} from "react-router-dom";
import {useState} from "react";
import {collection, db, auth} from "../config/firebase-config.ts";
import emailjs from "emailjs-com";
import {getDocs, query, QueryDocumentSnapshot, addDoc} from "firebase/firestore"
export default function RegisterPage() {
    // eslint-disable-next-line prefer-const
    let {course, id} = useParams();
    course = decodeURIComponent(course);
    const [userName, setUserName] = useState('')
    let email = 'none'

    function checkDocs(doc: QueryDocumentSnapshot) {
        if (doc.id == id) {
            setUserName(doc.data().displayName);
            email = doc.data().email;
        }
    }
    async function getUserDocs() {
        const q = query(collection(db, "users"))
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach(doc => {
            checkDocs(doc)
        })
    }
    getUserDocs()
    function sendTuteeEmail() {

        const templateParams = {
            from_name: auth.currentUser.displayName,
            from_email: auth.currentUser.email,
            class_name: course,
            to_name: userName,
            to_email: email,

        }

        emailjs.send("service_jsnvh9j", "template_6p9i4f4", templateParams, "user_QdL21uWEOg0m5JaXOC1LF")
            .then((result) => {
                console.log(result.text);

            }, (error) => {
                console.log(error.text);
            });
    }

    function pushTutor() {

        try {
            console.log('course', course);
            addDoc(collection(db, "matches"),{
                tutor: auth.currentUser.displayName,
                tutor_email: auth.currentUser.email,
                tutee: userName,
                tutee_email: email,
                subject: course,
            });
        } catch (e) {
            console.log(e)
        }

        try {
            console.log('course', course);
            addDoc(collection(db,"tutees"),{
                name: userName,
                email: email,
                subject: course,
            });
        } catch (e) {
            console.log(e)
        }

        sendTuteeEmail()
    }

    return (<div className="App-bg">
        <p className="prof-comp">Confirm Pairing with {userName} for class: <br/> {course} ?

            <div>
                <button className="conf-button" onClick={pushTutor}> Confirm</button>
            </div>
        </p>
    </div>)
}