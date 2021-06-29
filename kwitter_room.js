//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCV3bgoUBRBpYyWj1E0bN-ipQGTDFJFFSM",
      authDomain: "kwitter-f2b4e.firebaseapp.com",
      databaseURL: "https://kwitter-f2b4e-default-rtdb.firebaseio.com",
      projectId: "kwitter-f2b4e",
      storageBucket: "kwitter-f2b4e.appspot.com",
      messagingSenderId: "416485862817",
      appId: "1:416485862817:web:d744492bf63efc50cb6fe0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";

}

welcome_user_name = localStorage.getItem("user_name");

document.getElementById("welcome_user_name").innerHTML = "Welcome " + welcome_user_name + "!";

function addRoom() {
      room_name = document.getElementById("room_name").value;

      localStorage.setItem("room_name", room_name);

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      window.location = "kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  console.log(Room_names);


                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
                  
            });
      });
}

function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html"
}
getData();