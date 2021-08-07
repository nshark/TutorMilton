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
        available: false,
        subjectsToTutor: [],
        requestPending: false,
        subjectsNeeded: [],

    };

    const usersRef = db().collection("users");

    await usersRef.doc(String(user.uid)).set(newUser);
});

export const addTutor = functions.https.onRequest(
    async (req: any, res: any) => {
        const newTutor = {
            available: true,
            subjectsToTutor: [],
            isTutor: true,
        };

        const usersRef = db().collection("users");

        usersRef.doc(String(req.body.uid)).update(newTutor).then(() => {
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
            isTutee: true,
        };

        const usersRef = db().collection("users");

        usersRef.doc(String(req.body.uid)).update(newTutee).then(() => {
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

    export const getTutorsInUserDorm = functions.https.onRequest(
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

    export const getAvailableTutorsInDorms = functions.https.onRequest(
        async (req: any, res: any) => {
            const tutorsRef = db().collection("tutors");
            const allAvailableTutors = await tutorsRef
            .where("isAvailable", "==", true)
            .where("isTutor", "==", true).get();

            let forbesArray: any[] = [];
            let norrisArray: any[] = [];
            let wolcottArray: any[] = [];
            let goodwinArray: any[] = [];
            let robbinsArray: any[] = [];
            let milletArray: any[] = [];
            let hallowellArray: any[] = [];
            let hathawayArray: any[] = [];
            let dayArray: any[] = [];

            for (let i=0; i<allAvailableTutors.docs.length; i++){
                //result[<string>allAvailableTutors.docs[i].data()["dorm"]].push(allAvailableTutors.docs[i].data());
                let user = allAvailableTutors.docs[i].data();
                //result[user.dorm.toString].push(user);
                const userLowCaseDorm = (user.dorm as string).toLowerCase();
                if (userLowCaseDorm == "forbes"){
                    forbesArray.push(user);
                }
                else if (userLowCaseDorm == "norris"){
                    norrisArray.push(user);
                }
                else if (userLowCaseDorm == "wolcott"){
                    wolcottArray.push(user);
                }
                else if (userLowCaseDorm == "goodwin"){
                    goodwinArray.push(user);
                }
                else if (userLowCaseDorm == "robbins"){
                    robbinsArray.push(user);
                }
                else if (userLowCaseDorm == "millet"){
                    milletArray.push(user);
                }
                else if (userLowCaseDorm == "hallowell"){
                    hallowellArray.push(user);
                }
                else if (userLowCaseDorm == "hathaway"){
                    hathawayArray.push(user);
                }
                else if (userLowCaseDorm == "day"){
                    dayArray.push(user);
                }
            
            }

            let result = {
                forbes: forbesArray,
                norris: norrisArray,
                wolcott: wolcottArray,
                goodwin: goodwinArray,
                robbins: robbinsArray,
                millet: milletArray,
                hallowell: hallowellArray,
                hathaway: hathawayArray,
                day: dayArray,
            }

            res.status(200).json({
                result: "success",
                tutors: result,
            });

        });

