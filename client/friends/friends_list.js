/**
 * Created by Jasper on 12/08/14.
 */

Template.friendsList.swipeme = function () {
    Meteor.defer(function() {
        var $sw = $('#swipeme');
        $sw.on('hold tap swipe doubletap transformstart transform transformend dragstart drag dragend swipe release', function (event) {
            event.preventDefault();
            console.log("Type: " + event.type + ", Fingers: " + event.touches.length + ", Direction: " + event.direction + "<br/>");
        });
    });
};

Template.friendsList.rendered = function(){

    $('.header').text("Friend List")


    $(function() {
        //Enable swiping...
        $(".test").swipe( {
            //Generic swipe handler for all directions
            swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
                //$(this).text("You swiped " + direction );
            },
            //Default is 75px, set to 0 for demo so any distance triggers swipe
            threshold:0
        });
    });

}


Template.friendsList.helpers ({
    friend: function() {
        if (Friends === null){
            return [];
        }
        return Friends.find({},{sort: [["lowercasename","asc"]]})

    }
})

Template.friendsList.events ({
    "click .remove": function(){

        Friends.remove(this._id)
    },

    "swipe .test": function (e, phase, direction, distance, duration, fingerCount){
        if (direction === "left" && distance > 150){
            Friends.remove(e.target.id)
        }
    },

    "touchstart .test":function(e){
       // $("#"+ e.target.id).css('background-color', 'red')
        $("#"+ e.target.id).addClass ('red')
    },

    "touchend .test": function(e){
        $('body').find('.red').removeClass ("red")

    },

    "mousedown .test":function(e){
        // $("#"+ e.target.id).css('background-color', 'red')
        console.log(this)
        $("#"+ e.target.id).addClass ('red')
    },

    "mouseup .test": function(e){
        $('body').find('.red').removeClass ("red")

    },




    "blur .friend": function(e){

        if (Friends === null){
            return
        }
        if ($('.friend').val().trim() != ''){
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
        }

        $(function() {
            //Enable swiping...
            $(".test").swipe( {
                //Generic swipe handler for all directions
                swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
                    //$(this).text("You swiped " + direction );
                },
                //Default is 75px, set to 0 for demo so any distance triggers swipe
                threshold:0
            });
        });

        $(".friend").val(null)

    },

    "keypress .friend": function(e){

        if (Friends === null){
            return
        }
        if(e.which == 13) {
            if ($('.friend').val().trim() != ''){
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
            }

            $(".friend").val(null)


            $(function() {
                //Enable swiping...
                $(".test").swipe( {
                    //Generic swipe handler for all directions
                    swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
                        //$(this).text("You swiped " + direction );
                    },
                    //Default is 75px, set to 0 for demo so any distance triggers swipe
                    threshold:0
                });
            });
        }
    },

    "click .logOut": function(e) {

        Meteor.logout(function() {
        });

        Session.set('alert', false)

        /*Meteor.call('getFriendsData', function(err, data) {
            facebooklistarray = data.data
        })

        Friends.insert(
            {
                "name": "jaspertest"
            })

*/
    }





})