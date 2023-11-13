// signin.js

function signun(event) {
    event.preventDefault();
    // Add your sign-in logic here
    alert("Sign In button clicked");
}

const firebaseApp = firebase.initializeApp({ 
    apiKey: "AIzaSyCy3i25dMUGNfbx0gewIqH3531dYcD1Xk4",
    authDomain: "agrifarm-610ce.firebaseapp.com",
    databaseURL: "https://agrifarm-610ce-default-rtdb.firebaseio.com",
    projectId: "agrifarm-610ce",
    storageBucket: "agrifarm-610ce.appspot.com",
    messagingSenderId: "661056249084",
    appId: "1:661056249084:web:db3f9c0dfda5772afa0b79"
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

const signUp=()=>{
    const email=document.getElementById('email').value;
    const password=document.getElementById('password').value;
    console.log(email, password)
    firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((result) => {
    // Signed in 
    document.write("you are sign up")
    console.log(result)
    // ...
  })
  .catch((error) => {
    console.log(error.code);
    console.log(error.message)
     //signup form
    // ..
  });
}

const signin = ()=>{
    const email=document.getElementById('email').value;
    const password=document.getElementById('password').value;
    console.log(email, password)
    firebase.auth().signInWithEmailAndPassword(email, password)
  .then((result) => {
    // Signed in
    document.write("you are sign in")
    console.log(result)
    // ...
  })
  .catch((error) => {
    console.log(error.code);
    console.log(error.message)
  });
}

