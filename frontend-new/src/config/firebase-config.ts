import { getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import { initializeApp } from "firebase/app"
import { getFirestore, collection, query, where, getDocs, addDoc} from "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyAPHfLRVwiyFCPaJdcOabfNKF5J23L-2Hc",
    authDomain: "milton-tutor.firebaseapp.com",
    projectId: "milton-tutor",
    storageBucket: "milton-tutor.appspot.com",
    messagingSenderId: "359882636602",
    appId: "1:359882636602:web:40073c0f7b9b748e31a403",
    measurementId: "G-PVHQHRBWKV"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
let user = null;
const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
    try {
        const res = await signInWithPopup(auth, googleProvider);
        user = res.user;
        const q = query(collection(db, "users"),
            where("uid", "==", user.uid));
        const docs = await getDocs(q);
        if (docs.size === 0) {
            await addDoc(collection(db, "users"),{
                uid: user.uid,
                name: user.displayName,
                authProvider: "google",
                email: user.email,
            });
        }
    } catch (err:any) {
        console.error(err);
        alert(err.message);
    }
};

const logout = () => {
    auth.signOut();
};
export {
    auth,
    user,
    db,
    signInWithGoogle,
    logout,
    collection
};

