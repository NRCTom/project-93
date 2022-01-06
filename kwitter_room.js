
//ADD YOUR FIREBASE LINKS HERE
<script type="module">
  // Import the functions you need from the SDKs you need
      import {initializeApp} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
      import {getAnalytics} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-analytics.js";
      // TODO: Add SDKs for Firebase products that you want to use
      // https://firebase.google.com/docs/web/setup#available-libraries

      // Your web app's Firebase configuration
      // For Firebase JS SDK v7.20.0 and later, measurementId is optional
      const firebaseConfig = {
            apiKey: "AIzaSyASzH9XLgzMxoRB2WKQDV_5Ys8Ol26Qx-U",
      authDomain: "kwitter-ebf9c.firebaseapp.com",
      databaseURL: "https://kwitter-ebf9c-default-rtdb.firebaseio.com",
      projectId: "kwitter-ebf9c",
      storageBucket: "kwitter-ebf9c.appspot.com",
      messagingSenderId: "106386078988",
      appId: "1:106386078988:web:9f5fad6fdf265643181d29",
      measurementId: "G-JRHS1GFH3F"
  };

      // Initialize Firebase
      const app = initializeApp(firebaseConfig);
      const analytics = getAnalytics(app);
</script>

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code

                  //End code
            });
      });
}
getData();
