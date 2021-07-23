import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();
const db = admin.firestore;

exports.createUser = functions.auth.user().onCreate(async (user) => {
    const gradYear = user.email?.split("@")[0]
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
        dorm: "",
        cellPhone: "",
    };

    const usersRef = db().collection("users");

    await usersRef.doc(String(user.uid)).set(newUser);
});

export const addTutor = functions.https.onRequest(
    async (req: any, res: any) => {
        const newTutor = {
            available: true,
            subjectsToTutor: [],
        };

        const usersRef = db().collection("tutors");

        usersRef.doc(String(req.body.uid)).set(newTutor).then(() => {
            res.status(200).json({
                result: "success",
                tuteeInfo: newTutor,
            });
        }
        ).catch((error: any) => {
            res.status(200).json({
                result: "error: could not set document",
                error: error,
            });
        }
        );
    });

export const addTutee = functions.https.onRequest(
    async (req: any, res: any) => {
        const newTutee = {
            requestPending: false,
            subjectsNeeded: [],
        };

        const usersRef = db().collection("tutees");

        usersRef.doc(String(req.body.uid)).set(newTutee).then(() => {
            res.status(200).json({
                result: "success",
                tuteeInfo: newTutee,
            });
        }
        ).catch((error: any) => {
            res.status(200).json({
                result: "error: could not set document",
                error: error,
            });
        }
        );
    });

    export const getTutorByDorm = functions.https.onRequest(
        async (req: any, res: any) => {
            const usersRef = db().collection("users");
            const tutorsByDorm = await usersRef
            .where("dorm", "==", req.query.dorm)
            .where("isTutor", "==", true).get();
            res.status(200).json({
                result: "success",
                tutors: tutorsByDorm,
                dorm: req.query.dorm,
            });
        });

    // export const getAvailableTutorsInDorms = functions.https.onRequest(
    //     async (req: any, res: any) => {
    //         const tutorsRef = db().collection("tutors");
    //         const availableTutorsByDorm = await tutorsRef
    //         .where("isAvailable", "==", true)
    //         .where("isTutor", "==", true).get();
    //         res.status(200).json({
    //             result: "success",
    //             tutors: availableTutorsByDorm,
    //             dorm: req.query.dorm,
    //         });
    //     });
