// Initialize Firebase
var config = {
    apiKey: "AIzaSyAJGFuMK-DhPuTgd61HLL47RMtcmXX7ckM",
    authDomain: "uw-htc-website.firebaseapp.com",
    databaseURL: "https://uw-htc-website.firebaseio.com",
    projectId: "uw-htc-website",
    storageBucket: "uw-htc-website.appspot.com",
    messagingSenderId: "771697394602"
  };
firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
      // TODO: implement when user is logged in
  }
  else {
      window.location.href = 'login.html';
  }
});