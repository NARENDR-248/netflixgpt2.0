// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRm5NgPk-GDovS7MISZw4Xvmv2ZrrJM-0",
  authDomain: "netflix-gpt-21.firebaseapp.com",
  projectId: "netflix-gpt-21",
  storageBucket: "netflix-gpt-21.appspot.com",
  messagingSenderId: "353778673275",
  appId: "1:353778673275:web:8f0620886c2889c173a4de",
  measurementId: "G-Z3YSNR58K7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();