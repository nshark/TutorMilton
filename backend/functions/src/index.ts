import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as express from 'express';

admin.initializeApp();
const db = admin.firestore;

exports.createUser = functions.auth.user().onCreate(async (user) => {
    const gradYear = user.email?.split('@')[0]
        .substr(user.email?.split('@')[0].length - 2);
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
        dorm: '',
        cellPhone: '',
    };

    const userRef = db().collection('users');

    await userRef.doc(String(user.uid)).set(newUser);
});

export const addTutor = functions.https.onRequest(
    async (req: any, res: any) => {
        const newTutor = {
            available: true,
            subjectsToTutor: [],
        };

        const userRef = db().collection('tutors');

        userRef.doc(String(req.body.uid)).set(newTutor).then(() => {
            res.status(200).json({
                result: 'success',
                tuteeInfo: newTutor,
            });
        }
        ).catch((error: any) => {
            res.status(200).json({
                result: 'error: could not set document',
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

        const userRef = db().collection('tutees');

        userRef.doc(String(req.body.uid)).set(newTutee).then(() => {
            res.status(200).json({
                result: 'success',
                tuteeInfo: newTutee,
            });
        }
        ).catch((error: any) => {
            res.status(200).json({
                result: 'error: could not set document',
                error: error,
            });
        }
        );
    });