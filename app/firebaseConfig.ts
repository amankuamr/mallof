// Firebase initialization for Next.js app
import { initializeApp, getApps } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCuAle0FWACq3nef5WGQU6QoJxy11wuZMU",
  authDomain: "mallofranchi-398eb.firebaseapp.com",
  databaseURL: "https://mallofranchi-398eb-default-rtdb.firebaseio.com",
  projectId: "mallofranchi-398eb",
  storageBucket: "mallofranchi-398eb.firebasestorage.app",
  messagingSenderId: "813235094637",
  appId: "1:813235094637:web:6d244b12355f11ce592b64"
};

// Prevent re-initialization in Next.js hot reload
export default function getFirebaseDb() {
  const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
  return getDatabase(app);
}
