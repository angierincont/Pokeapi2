import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDFMDNvNJN4BjGuIXFC4V8r3cxPTxb-BWM",
  authDomain: "pokeapi2-4da30.firebaseapp.com",
  projectId: "pokeapi2-4da30",
  storageBucket: "pokeapi2-4da30.firebasestorage.app",
  messagingSenderId: "645295852346",
  appId: "1:645295852346:web:aea3fc83051b55c0111e03"

};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // ✅ ¡Esto es necesario!

export { auth, db };