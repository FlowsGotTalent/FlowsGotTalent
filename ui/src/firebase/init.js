import xmlhttprequest from 'xmlhttprequest'
global.XMLHttpRequest = xmlhttprequest
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: import.meta.env.VITE_APP_FBDB_APIKEY,
    authDomain: import.meta.env.VITE_APP_FBDB_authDomain,
    projectId: import.meta.env.VITE_APP_FBDB_projectId,
    storageBucket: import.meta.env.VITE_APP_FBDB_storageBucket,
    messagingSenderId: import.meta.env.VITE_APP_FBDB_messagingSenderId,
    appId: import.meta.env.VITE_APP_FBDB_appId,
    measurementId: import.meta.env.VITE_APP_FBDB_measurementId,
}

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)
firebase.analytics()


const db = firebaseApp.firestore()
export default db
