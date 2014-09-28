/**
 * Created by Jasper on 20/08/14.
 */
Meteor.methods({
    fb_me: function() {


        var user = Meteor.users.findOne(this.userId);
        var accessToken = user.services.facebook.accessToken;


        //note: I don't have access to a meteor project hooked up to the FB API
        //so where the access token is stored in a user object may differ,
        //I got this from an old project. Try logging user here to find it
        //if this doesn't work


        if (!user || !accessToken)
            throw new Meteor.Error(500, "Not a valid Facebook user logged in");

        return HTTP.get("http://graph.facebook.com/me/", {
            params: {access_token: accessToken}}).data;
    }
});