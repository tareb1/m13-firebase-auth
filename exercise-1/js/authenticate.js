// JavaScript authentication file
$(function() {

  // Initialize Firebase
	  var config = {
	    apiKey: "AIzaSyCR1jnU6mApIaIzLUIXcxXnrVewhvSbW_E",
	    authDomain: "awesome-stuff-18c59.firebaseapp.com",
	    databaseURL: "https://awesome-stuff-18c59.firebaseio.com",
	    storageBucket: "awesome-stuff-18c59.appspot.com",
	    messagingSenderId: "731170506996"
	  };
	  firebase.initializeApp(config);


    // Sign Up: Function to create account on firebase, then redirect to index.html
    var signUp = function() {
        // Get email, password, and display name
         var email = $('#email').val();
         var password = $("#password").val();
         var displayName = $('#display-name').val();
         console.log(email, password, displayName);


        // Create user, then set the user's display name
        	firebase.auth().createUserWithEmailAndPassword(email, password)
        		.then(function(user){ // returns a promise

                 // Set display name
                user.updateProfile({ 
                    displayName: displayName 
                }).then(function() {       
                    window.location = '/';
                });
            }).catch(function(error) {
                alert(error.message);
            });

    };

    // SignIn: Function to authenticate on Firebase, then redirect to index.html
    var signIn = function() {
        // Get email and password


        // Authenticate using email and password, then redirect

    };

    // Sign out: Function to log a user out of firebase
    var signOut = function() {
        // Sign out, then redirect



    };

    // Assign event lister to form submission
    $('form').on('submit', function(event) {
        event.preventDefault();
        console.log("shjh")
        var formId = $(this).attr('id');
        console.log(formId)
        if (formId == 'sign-up') {
            signUp();
        } else if (formId == 'sign-in') {
            signIn();
        }

    });



    // Assign click event to logout button



    // Authentication Change: see if a user is already signed in, and redirect

            // Rediriect to index.html if there is a user and the pathname isn't '/'

            // Redirect to sign-in if there is NOT a user and the pathname IS '/'

});
