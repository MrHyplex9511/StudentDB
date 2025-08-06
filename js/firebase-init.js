// js/firebase-init.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBMBep0yovso8RP2GtqD24A3zhsLglQHe8",
  authDomain: "studentdb-568dd.firebaseapp.com",
  projectId: "studentdb-568dd",
  storageBucket: "studentdb-568dd.firebasestorage.app",
  messagingSenderId: "1009970616585",
  appId: "1:1009970616585:web:77e9b4aacfb83df0945bd8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
