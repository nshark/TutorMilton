import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp()
var db = admin.firestore

exports.createUser = functions.auth.user().onCreate(async (user) => {
    const newUser = {
      email: user.email,
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
    }
  
    const userRef = db().collection("users");
  
    await userRef.doc(String(user.uid)).set(newUser);
  
  })