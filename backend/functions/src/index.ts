import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as express from 'express';
// import * as cors from 'cors';
// import * as bodyParser from 'body-parser';
// import * as Datetime from 'react-datetime';

admin.initializeApp();

const app = express();

app.get('/', async (req, res) => {
    const snapshot = await admin.firestore().collection('users').get();
    const users:any = [];
    snapshot.forEach((doc) => {
        const id = doc.id;
        const data = doc.data;

        users.push({ id, ...data });
    });

    res.status(200).send(JSON.stringify(users));
});

app.get('/:id', async (req, res) => {
    const snapshot = await admin.firestore().collection('users').doc(req.params.id).get();

    const userId = snapshot.id;
    const userData = snapshot.data;

    res.status(200).send(JSON.stringify({ id: userId, ...userData }));
});

app.post('/', async (req, res) => {
    const user = req.body;

    await admin.firestore().collection('users').add(user);

    res.status(201).send();
});

exports.user = functions.https.onRequest(app);


exports.helloWorld = functions.https.onRequest((req, res) => {
    res.send('hello');
});

// admin.initializeApp(functions.config().firebase);

// const app=express()
// const main=express()

// main.use('/Myapi',app)
// main.use(bodyParser.json())
// main.use(bodyParser.urlencoded({extended:false}))

// const db=admin.firestore()
// export const webApi=functions.https.onRequest(main)

// interface User
// {
//     userEmail:String,
//     gradYear:Number,
//     createDate:Date,
//     displayName:String,
//     calendarEvents:[String, Datetime, Datetime,
//  Number, String, Boolean, Boolean],
//     isTutor:Boolean,
//     dorm:String,
//     cellPhone:Number
// }

// app.post('/addUser', async(req,res)=>{
//     const user:User={
//          userEmail:
//     }
// })


// const db = admin.firestore;

// exports.createUser = functions.auth.user().onCreate(async (user) => {
//     const gradYear = user.email?.split('@')[0]
//         .substr(user.email?.split('@')[0].length - 2);
//     // if(!isNaN(gradYear)){

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

//     const userRef = db().collection('users');

//     await userRef.doc(String(user.uid)).set(newUser);
// });

// export const addTutor = functions.https.onRequest(
//     async (req: any, res: any) => {
//         const newTutor = {
//             available: true,
//             subjectsToTutor: [],
//         };

//         const userRef = db().collection('tutors');

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

// export const addTutee = functions.https.onRequest(
//     async (req: any, res: any) => {
//         const newTutee = {
//             requestPending: false,
//             subjectsNeeded: [],
//         };

//         const userRef = db().collection('tutees');

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