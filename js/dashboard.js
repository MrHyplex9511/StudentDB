// js/dashboard.js
import { auth, db } from "./firebase-init.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const uid = localStorage.getItem("student_uid");
if (!uid) {
  window.location.href = "index.html";
}

const docRef = doc(db, "students", uid);
const snapshot = await getDoc(docRef);

if (snapshot.exists()) {
  const data = snapshot.data();
  document.getElementById("welcome").textContent = `🎓 Welcome, ${data.name}!`;

  const percent = Math.round((data.current / data.goal) * 100);
  document.getElementById("progressText").textContent = `Progress: ${data.current}% of your ${data.goal}% goal`;
  document.getElementById("progressBar").style.width = `${Math.min(percent, 100)}%`;
}
