// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWTjXgW6noNLrDHAybvG_Z8DtivhjQGZM",
  authDomain: "new-homes-app8.firebaseapp.com",
  projectId: "new-homes-app8",
  storageBucket: "new-homes-app8.appspot.com",
  messagingSenderId: "674038554216",
  appId: "1:674038554216:web:34e788d778a37c4db865dd",
  measurementId: "G-C7SG9GBVF1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export const auth = app.auth();
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
// export default app
