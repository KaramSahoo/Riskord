import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCxmCNmPYgnmpGSWNcMwKcV5plrD9leiH8",
    authDomain: "riskord-eec3d.firebaseapp.com",
    projectId: "riskord-eec3d",
    storageBucket: "riskord-eec3d.appspot.com",
    messagingSenderId: "736874838380",
    appId: "1:736874838380:web:ab0cba087b1afd95cf5b49",
    measurementId: "G-PWGDY175PM"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;