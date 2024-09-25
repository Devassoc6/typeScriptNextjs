// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
	browserLocalPersistence,
	GoogleAuthProvider,
	initializeAuth,
} from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAliDATnJjyFeI5zE8ZbvMZdPHJrGHmlFw",
  authDomain: "typescripttest-e8c8c.firebaseapp.com",
  projectId: "typescripttest-e8c8c",
  storageBucket: "typescripttest-e8c8c.appspot.com",
  messagingSenderId: "619374181503",
  appId: "1:619374181503:web:51e6eaa40fe7a7ab19d34a",
  measurementId: "G-19FY2ZT6VP"
};

const FIREBASE_APP = initializeApp(firebaseConfig)

const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
    persistence: browserLocalPersistence,
  });

  const FIREBASE_AUTH_PROVIDER = new GoogleAuthProvider()

export { FIREBASE_APP, FIREBASE_AUTH, FIREBASE_AUTH_PROVIDER }
// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
