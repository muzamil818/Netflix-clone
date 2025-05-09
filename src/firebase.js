import { initializeApp } from "firebase/app";
import { 
    getAuth, 
    createUserWithEmailAndPassword,  
    signInWithEmailAndPassword,
    signOut
 } from "firebase/auth";
import {
    addDoc, 
    collection, 
    getFirestore
} from 'firebase/firestore'
import { toast } from "react-toastify";


const firebaseConfig = {
  apiKey: "AIzaSyC1C8FHTbSmy570GF3sT9Z5VFprd_VVATk",
  authDomain: "netflix-clone-9ef4c.firebaseapp.com",
  projectId: "netflix-clone-9ef4c",
  storageBucket: "netflix-clone-9ef4c.firebasestorage.app",
  messagingSenderId: "1097392243955",
  appId: "1:1097392243955:web:744a15b066194da22aa386",
  measurementId: "G-Z2EBY94DVL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app)

const signup  = async  (name, email, password) => {
    try {
            
    const res = await createUserWithEmailAndPassword(auth, email, password)
    const user = res.user
    addDoc(collection(db,'user'),{
        uid: user.uid,
        authProvider: 'local',
        name,
        email
    })
    } catch (err) { 
        toast.error(err.code.split('/')[1].split('-').join(' '))
        }

}
const login = async  (email, password) => {
    try {
        await   signInWithEmailAndPassword(auth,email, password)
        
    } catch (err) {
        toast.error(err.code.split('/')[1].split('-').join(' '))
    }
}
const logOut = () => {
    signOut(auth)
}


export {login, db, signup, logOut, auth }