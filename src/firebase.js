import firebase from 'firebase'


const firebaseApp = firebase.initializeApp({
    
    apiKey: "AIzaSyDBb04qnvnodukTAJXohIQYa7AdiFSkH2k",
    authDomain: "react-todo-app-b5c1d.firebaseapp.com",
    projectId: "react-todo-app-b5c1d",
    storageBucket: "react-todo-app-b5c1d.appspot.com",
    messagingSenderId: "349026001576",
    appId: "1:349026001576:web:f2e5aca7c43aa03588989d",
    measurementId: "G-GGR49XD4ZD"
    
});


const db = firebaseApp.firestore();



export default db;
