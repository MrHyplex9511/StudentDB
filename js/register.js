import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";
import { app } from "./firebase-init.js";

const auth = getAuth(app);
const db = getFirestore(app);

document.getElementById("registerBtn").addEventListener("click", async () => {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;

  try {
    const userCred = await createUserWithEmailAndPassword(auth, email, pass);
    const uid = userCred.user.uid;
    await setDoc(doc(db, "students", uid), {
      name,
      email
    });
    alert("Registration Successful!");
    window.location.href = "home.html";
  } catch (err) {
    alert(err.message);
  }
});
