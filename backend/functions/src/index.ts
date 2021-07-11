import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();
let db = admin.firestore;

exports.createUser = functions.auth.user().onCreate(async (user) => {
    let gradYear;
    gradYear = user.email?.split("@")[0]
        .substr(user.email?.split("@")[0].length - 2);
    // if(!isNaN(gradYear)){

    // }
    const newUser = {
        email: user.email,
        gradYear: gradYear,
        createDate: db.FieldValue.serverTimestamp(),
        displayName: user.displayName,
        freePeriods: [],
        isTutor: false,
        isTutee: false,
        tutorAvailable: false,
        subjectsCanTutor: [],
        subjectsNeededTutor: [],
        dorm: "",
        requestPending: false,
        cellPhone: "",
    };

    const userRef = db().collection("users");

    await userRef.doc(String(user.uid)).set(newUser);
});
