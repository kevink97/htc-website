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
      // TODO: implement when user is logged off
  }
});
  
  
var desktopBtn = $("#desktop");
var mobileBtn = $("#mobile");
var body = $("#content");

desktopBtn.on('click', function() {
  body.addClass('large-screen');
  togglePrimaryButtonStyle($(this));
})

mobileBtn.on('click', function() {
  body.removeClass('large-screen');
  togglePrimaryButtonStyle($(this));
})

function togglePrimaryButtonStyle(el) {
  var sibling = el.parent('.btn-group').siblings('.btn-group').find('.btn');
  el.addClass('btn-primary');
  sibling.removeClass('btn-primary').addClass('btn-default');
}
