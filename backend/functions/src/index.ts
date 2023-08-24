import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
// eslint-disable-next-line import/no-unresolved
import { getFirestore } from 'firebase-admin/firestore';
import emailjs from 'emailjs-com';
admin.initializeApp();
const db = getFirestore();

// eslint-disable-next-line max-len
exports.reviewEmails = functions.pubsub.schedule('0 0 * * *').onRun(async (context) => {
    // eslint-disable-next-line max-len
    const q = db.collection('/requests').where('reviewed', '==', false).where('closed', '==', false);
    const data = await q.get();
    data.forEach(async (doc) => {
        // eslint-disable-next-line max-len
        if (Date.parse(doc.data().date()) - Date.parse(context.timestamp) >= 604800000) {
            const templateParams: Record<string, unknown> = {
                tutor: doc.data().tutor,
                to_name: doc.data().displayName,
                to_email: doc.data().email,
                link: 'http://tutormilton.com/tuteeReview/?request=' + encodeURIComponent(doc.id),
            };
            // db.collection('/requests').where('id', '==', doc.id);
            // eslint-disable-next-line max-len
            await emailjs.send('service_jsnvh9j', 'template_7vmy7ox', templateParams, 'user_QdL21uWEOg0m5JaXOC1LF');
        }
});
});
//
// exports.createUser = functions.auth.user().onCreate(async (user) => {
//     const gradYear = user.email?.split('@')[0]
//         .substr(user.email?.split('@')[0].length - 2);
//     // if(!isNaN(gradYear)){
//
//     // }
//     const newUser = {
//         email: user.email,
//         gradYear: gradYear,
//         createDate: db.FieldValue.serverTimestamp(),
//         displayName: user.displayName,
//         freePeriods: [],
//         isTutor: false,
//         isTutee: false,
//         dorm: '',
//         cellPhone: '',
//     };
//
//     const userRef = db().collection('users');
//
//     await userRef.doc(String(user.uid)).set(newUser);
// });
//
// export const addTutor = functions.https.onRequest(
//     async (req: any, res: any) => {
//         const newTutor = {
//             available: true,
//             subjectsToTutor: [],
//         };
//
//         const userRef = db().collection('tutors');
//
//         userRef.doc(String(req.body.uid)).set(newTutor).then(() => {
//             res.status(200).json({
//                 result: 'success',
//                 tuteeInfo: newTutor,
//             });
//         }
//         ).catch((error: any) => {
//             res.status(200).json({
//                 result: 'error: could not set document',
//                 error: error,
//             });
//         }
//         );
//     });
//
// export const addTutee = functions.https.onRequest(
//     async (req: any, res: any) => {
//         const newTutee = {
//             requestPending: false,
//             subjectsNeeded: [],
//         };
//
//         const userRef = db().collection('tutees');
//
//         userRef.doc(String(req.body.uid)).set(newTutee).then(() => {
//             res.status(200).json({
//                 result: 'success',
//                 tuteeInfo: newTutee,
//             });
//         }
//         ).catch((error: any) => {
//             res.status(200).json({
//                 result: 'error: could not set document',
//                 error: error,
//             });
//         }
//         );
//     });