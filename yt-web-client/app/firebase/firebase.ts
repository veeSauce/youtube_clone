// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { 
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    User } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDI5SnfFjXqbc-LdtFByErNM6iIWrU2fhs",
  authDomain: "nc-project-1-b59c2.firebaseapp.com",
  projectId: "nc-project-1-b59c2",
  //storageBucket: "nc-project-1-b59c2.firebasestorage.app",
  //messagingSenderId: "827601774955",
  appId: "1:827601774955:web:7eeaf980f8f21b076cc42e",
  measurementId: "G-Z3J0WCFMXF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

/**
 * Signs in the user with a Google popup.
 * @returns A promise that resovles with the user's credentials.
 */
export function signInWithGoogle(){
    return signInWithPopup(auth, new GoogleAuthProvider() );
}

/**
 * Signs the user out.
 * @returns A promise that resolves when the user is signed out.
 */
export function signOut(){
    return auth.signOut();
}

/**
 * Trigger a callback when user auth state changes.
 * @returns A function to unsubscribe callback.
 */
export function onAuthStateChangedHelper(callback: (user: User | null) => void) {
    return onAuthStateChanged(auth, callback);
}