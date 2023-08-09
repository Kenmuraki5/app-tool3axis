// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjhulXZCIwzVpdp_BUIeXwRF0RXThPfVg",
  authDomain: "authentication-axis-3-tool.firebaseapp.com",
  projectId: "authentication-axis-3-tool",
  storageBucket: "authentication-axis-3-tool.appspot.com",
  messagingSenderId: "860549322631",
  appId: "1:860549322631:web:79d736552bfcd29b646522",
  measurementId: "G-VN5WKKQXB3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;
