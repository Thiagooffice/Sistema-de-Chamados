import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

let firebaseConfig = {
    apiKey: "AIzaSyCbi7i6-h1wkSbKPkvAntzkM4-83e0yIzk",
    authDomain: "sistema-f2404.firebaseapp.com",
    projectId: "sistema-f2404",
    storageBucket: "sistema-f2404.appspot.com",
    messagingSenderId: "797764524692",
    appId: "1:797764524692:web:fabdf2375c2bef07623281",
    measurementId: "G-3EJC1SGM8R"
  };
  
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}
export default firebase