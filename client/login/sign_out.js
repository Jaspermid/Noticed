/**
 * Created by Jasper on 12/08/14.
 */

Template.signOut.events({
    'click #signOut': function(e, t) {
        Meteor.logout(function() {
            Session.set('alert', false);
        });
        return false;
    }
});