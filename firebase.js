// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getDatabase, ref, set, push, child, get, update } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDrUPX8LcO-sH-8pvG7qnhACbbAuZo-MF8",
  authDomain: "qrdinamicobbdd.firebaseapp.com",
  projectId: "qrdinamicobbdd",
  storageBucket: "qrdinamicobbdd.appspot.com",
  messagingSenderId: "1032568749438",
  appId: "1:1032568749438:web:2a894c25e252bad128872f",
  databaseURL: "https://qrdinamicobbdd-default-rtdb.firebaseio.com/"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, ref, set, push, child, get, update };
