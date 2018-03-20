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
        document.getElementById('firebaseui-auth-container')
            .innerHTML = 'Looks like you are logged in already!' +
                         '<div class="pt-4 pb-2">' +
                         '<div id="logout" class="btn btn-primary">Logout</div>';
        document.getElementById("logout")
            .addEventListener("click", function() {
                firebase.auth().signOut().then(function() {
                    document.getElementById('firebaseui-auth-container')
                        .innerHTML = "Logged off successfully!"
                }).catch(function(error) {
                    document.getElementById('firebaseui-auth-container')
                        .innerHTML = "Something terrible happened! Let HTC leaders know that you are having trouble loggin' off!";
                });
            });
    }
    else {
        var ui = new firebaseui.auth.AuthUI(firebase.auth());

        var uiConfig = {
            callbacks: {
                signInSuccess: function (currentUser, credential, redirectUrl) {
                    // User successfully signed in.
                    // Return type determines whether we continue the redirect automatically
                    // or whether we leave that to developer to handle.
                    return true;
                }
            },
            // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
            signInFlow: 'popup',
            signInSuccessUrl: 'info.html',
            signInOptions: [
                // Leave the lines as is for the providers you want to offer your users.
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                firebase.auth.FacebookAuthProvider.PROVIDER_ID
            ]
        };

        ui.start('#firebaseui-auth-container', uiConfig);
    }
})

