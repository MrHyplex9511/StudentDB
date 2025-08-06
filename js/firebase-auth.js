// js/firebase-auth.js
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";
import { app } from './firebase-init.js';

const auth = getAuth(app);

const userInfoDiv = document.getElementById("user-info");
const authButtonsDiv = document.getElementById("auth-buttons");
const usernameSpan = document.getElementById("username");
const logoutBtn = document.getElementById("logoutBtn");

onAuthStateChanged(auth, (user) => {
  if (user) {
    userInfoDiv.style.display = "block";
    authButtonsDiv.style.display = "none";
    usernameSpan.textContent = user.email;
  } else {
    userInfoDiv.style.display = "none";
    authButtonsDiv.style.display = "block";
  }
});

if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    signOut(auth).then(() => {
      window.location.reload();
    });
  });
}
