import {useParams} from "react-router-dom";
import {useState} from "react";
import {firebase, db} from "../config/firebase-config.ts";
import emailjs from "emailjs-com";
export default function RegisterPage(){
    // eslint-disable-next-line prefer-const
    let { course, id } = useParams();
    course = decodeURIComponent(course);
    const [userName, setUserName] = useState('')
    let email = 'none'
    function checkDocs(doc:firebase.firestore.QueryDocumentSnapshot){
        if(doc.id == id){
            setUserName(doc.data().displayName);
            email = doc.data().email;
        }
    }
    db.collection('users').get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
            checkDocs(doc)
        })
    })
    function sendTuteeEmail(){

        const templateParams = {
            from_name: firebase.auth().currentUser.displayName,
            from_email: firebase.auth().currentUser.email,
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
    function pushTutor(){

        try { console.log('course', course);
            db.collection("matches").add({
                tutor: firebase.auth().currentUser.displayName,
                tutor_email: firebase.auth().currentUser.email,
                tutee: userName,
                tutee_email: email,
                subject: course,
            });} catch(e){
            console.log(e)
        }

        try { console.log('course', course);
            db.collection("tutees").add({
                name: userName,
                email: email,
                subject: course,
            });} catch(e){
            console.log(e)
        }

        sendTuteeEmail()
    }
    return(<div className="App-bg">
        <p className="prof-comp">Confirm Pairing with {userName} for class: <br/> {course} ?

            <div>
                <button className="conf-button" onClick={pushTutor}> Confirm</button>
            </div>
        </p>
    </div>)
}