import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyD3uNfsltl3-9InquFfMHDF4ev-mGKWoes",
    authDomain: "corwn-db-1ab0e.firebaseapp.com",
    projectId: "corwn-db-1ab0e",
    storageBucket: "corwn-db-1ab0e.appspot.com",
    messagingSenderId: "711414251153",
    appId: "1:711414251153:web:e408afb0592da89157c930"
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});
export const singInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;