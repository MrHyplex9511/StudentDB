import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";
import { app } from "./firebase-init.js";

const auth = getAuth(app);

document.getElementById("logoutBtn").addEventListener("click", async () => {
  await signOut(auth);
  alert("Logged out!");
  window.location.href = "login.html";
});
