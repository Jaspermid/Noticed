/**
 * Created by Jasper on 11/08/14.
 */





Template.login.helpers({
    showForgotPassword: function() {
        return Session.get('showForgotPassword');
    },

    signingIn: function (){
    return Session.get('signingIn')
}
});
