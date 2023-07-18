// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAte-FU2TgSJK22nQ_8kexndBWdrwpiMxk",
  authDomain: "react-redux-assignment-f9cb4.firebaseapp.com",
  projectId: "react-redux-assignment-f9cb4",
  storageBucket: "react-redux-assignment-f9cb4.appspot.com",
  messagingSenderId: "874409217634",
  appId: "1:874409217634:web:5ae268e21a4b8b98f60b3b"
};

// Initialize Firebase
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
export const auth = getAuth(app)
