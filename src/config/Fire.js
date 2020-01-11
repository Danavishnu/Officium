// <!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.6.2/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/7.6.2/firebase-analytics.js"></script>

import firebase from 'firebase';

  var firebaseConfig = {
    apiKey: "AIzaSyCSQQkspfBTMpXPwmpYEWpBKXIAFmR-5XA",
    authDomain: "officium-dana.firebaseapp.com",
    databaseURL: "https://officium-dana.firebaseio.com",
    projectId: "officium-dana",
    storageBucket: "officium-dana.appspot.com",
    messagingSenderId: "1090644550530",
    appId: "1:1090644550530:web:d7dc84ef6be5570481e59b",
    measurementId: "G-3F42EXS7WF"
  };
  // Initialize Firebase
  const fire =firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  export default fire ;