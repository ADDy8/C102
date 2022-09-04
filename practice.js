// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeia0vyEHzkEQNros0jGSJVScX7UQzfO8",
  authDomain: "c-100-a07cd.firebaseapp.com",
  projectId: "c-100-a07cd",
  storageBucket: "c-100-a07cd.appspot.com",
  messagingSenderId: "292278525253",
  appId: "1:292278525253:web:d5ab1de82f130cfd89322c",
  measurementId: "G-M9NC5EZCWT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
//ADD YOUR FIREBASE LINKS

function addUser() {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output")}.innerHTML
Room_names = childkey;
//start code
console.log("Room Name -" + Room_names);
row = "<div class='room_name' id ="+ Room_names +"onclick='redirectoRoomname(this.id)'>#" + Room_names +"</div><hr>"

//end code
};
getData();