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

console.log(firebase.auth().currentUser);
if (!firebase.auth().currentUser) {
}

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
    }
    else {
    window.location.href = 'login.html';
    }
})
var dict = {};

$('.ro').click(function() {
    console.log("going to edit mode");
    $(this).removeClass('ro');
    $(this).addClass('edit');
    dict[$(this).prop('id')] = $(this).val();
});

$(document).on('keyup', '.edit', function(e) {
    if (e.keyCode == 13) {
        console.log('entered');
        $(this).addClass('ro');
        $(this).removeClass('edit');
        dict[$(this).prop('id')] = $(this).val();
        myFunction($(this).prop('id'));
    }
});

$('select').change(function() {
    $(this).prop('data-selected-text-format', 'values');
    console.log("here is the value: " + $(this).val());
    myFunction($(this).prop('id'));
});

$('input').blur(function() {
    console.log("going back to read only");
    $(this).removeClass('edit');
    $(this).addClass('ro');
    $(this).val(dict[$(this).prop('id')]);
})

$('[data-toggle="tooltip"]').tooltip();

function myFunction(val) {
    // Get the snackbar DIV
    var x = document.getElementById("snackbar");
    x.innerText = "Saved your " + val;

    // Add the "show" class to DIV
    x.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 2000);
}