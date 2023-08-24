import emailjs from "emailjs-com";
import {getDocs, query} from "firebase/firestore";
import {collection} from "@firebase/firestore";
import {db, storage} from "../config/firebase-config.ts";
import {getDownloadURL, ref} from "firebase/storage";
import Papa from 'papaparse';
export function sendEmail(templateId:string, templateParams:Record<string, unknown>){
    emailjs.send("service_jsnvh9j", templateId, templateParams, "user_QdL21uWEOg0m5JaXOC1LF")
        .then((result) => {
            console.log(result.text);

        }, (error) => {
            console.log(error.text);
        });
}
export async function findTutorEmails(c: string) {
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
export async function getCsv(gsUrl: string): Promise<any> {
    const url = await getDownloadURL(ref(storage, gsUrl))
    const results = await new Promise(resolve => {
        Papa.parse(url, {
            download: true,
            complete: results => resolve(results),
            header: true
        })
    })
    return results;
}

