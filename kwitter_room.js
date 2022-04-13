user_name=localStorage.getItem("username")
document.getElementById("welcome").innerHTML="Welcome " + user_name
const firebaseConfig = {
      apiKey: "AIzaSyCpibbpaAIttoUIv8I_IS0uWFeOgZkkhCA",
      authDomain: "kwitter-fc545.firebaseapp.com",
      projectId: "kwitter-fc545",
      storageBucket: "kwitter-fc545.appspot.com",
      messagingSenderId: "505054684975",
      appId: "1:505054684975:web:c9b581c34ac86d112d63da"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig)
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names)
      row ="<div class=room_name id="+Room_names+"onclick=redirectToRoomName(this.id)>"+Room_names+"</div><hr>"
      document.getElementById("output").innerHTML+=row
      //End code
      });});}
getData();
function addRoom(){
      room_name=document.getElementById("addroom").value;  
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room"
      })
      localStorage.setItem("room_name",room_name)
      window.location="kwitter_page.html"
}
function redirectToRoomName(name){
      console.log(name)
      localStorage.setItem("Room_names",name)
      window.location="kwitter_page.html"
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}