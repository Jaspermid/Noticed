/**
 * Created by Jasper on 12/08/14.
 */

Template.signIn.rendered = function() {
    Session.set('loggingIn', true)
}

Template.signIn.helpers ({
    loggingIn: function(){
        return Session.get('loggingIn')
    },
    spinner: function(){
        return Session.get('spinner')
    }

})



Template.signIn.events({
    'submit #signInForm': function(e, t) {
        e.preventDefault();

        var signInForm = $(e.currentTarget),
            email = trimInput(signInForm.find('.email').val().toLowerCase()),
            password = signInForm.find('.password').val();

        if (isNotEmpty(email) && isEmail(email) && isNotEmpty(password) && isValidPassword(password)) {
            Meteor.loginWithPassword(email, password, function(err) {
                if (err) {
                    Session.set('alert', 'We\'re sorry but these credentials are not valid.');
                } else {
                    //Sesson.set('alert', 'Welcome back New Meteorite!');
                }
            });
        }
      /*  var iOS = ( navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false );
        if (iOS) {
            Session.set ('spinner', true)
            location.reload();
        }*/
        return false;
    },

    'submit #signUpForm': function(e, t) {
        e.preventDefault();

        var signUpForm = $(e.currentTarget),
            email = trimInput(signUpForm.find('#signUpEmail').val().toLowerCase()),
            password = signUpForm.find('#signUpPassword').val(),
            passwordConfirm = signUpForm.find('#signUpPasswordConfirm').val();

        if (isNotEmpty(email) && isNotEmpty(password) && isEmail(email) && areValidPasswords(password, passwordConfirm)) {
            Accounts.createUser({email: email, password: password}, function(err) {
                if (err) {
                    if (err.message === 'Email already exists. [403]') {
                        Session.set('alert', 'We\'re sorry but this email is already used.');
                    } else {
                        Session.set('alert', 'We\'re sorry but something went wrong.');
                    }
                } else {
                    Session.set('alert', 'Congrats! You\'re now a new Meteorite!');
                }
            });
        }
        return false;
    },



    'click .facebook': function() {
        Meteor.loginWithFacebook({ requestPermissions: ['email', 'user_friends', 'user_location', 'user_events',
                'friends_events', 'friends_location', 'friends_about_me',
                'user_status', 'friends_status', 'read_friendlists']},
            function (error) {
                if (error) {
                    return console.log(error);
                }
            });
    },

    'click .linkedin': function() {
        console.log ("trying to log in via LinkedIn")
        Meteor.loginWithLinkedin({
        }, function (err) {
            if (err){
                console.log("ERROR: " + err); //error handling
            } else {
                console.log("NO ERROR ON LOGIN"); //no error
            }
        })
    },
    'click #signUp': function() {
        Session.set('loggingIn', false)
        Session.set('alert', false)
    },

    'click #backToLogIn': function() {
        Session.set('loggingIn', true)
        Session.set('alert', false)
    },




});
