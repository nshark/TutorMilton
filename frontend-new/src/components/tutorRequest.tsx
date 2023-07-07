import {FormEvent, useState} from 'react';
import emailjs from "emailjs-com"
import './profcomps.css'
import {db, auth} from "../config/firebase-config";
import {getDocs, query} from "firebase/firestore";
import {collection} from "../config/firebase-config.ts";
import Header from "./Header.tsx"
function TutorRequest() {

    async function findTutorEmails(c: string) {
        const tutorsList: string[] = []
        const q = query(collection(db, "tutors"))
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach(doc => {
            if (doc.data().subjectsToTutor == c) {
                tutorsList.push(doc.data().email)
            }
        })
        console.log(tutorsList)
        return tutorsList;
    }


    function sendEmail(){


        const templateParams:Record<string, unknown>  = {
            from_name: auth.currentUser.displayName,
            class_name: class2,
            to_email: email2,
            person_link: 'http://tutormilton.com/pairing/' + encodeURIComponent(class2) + '/' + auth.currentUser.uid

        }

        emailjs.send("service_jsnvh9j", "template_jqyyi2j", templateParams, "user_QdL21uWEOg0m5JaXOC1LF")
            .then((result) => {
                console.log(result.text);

            }, (error) => {
                console.log(error.text);
            });
    }

    function sendEmail2(){

        const templateParams:Record<string, unknown> = {
            from_name: auth.currentUser.displayName,
            class_name: class1,
            tutor_emails: findTutorEmails(class1),
            free: free,
            person_link: 'http://tutormilton.com/register/' + encodeURIComponent(class1) + '/' + auth.currentUser.uid
        }

        emailjs.send("service_jsnvh9j", "template_0zjm2a1", templateParams, "user_QdL21uWEOg0m5JaXOC1LF")
            .then((result) => {
                console.log(result.text);

            }, (error) => {
                console.log(error.text);
            });
    }



    const [email1, setEmail1] = useState('');
    const [class1, setClass1] = useState('');
    const [free, setFree] = useState('');

    const [email2, setEmail2] = useState('');
    const [class2, setClass2] = useState('');


    const onSubmit1 = (e:FormEvent) =>{
        e.preventDefault()

        if(/\d/.test(email1) || email1.includes("@milton.edu")==false){
            alert('invalid email')
            return
        }
        else if(!class1){
            alert('please select a course')
            return
        }
        else if(!free){
            alert('please select a free')
            return
        }

        if(window.confirm("Confirm Request?")){
            console.log(email1)
            console.log(class1)
            console.log(free)
            console.log('http://tutormilton.com/register/' + encodeURIComponent(class1) + '/' + encodeURIComponent(auth.currentUser.uid))
            sendEmail2();
            alert("Request Sent!")
        }
        else{
            return
        }

    }

    const onSubmit2 = (e:FormEvent) =>{
        e.preventDefault()

        if(/\d/.test(email2) || email2.includes("@milton.edu")==false){
            alert('invalid email')
            return
        }

        else if(!class2){
            alert('please select a course')
            return
        }

        if(window.confirm("Confirm Request?")){
            console.log(email2)
            console.log(class2)
            console.log(encodeURIComponent(class2))
            console.log('http://tutormilton.com/pairing/' + encodeURIComponent(class2) + '/' + encodeURIComponent(auth.currentUser.uid))
            sendEmail();
            alert("Email Sent!")

        }
        else{
            return
        }
    }


    return (


        <div className="App-bg">
            <Header/>

            <div className="row">

                <div className="column">
                    <div className="profComp">
                        <p>Click here to request tutoring</p>
                        <form id="request-form" onSubmit={ onSubmit1 }>
                            <div className="dropdown">
                                <select className="dropbtn" onChange={(e)=> setClass1(e.target.value)}>

                                    <option selected disabled className="dropbtn-Title">Select a course</option>
                                    <option disabled>Classics</option>
                                    <option value="Intensive Classical Greek">Intensive Classical Greek</option>
                                    <option value="Adv Greek: Plato">Adv Greek: Plato</option>
                                    <option value="Latin 2/3 (Accelerated)">Latin 2/3 (Accelerated)</option>
                                    <option value="Latin Literature (AP)">Latin Literature (AP)</option>
                                    <option value="Adv Latin: Roman Historians (1/2)">Adv Latin: Roman Historians (1/2)</option>
                                    <option value="Adv Latin: Roman Philosophy (Sem 1)">Adv Latin: Roman Philosophy (Sem 1)</option>
                                    <option value="Adv Latin: Selected Readings (Sem 2)">Adv Latin: Selected Readings (Sem 2)</option>
                                    <option value="Latin 1">Latin 1</option>
                                    <option value="Latin 2">Latin 2</option>
                                    <option value="Latin 3">Latin 3</option>
                                    <option value="Latin 4: Lit of the Golden Age">Latin 4: Lit of the Golden Age</option>


                                    <option disabled>Computer Programming</option>
                                    <option value="Computer Science 1 (1/2)">Computer Science 1 (1/2)</option>
                                    <option value="Computer Science 2 (Sem 1)">Computer Science 2 (Sem 1)</option>
                                    <option value="Computer Science 2 (1/2)">Computer Science 2 (1/2)</option>
                                    <option value="Adv Comp Science: AI (1/2)">Adv Comp Science: AI (1/2)</option>
                                    <option value="Adv Comp Science: AI (Sem 2)">Adv Comp Science: AI (Sem 2)</option>
                                    <option value="Adv Comp Sci: Applications (1/2)">Adv Comp Sci: Applications (1/2)</option>
                                    <option value="Adv Comp Sci: Applications (Sem 2)">Adv Comp Sci: Applications (Sem 2)</option>
                                    <option value="Advanced Topics in Computer Science">Advanced Topics in Computer Science</option>
                                    <option value="Advanced Topics in Computer Science (1/2)">Advanced Topics in Computer Science (1/2)</option>
                                    <option value="Applied Engineering & Design (1/2)">Applied Engineering & Design (1/2)</option>


                                    <option disabled>Modern Language</option>
                                    <option value="Chinese 1">Chinese 1</option>
                                    <option value="Chinese 1P (Prior Study)">Chinese 1P (Prior Study)</option>
                                    <option value="Chinese 2">Chinese 2</option>
                                    <option value="Chinese 2 (Honors)">Chinese 2 (Honors)</option>
                                    <option value="Chinese 3">Chinese 3</option>
                                    <option value="Chinese 3 (Honors)">Chinese 3 (Honors)</option>
                                    <option value="Chinese 4">Chinese 4</option>
                                    <option value="Chinese 4 (Honors)">Chinese 4 (Honors)</option>
                                    <option value="Chinese 5">Chinese 5</option>
                                    <option value="Chinese 5 (Honors)">Chinese 5 (Honors)</option>
                                    <option value="Advanced Topics Chinese (1/2)">Advanced Topics Chinese (1/2)</option>
                                    <option value="Chinese Literature">Chinese Literature</option>
                                    <option value="Major Issues in 20th Century China">Major Issues in 20th Century China</option>
                                    <option value="French 1">French 1</option>
                                    <option value="French 1P (Prior Study)">French 1P (Prior Study)</option>
                                    <option value="French 2">French 2</option>
                                    <option value="French 2 (Honors)">French 2 (Honors)</option>
                                    <option value="French 3">French 3</option>
                                    <option value="French 3 (Honors)">French 3 (Honors)</option>
                                    <option value="French 4: Culture & Literature">French 4: Culture & Literature</option>
                                    <option value="French 4 (Honors)">French 4 (Honors)</option>
                                    <option value="French 5: Francophone (Sem 1)">French 5: Francophone (Sem 1)</option>
                                    <option value="French 5 (Honors): Exploration of Lit">French 5 (Honors): Exploration of Lit</option>
                                    <option value="French 5: Film & Soc (Sem 2)">French 5: Film & Soc (Sem 2)</option>
                                    <option value="French 6: Adv Studies (1/2)">French 6: Adv Studies (1/2)</option>
                                    <option value="Spanish 1">Spanish 1</option>
                                    <option value="Spanish 1P (Prior Study)">Spanish 1P (Prior Study)</option>
                                    <option value="Spanish 2">Spanish 2</option>
                                    <option value="Spanish 2/3 (Accelerated)">Spanish 2/3 (Accelerated)</option>
                                    <option value="Spanish 2 (Honors)">Spanish 2 (Honors)</option>
                                    <option value="Spanish 3">Spanish 3</option>
                                    <option value="Spanish 3 (Honors)">Spanish 3 (Honors)</option>
                                    <option value="Spanish 4: Cultural Legacies">Spanish 4: Cultural Legacies</option>
                                    <option value="Spanish 4 (Honors)">Spanish 4 (Honors)</option>
                                    <option value="Spanish 5: Latin Amer (Sem 1)">Spanish 5: Latin Amer (Sem 1)</option>
                                    <option value="Spanish 5 (Honors)">Spanish 5 (Honors)</option>
                                    <option value="Spanish 5: El Caribe (Sem 2)">Spanish 5: El Caribe (Sem 2)</option>
                                    <option value="Advanced Topics Spanish (1/2)">Advanced Topics Spanish (1/2)</option>

                                    <option disabled>History / Social Science</option>
                                    <option value="Adv Hist: Af-American Hist (Sem 1)">Adv Hist: Af-American Hist (Sem 1)</option>
                                    <option value="American Gov't & Politics (Sem 1)">American Gov't & Politics (Sem 1)</option>
                                    <option value="Adv Hist: Asian American Hist (Sem 2)">Adv Hist: Asian American Hist (Sem 2)</option>
                                    <option value="Adv Hist: Aztecs-High Tech (Sem 2)">Adv Hist: Aztecs-High Tech (Sem 2)</option>
                                    <option value="Behavioral Economics (Sem 2)">Behavioral Economics (Sem 2)</option>
                                    <option value="Comparative Gov't (Sem 2)">Comparative Gov't (Sem 2)</option>
                                    <option value="Adv Hist: Civil Rights (Sem 2)">Adv Hist: Civil Rights (Sem 2)</option>
                                    <option value="Economic Inequality (Sem 1)">Economic Inequality (Sem 1)</option>
                                    <option value="Global Economics (Sem 2)">Global Economics (Sem 2)</option>
                                    <option value="Adv Hist: Global & Islam (Sem 2)">Adv Hist: Global & Islam (Sem 2)</option>
                                    <option value="Adv Hist: Historical Archeology (1/2)">Adv Hist: Historical Archeology (1/2)</option>
                                    <option value="Activism Justice Dig World (1/2)">Activism Justice Dig World (1/2)</option>
                                    <option value="Macroeconomics (Sem 1)">Macroeconomics (Sem 1)</option>
                                    <option value="Macroeconomics (Sem 2)">Macroeconomics (Sem 2)</option>
                                    <option value="Adv Hist: Modern China (Sem 1)">Adv Hist: Modern China (Sem 1)</option>
                                    <option value="Adv Hist: Middle East (Sem 1)">Adv Hist: Middle East (Sem 1)</option>
                                    <option value="Microeconomics (Sem 1)">Microeconomics (Sem 1)</option>
                                    <option value="Microeconomics (Sem 2)">Microeconomics (Sem 2)</option>
                                    <option value="Topics in Psychology (1/2)">Topics in Psychology (1/2)</option>
                                    <option value="Psychology Seminar">Psychology Seminar</option>
                                    <option value="Adv Hist: Topics/Modern Wld (Sem 1)">Adv Hist: Topics/Modern Wld (Sem 1)</option>
                                    <option value="U.S. History">U.S. History</option>
                                    <option value="U.S. History: Class III">U.S. History: Class III</option>
                                    <option value="The U.S. in the Modern World 1">The U.S. in the Modern World 1</option>
                                    <option value="The U.S. in the Modern World 2">The U.S. in the Modern World 2</option>
                                    <option value="World History: Challenges & Changemakers">World History: Challenges & Changemakers</option>
                                    <option value="World History: Challenges & Changemakers">World History: Challenges & Changemakers</option>


                                    <option disabled>Mathamatics</option>
                                    <option value="Algebra 1 & Geometry">Algebra 1 & Geometry</option>
                                    <option value="Proof & Problem Solving">Proof & Problem Solving</option>
                                    <option value="Algebraic Concepts (Honors)">Algebraic Concepts (Honors)</option>
                                    <option value="Algebraic Concepts">Algebraic Concepts</option>
                                    <option value="Advanced Functions (Honors)">Advanced Functions (Honors)</option>
                                    <option value="Advanced Functions w/Comp Science (Honors)">Advanced Functions w/Comp Science (Honors)</option>
                                    <option value="Advanced Functions">Advanced Functions</option>
                                    <option value="Mathematics & Art (1/2)">Mathematics & Art (1/2)</option>
                                    <option value="Adv. Statistical Methods (Honors)">Adv. Statistical Methods (Honors)</option>
                                    <option value="Multivariable Calculus">Multivariable Calculus</option>
                                    <option value="Statistics (Honors)">Statistics (Honors)</option>
                                    <option value="Statistics">Statistics</option>
                                    <option value="Advanced Topics in Math (Sem 1)">Advanced Topics in Math (Sem 1)</option>
                                    <option value="Advanced Topics in Math (Sem 2)">Advanced Topics in Math (Sem 2)</option>
                                    <option value="Calc & Applied Econ (Honors)">Calc & Applied Econ (Honors)</option>
                                    <option value="Calculus (Honors)">Calculus (Honors)</option>
                                    <option value="Calculus">Calculus</option>
                                    <option value="Calculus (Accelerated)">Calculus (Accelerated)</option>
                                    <option value="Advanced Calculus & Stats (Honors)">Advanced Calculus & Stats (Honors)</option>
                                    <option value="Linear & Abstract Algebra">Linear & Abstract Algebra</option>


                                    <option disabled>Science</option>
                                    <option value="Advanced Biology">Advanced Biology</option>
                                    <option value="Advanced Chemistry">Advanced Chemistry</option>
                                    <option value="Advanced Environmental Science">Advanced Environmental Science</option>
                                    <option value="Anatomy & Physiology (Sem 1)">Anatomy & Physiology (Sem 1)</option>
                                    <option value="Anatomy & Physiology (Sem 2)">Anatomy & Physiology (Sem 2)</option>
                                    <option value="Advanced Physics">Advanced Physics</option>
                                    <option value="Observational Astronomy (Sem 1)">Observational Astronomy (Sem 1)</option>
                                    <option value="Biology">Biology</option>
                                    <option value="Chemistry">Chemistry</option>
                                    <option value="Engineering The Future (1/2)">Engineering The Future (1/2)</option>
                                    <option value="Issues in Enviro Science (Sem 1)">Issues in Enviro Science (Sem 1)</option>
                                    <option value="Issues in Enviro Science (Sem 2)">Issues in Enviro Science (Sem 2)</option>
                                    <option value="Geology (1/2)">Geology (1/2)</option>
                                    <option value="Biology (Honors)">Biology (Honors)</option>
                                    <option value="Chemistry (Honors)">Chemistry (Honors)</option>
                                    <option value="Science in the Modern Age (1/2)">Science in the Modern Age (1/2)</option>
                                    <option value="Marine Science (Sem 1)">Marine Science (Sem 1)</option>
                                    <option value="Marine Science (Sem 2)">Marine Science (Sem 2)</option>
                                    <option value="Molecular Genetics 1 (Sem 1)">Molecular Genetics 1 (Sem 1)</option>
                                    <option value="Molecular Genetics 2 (Sem 2)">Molecular Genetics 2 (Sem 2)</option>
                                    <option value="Neuroscience">Neuroscience</option>
                                    <option value="Organic Chemistry 1 (Sem 1)">Organic Chemistry 1 (Sem 1)</option>
                                    <option value="Organic Chemistry 2 (Sem 2)">Organic Chemistry 2 (Sem 2)</option>
                                    <option value="Physics: Class IV">Physics: Class IV</option>
                                    <option value="Physics">Physics</option>

                                </select>
                            </div>

                            <div className="dropdown">
                                <p></p>
                                <input placeholder="Add Your Teacher's Email" className="txt-Box2"  value={email1} onChange={(e)=> setEmail1(e.target.value)}/>

                                <input placeholder="When can you meet?" className="txt-Box2"  value={free} onChange={(e)=> setFree(e.target.value)}/>
                            </div>



                            <div className="custom-pad"><input type="submit" className="conf-button" ></input></div>
                        </form>

                    </div>

                </div>

                <div className="column">
                    <div className="profComp">
                        <p>Add a subject to tutor</p>
                        <form id="subject-form" onSubmit={ onSubmit2 }>
                            <div className="dropdown">
                                <select className="dropbtn" onChange={(e)=> setClass2(e.target.value)}>

                                    <option selected disabled className="dropbtn-Title">Select a course</option>
                                    <option disabled>Classics</option>
                                    <option value="Intensive Classical Greek">Intensive Classical Greek</option>
                                    <option value="Adv Greek: Plato">Adv Greek: Plato</option>
                                    <option value="Latin 2/3 (Accelerated)">Latin 2/3 (Accelerated)</option>
                                    <option value="Latin Literature (AP)">Latin Literature (AP)</option>
                                    <option value="Adv Latin: Roman Historians (1/2)">Adv Latin: Roman Historians (1/2)</option>
                                    <option value="Adv Latin: Roman Philosophy (Sem 1)">Adv Latin: Roman Philosophy (Sem 1)</option>
                                    <option value="Adv Latin: Selected Readings (Sem 2)">Adv Latin: Selected Readings (Sem 2)</option>
                                    <option value="Latin 1">Latin 1</option>
                                    <option value="Latin 2">Latin 2</option>
                                    <option value="Latin 3">Latin 3</option>
                                    <option value="Latin 4: Lit of the Golden Age">Latin 4: Lit of the Golden Age</option>


                                    <option disabled>Computer Programming</option>
                                    <option value="Computer Science 1 (1/2)">Computer Science 1 (1/2)</option>
                                    <option value="Computer Science 2 (Sem 1)">Computer Science 2 (Sem 1)</option>
                                    <option value="Computer Science 2 (1/2)">Computer Science 2 (1/2)</option>
                                    <option value="Adv Comp Science: AI (1/2)">Adv Comp Science: AI (1/2)</option>
                                    <option value="Adv Comp Science: AI (Sem 2)">Adv Comp Science: AI (Sem 2)</option>
                                    <option value="Adv Comp Sci: Applications (1/2)">Adv Comp Sci: Applications (1/2)</option>
                                    <option value="Adv Comp Sci: Applications (Sem 2)">Adv Comp Sci: Applications (Sem 2)</option>
                                    <option value="Advanced Topics in Computer Science">Advanced Topics in Computer Science</option>
                                    <option value="Advanced Topics in Computer Science (1/2)">Advanced Topics in Computer Science (1/2)</option>
                                    <option value="Applied Engineering & Design (1/2)">Applied Engineering & Design (1/2)</option>


                                    <option disabled>Modern Language</option>
                                    <option value="Chinese 1">Chinese 1</option>
                                    <option value="Chinese 1P (Prior Study)">Chinese 1P (Prior Study)</option>
                                    <option value="Chinese 2">Chinese 2</option>
                                    <option value="Chinese 2 (Honors)">Chinese 2 (Honors)</option>
                                    <option value="Chinese 3">Chinese 3</option>
                                    <option value="Chinese 3 (Honors)">Chinese 3 (Honors)</option>
                                    <option value="Chinese 4">Chinese 4</option>
                                    <option value="Chinese 4 (Honors)">Chinese 4 (Honors)</option>
                                    <option value="Chinese 5">Chinese 5</option>
                                    <option value="Chinese 5 (Honors)">Chinese 5 (Honors)</option>
                                    <option value="Advanced Topics Chinese (1/2)">Advanced Topics Chinese (1/2)</option>
                                    <option value="Chinese Literature">Chinese Literature</option>
                                    <option value="Major Issues in 20th Century China">Major Issues in 20th Century China</option>
                                    <option value="French 1">French 1</option>
                                    <option value="French 1P (Prior Study)">French 1P (Prior Study)</option>
                                    <option value="French 2">French 2</option>
                                    <option value="French 2 (Honors)">French 2 (Honors)</option>
                                    <option value="French 3">French 3</option>
                                    <option value="French 3 (Honors)">French 3 (Honors)</option>
                                    <option value="French 4: Culture & Literature">French 4: Culture & Literature</option>
                                    <option value="French 4 (Honors)">French 4 (Honors)</option>
                                    <option value="French 5: Francophone (Sem 1)">French 5: Francophone (Sem 1)</option>
                                    <option value="French 5 (Honors): Exploration of Lit">French 5 (Honors): Exploration of Lit</option>
                                    <option value="French 5: Film & Soc (Sem 2)">French 5: Film & Soc (Sem 2)</option>
                                    <option value="French 6: Adv Studies (1/2)">French 6: Adv Studies (1/2)</option>
                                    <option value="Spanish 1">Spanish 1</option>
                                    <option value="Spanish 1P (Prior Study)">Spanish 1P (Prior Study)</option>
                                    <option value="Spanish 2">Spanish 2</option>
                                    <option value="Spanish 2/3 (Accelerated)">Spanish 2/3 (Accelerated)</option>
                                    <option value="Spanish 2 (Honors)">Spanish 2 (Honors)</option>
                                    <option value="Spanish 3">Spanish 3</option>
                                    <option value="Spanish 3 (Honors)">Spanish 3 (Honors)</option>
                                    <option value="Spanish 4: Cultural Legacies">Spanish 4: Cultural Legacies</option>
                                    <option value="Spanish 4 (Honors)">Spanish 4 (Honors)</option>
                                    <option value="Spanish 5: Latin Amer (Sem 1)">Spanish 5: Latin Amer (Sem 1)</option>
                                    <option value="Spanish 5 (Honors)">Spanish 5 (Honors)</option>
                                    <option value="Spanish 5: El Caribe (Sem 2)">Spanish 5: El Caribe (Sem 2)</option>
                                    <option value="Advanced Topics Spanish (1/2)">Advanced Topics Spanish (1/2)</option>

                                    <option disabled>History / Social Science</option>
                                    <option value="Adv Hist: Af-American Hist (Sem 1)">Adv Hist: Af-American Hist (Sem 1)</option>
                                    <option value="American Gov't & Politics (Sem 1)">American Gov't & Politics (Sem 1)</option>
                                    <option value="Adv Hist: Asian American Hist (Sem 2)">Adv Hist: Asian American Hist (Sem 2)</option>
                                    <option value="Adv Hist: Aztecs-High Tech (Sem 2)">Adv Hist: Aztecs-High Tech (Sem 2)</option>
                                    <option value="Behavioral Economics (Sem 2)">Behavioral Economics (Sem 2)</option>
                                    <option value="Comparative Gov't (Sem 2)">Comparative Gov't (Sem 2)</option>
                                    <option value="Adv Hist: Civil Rights (Sem 2)">Adv Hist: Civil Rights (Sem 2)</option>
                                    <option value="Economic Inequality (Sem 1)">Economic Inequality (Sem 1)</option>
                                    <option value="Global Economics (Sem 2)">Global Economics (Sem 2)</option>
                                    <option value="Adv Hist: Global & Islam (Sem 2)">Adv Hist: Global & Islam (Sem 2)</option>
                                    <option value="Adv Hist: Historical Archeology (1/2)">Adv Hist: Historical Archeology (1/2)</option>
                                    <option value="Activism Justice Dig World (1/2)">Activism Justice Dig World (1/2)</option>
                                    <option value="Macroeconomics (Sem 1)">Macroeconomics (Sem 1)</option>
                                    <option value="Macroeconomics (Sem 2)">Macroeconomics (Sem 2)</option>
                                    <option value="Adv Hist: Modern China (Sem 1)">Adv Hist: Modern China (Sem 1)</option>
                                    <option value="Adv Hist: Middle East (Sem 1)">Adv Hist: Middle East (Sem 1)</option>
                                    <option value="Microeconomics (Sem 1)">Microeconomics (Sem 1)</option>
                                    <option value="Microeconomics (Sem 2)">Microeconomics (Sem 2)</option>
                                    <option value="Topics in Psychology (1/2)">Topics in Psychology (1/2)</option>
                                    <option value="Psychology Seminar">Psychology Seminar</option>
                                    <option value="Adv Hist: Topics/Modern Wld (Sem 1)">Adv Hist: Topics/Modern Wld (Sem 1)</option>
                                    <option value="U.S. History">U.S. History</option>
                                    <option value="U.S. History: Class III">U.S. History: Class III</option>
                                    <option value="The U.S. in the Modern World 1">The U.S. in the Modern World 1</option>
                                    <option value="The U.S. in the Modern World 2">The U.S. in the Modern World 2</option>
                                    <option value="World History: Challenges & Changemakers">World History: Challenges & Changemakers</option>
                                    <option value="World History: Challenges & Changemakers">World History: Challenges & Changemakers</option>


                                    <option disabled>Mathamatics</option>
                                    <option value="Algebra 1 & Geometry">Algebra 1 & Geometry</option>
                                    <option value="Proof & Problem Solving">Proof & Problem Solving</option>
                                    <option value="Algebraic Concepts (Honors)">Algebraic Concepts (Honors)</option>
                                    <option value="Algebraic Concepts">Algebraic Concepts</option>
                                    <option value="Advanced Functions (Honors)">Advanced Functions (Honors)</option>
                                    <option value="Advanced Functions w/Comp Science (Honors)">Advanced Functions w/Comp Science (Honors)</option>
                                    <option value="Advanced Functions">Advanced Functions</option>
                                    <option value="Mathematics & Art (1/2)">Mathematics & Art (1/2)</option>
                                    <option value="Adv. Statistical Methods (Honors)">Adv. Statistical Methods (Honors)</option>
                                    <option value="Multivariable Calculus">Multivariable Calculus</option>
                                    <option value="Statistics (Honors)">Statistics (Honors)</option>
                                    <option value="Statistics">Statistics</option>
                                    <option value="Advanced Topics in Math (Sem 1)">Advanced Topics in Math (Sem 1)</option>
                                    <option value="Advanced Topics in Math (Sem 2)">Advanced Topics in Math (Sem 2)</option>
                                    <option value="Calc & Applied Econ (Honors)">Calc & Applied Econ (Honors)</option>
                                    <option value="Calculus (Honors)">Calculus (Honors)</option>
                                    <option value="Calculus">Calculus</option>
                                    <option value="Calculus (Accelerated)">Calculus (Accelerated)</option>
                                    <option value="Advanced Calculus & Stats (Honors)">Advanced Calculus & Stats (Honors)</option>
                                    <option value="Linear & Abstract Algebra">Linear & Abstract Algebra</option>


                                    <option disabled>Science</option>
                                    <option value="Advanced Biology">Advanced Biology</option>
                                    <option value="Advanced Chemistry">Advanced Chemistry</option>
                                    <option value="Advanced Environmental Science">Advanced Environmental Science</option>
                                    <option value="Anatomy & Physiology (Sem 1)">Anatomy & Physiology (Sem 1)</option>
                                    <option value="Anatomy & Physiology (Sem 2)">Anatomy & Physiology (Sem 2)</option>
                                    <option value="Advanced Physics">Advanced Physics</option>
                                    <option value="Observational Astronomy (Sem 1)">Observational Astronomy (Sem 1)</option>
                                    <option value="Biology">Biology</option>
                                    <option value="Chemistry">Chemistry</option>
                                    <option value="Engineering The Future (1/2)">Engineering The Future (1/2)</option>
                                    <option value="Issues in Enviro Science (Sem 1)">Issues in Enviro Science (Sem 1)</option>
                                    <option value="Issues in Enviro Science (Sem 2)">Issues in Enviro Science (Sem 2)</option>
                                    <option value="Geology (1/2)">Geology (1/2)</option>
                                    <option value="Biology (Honors)">Biology (Honors)</option>
                                    <option value="Chemistry (Honors)">Chemistry (Honors)</option>
                                    <option value="Science in the Modern Age (1/2)">Science in the Modern Age (1/2)</option>
                                    <option value="Marine Science (Sem 1)">Marine Science (Sem 1)</option>
                                    <option value="Marine Science (Sem 2)">Marine Science (Sem 2)</option>
                                    <option value="Molecular Genetics 1 (Sem 1)">Molecular Genetics 1 (Sem 1)</option>
                                    <option value="Molecular Genetics 2 (Sem 2)">Molecular Genetics 2 (Sem 2)</option>
                                    <option value="Neuroscience">Neuroscience</option>
                                    <option value="Organic Chemistry 1 (Sem 1)">Organic Chemistry 1 (Sem 1)</option>
                                    <option value="Organic Chemistry 2 (Sem 2)">Organic Chemistry 2 (Sem 2)</option>
                                    <option value="Physics: Class IV">Physics: Class IV</option>
                                    <option value="Physics">Physics</option>
                                </select>
                            </div>

                            <div className="dropdown">
                            </div>
                            <p></p>
                            <input placeholder="Enter Teacher's Email For Approval" className="txt-Box2" value={email2} onChange={(e)=> setEmail2(e.target.value)}/>
                            <div className="custom-pad"><input type="submit" className="conf-button"></input></div>
                        </form>
                    </div>

                </div>

            </div>


        </div>

    );
}
export default TutorRequest;
