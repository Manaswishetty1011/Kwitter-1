//YOUR FIREBASE LINKS
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
function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code
                        console.log(firebase_message_id)
                        console.log(message_data)
                        name = message_data["name"]
                        message = message_data["message"]
                        like = message_data["like"]
                        nametag = " <h4>" + name + "<img src='tick.png'> </h4>"
                        messagetag = "<h4>" + message + "</h4>"
                        liketag = '<button class="btn btn-warning"id="' + firebase_message_id + '" value="' + like + '"onclick="' + updatelike(this.id) + '"></button>'
                        span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: " + like + "</span></button><hr>";
                        row = nametag + messagetag + liketag + span_with_tag
                        document.getElementById("output").innerHTML += row;
                        // End code
                  }
            });
      });
}
getData();
function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            Like: 0,
            Message: msg,
            Name: user_name,
      })
      document.getElementById("msg").value = "";
}
function updatelike(message_id) {
      console.log("clicked on like button - " + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;
      console.log(updated_likes);
      firebase.database().ref(room_name).child(message_id).update({
            like: updated_likes
      });
} function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
}

