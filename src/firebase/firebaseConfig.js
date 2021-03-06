//firebase setup
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";


const firebaseConfig = {
    apiKey: "dummy",
    authDomain: "techmenta-site.firebaseapp.com",
    projectId: "techmenta-site",
    storageBucket: "techmenta-site.appspot.com",
    messagingSenderId: "dumy",
    appId: "dummy",
    measurementId: "dummy"
};

firebase.initializeApp(firebaseConfig);


firebase.getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = firebase.auth().onAuthStateChanged(user => {
            unsubscribe();
            resolve(user);
        }, reject);
    })
};

export default firebase;
