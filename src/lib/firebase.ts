import { getApps, initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDNaKFYNrqnbLhx6nvg2BG0JhVbNPxMQow",
  authDomain: "abe-newmeyercom.firebaseapp.com",
  projectId: "abe-newmeyercom",
  storageBucket: "abe-newmeyercom.firebasestorage.app",
  messagingSenderId: "957625126253",
  appId: "1:957625126253:web:14b33486eb61c6dac41e64"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const storage = getStorage(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, storage, auth, db };
