import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAPHfLRVwiyFCPaJdcOabfNKF5J23L-2Hc",
    authDomain: "milton-tutor.firebaseapp.com",
    projectId: "milton-tutor",
    storageBucket: "milton-tutor.appspot.com",
    messagingSenderId: "359882636602",
    appId: "1:359882636602:web:40073c0f7b9b748e31a403",
    measurementId: "G-PVHQHRBWKV"
  };

  firebase.initializeApp(firebaseConfig)
  firebase.analytics();

export default firebase;