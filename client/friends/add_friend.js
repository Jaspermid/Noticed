/**
 * Created by Jasper on 13/08/14.
 */
Template.addFriend.rendered = function() {


    Meteor.call('removeAllFacebookFriends')



}

Template.addFriend.helpers ({
    alerted: function() {
        return Session.get("alerted")
    },

    facebookfriend: function(){
        return Facebooklist.find({},{sort: [["name","asc"]]})
    }

})


Template.addFriend.events ({
    "click .addfriend": function(){



        Meteor.call("getFriendsData")





        /*
        if ($(".friend").val() != "") {

            Friends.insert(
                {
                    "name": $(".friend").val(),
                    //adding lower case name to enable case insensitive sorting of the friend list
                    "lowercasename": $(".friend").val().toLowerCase(),
                    "note": [],
                    "userid": Meteor.user()._id
                })
            Session.set ("alerted", false)
        }
        else{
            e.preventDefault()
            Session.set ("alerted", true)
            Session.set ("alert", "Please use at least one letter for your friend's name (he or she is worth it!")
        }*/
    }
})