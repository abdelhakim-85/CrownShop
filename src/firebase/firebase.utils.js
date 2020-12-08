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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const {
            displayName,
            email
        } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});
export const singInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;