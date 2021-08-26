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
        subjectsPending: [],

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

        usersRef.doc(String(req.query.uid)).update(newTutor).then(() => {
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

export const addDorm = functions.https.onRequest(
    async (req: any, res: any) => {
        const newUserPrefs = {
            dorm: req.query.dorm,
        };

        const usersRef = db().collection("users");

        usersRef.doc(String(req.query.uid)).update(newUserPrefs).then(() => {
            res.status(200).json({
                result: "success",
                tuteeInfo: newUserPrefs,
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

export const setAvailability = functions.https.onRequest(
    async (req: any, res: any) => {
        const newUserPrefs = {
            available: (req.query.availability==="true"),
        };

        const usersRef = db().collection("users");

        usersRef.doc(String(req.query.uid)).update(newUserPrefs).then(() => {
            res.status(200).json({
                result: "success",
                availability: newUserPrefs,
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

export const addFreePeriod = functions.https.onRequest(
    async (req: any, res: any) => {
        // const newUserPrefs = {
        //     availability: (req.query.availability==="true"),
        // };

        const usersRef = db().collection("users");

        usersRef.doc(String(req.query.uid)).get().then((doc) => {
            const currentFrees = doc.data()?.freePeriods;
            if (!currentFrees.includes(req.query.period)) {
                currentFrees.push(req.query.period);
            }
            usersRef.doc(String(req.query.uid)).update({
                freePeriods: currentFrees,
            });
            res.status(200).json({
                result: "success",
                frees: currentFrees,
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

export const deleteFreePeriod = functions.https.onRequest(
    async (req: any, res: any) => {
        // const newUserPrefs = {
        //     availability: (req.query.availability==="true"),
        // };

        const usersRef = db().collection("users");

        usersRef.doc(String(req.query.uid)).get().then((doc) => {
            const currentFrees = doc.data()?.freePeriods;
            for (let i=0; i < currentFrees.length(); i++) {
                if (currentFrees[i] === (req.query.periodToDelete)) {
                currentFrees.splice(i);
                }
            }
            usersRef.doc(String(req.query.uid)).update({
                freePeriods: currentFrees,
            });
            res.status(200).json({
                result: "success",
                frees: currentFrees,
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

export const makePairing = functions.https.onRequest(
    async (req: any, res: any) => {
        const usersRef = db().collection("matches");

        usersRef.add({
            tutee: req.query.tuteeUid,
            tutor: req.query.tutorUid,
            subject: req.query.subject,
        }).then(() => {
            res.status(200).json({
                result: "success",
            });
        }).catch((error: any) => {
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

        usersRef.doc(String(req.query.uid)).update(newTutee).then(() => {
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
            const tutorsRef = db().collection("users");
            const allAvailableTutors = await tutorsRef
            .where("available", "==", true)
            .where("isTutor", "==", true).get();

            const forbesArray: any[] = [];
            const norrisArray: any[] = [];
            const wolcottArray: any[] = [];
            const goodwinArray: any[] = [];
            const robbinsArray: any[] = [];
            const milletArray: any[] = [];
            const hallowellArray: any[] = [];
            const hathawayArray: any[] = [];
            const dayArray: any[] = [];

            for (let i=0; i<allAvailableTutors.docs.length; i++) {
                // result[<string>allAvailableTutors.docs[i].data()["dorm"]]
                // .push(allAvailableTutors.docs[i].data());
                const user = allAvailableTutors.docs[i].data();
                // result[user.dorm.toString].push(user);
                const userLowCaseDorm = (user.dorm as string).toLowerCase();
                if (userLowCaseDorm == "forbes") {
                    forbesArray.push(user);
                } else if (userLowCaseDorm == "norris") {
                    norrisArray.push(user);
                } else if (userLowCaseDorm == "wolcott") {
                    wolcottArray.push(user);
                } else if (userLowCaseDorm == "goodwin") {
                    goodwinArray.push(user);
                } else if (userLowCaseDorm == "robbins") {
                    robbinsArray.push(user);
                } else if (userLowCaseDorm == "millet") {
                    milletArray.push(user);
                } else if (userLowCaseDorm == "hallowell") {
                    hallowellArray.push(user);
                } else if (userLowCaseDorm == "hathaway") {
                    hathawayArray.push(user);
                } else if (userLowCaseDorm == "day") {
                    dayArray.push(user);
                }
            }

            const result = {
                forbes: forbesArray,
                norris: norrisArray,
                wolcott: wolcottArray,
                goodwin: goodwinArray,
                robbins: robbinsArray,
                millet: milletArray,
                hallowell: hallowellArray,
                hathaway: hathawayArray,
                day: dayArray,
                unsorted: allAvailableTutors.docs,
            };

            res.status(200).json({
                result: "success",
                tutors: result,
            });
        });
