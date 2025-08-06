// js/register.js
import { auth, db } from "./firebase-init.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";
import { setDoc, doc } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const form = document.getElementById("registerForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const current = parseFloat(document.getElementById("current").value);
  const goal = parseFloat(document.getElementById("goal").value);
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const uid = userCredential.user.uid;

    await setDoc(doc(db, "students", uid), {
      name,
      current,
      goal,
      email
    });

    localStorage.setItem("student_uid", uid);
    window.location.href = "dashboard.html";
  } catch (err) {
    alert("Error: " + err.message);
  }
});
