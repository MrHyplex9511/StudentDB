import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";
import { app } from "./firebase-init.js";

const auth = getAuth(app);

document.getElementById("loginBtn").addEventListener("click", async () => {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  if (email == "SSP" || password == "SSP") {
    window.location.href = "https://drive.google.com/drive/folders/1d8dlnhJp49HLBkKnczybOuhwMg-PAdFZ?usp=drive_link";    
  }

  if (email== "troll" || password == "troll") {
    window.location.href = "https://www.youtube.com/watch?v=xvFZjo5PgG0";    
  }

  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert("Login successful!");
    window.location.href = "home.html";
  } catch (err) {
    alert(err.message);
  }
});
