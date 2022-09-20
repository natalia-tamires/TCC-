import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";  
import { getFirestore, getDocs, addDoc, collection } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCJmZI0hY7KUk6oshVw5MfBHE9aFkGblM0",
    authDomain: "caopanheiro.firebaseapp.com",
    projectId: "caopanheiro",
    storageBucket: "caopanheiro.appspot.com",
    messagingSenderId: "674209979749",
    appId: "1:674209979749:web:9f9510e129502cd49c958c",
    measurementId: "G-MVCFEG8SE3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

await addMessage();

async function addMessage(){
    const nome = document.getElementById('name');
    const email = document.getElementById('email');
    const assunto = document.getElementById('subject');
    const mensagem = document.getElementById('message')
    /* try {
    const docRef = await addDoc(collection(db, "users"), {
    first: "Ada",
    last: "Lovelace",
    born: 1815
    });
    console.log("Document written with ID: ", docRef.id);
    } catch (e) {
    console.error("Error adding document: ", e);
    } */


}