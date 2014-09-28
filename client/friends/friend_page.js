/**
 * Created by Jasper on 13/08/14.
 */



function test(template) {
    return template.data._id
}

Template.friendPage.rendered = function(template){

    Session.set ("friendid", this.data._id)

    $('.header').text("Friend Page")


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

Template.friendPage.helpers ({
    parentname: function (parentContext){
        return (parentContext._id)
    },


        photo: function () {
            return Session.get("photo");
        }
    })


Template.friendPage.events ({
    "swipe .test": function (e, phase, direction, distance, duration, fingerCount) {


        if (direction == "left" && distance > 100) {
            var parentID = Session.get('friendid');
            var index = ($('.test').index(e.target))

            if (index == -1) {
                index = $(e.target).parent().index('.test')

            }

            notearray = (Friends.findOne({'_id': parentID}).note)
            notearray.splice(index, 1);

            Friends.update({
                    _id: parentID
                },
                {
                    $set: {
                        note: notearray,
                    }
                });

            console.log(parentID);


        }
    },

    "touchstart .test": function (e) {

        // $("#"+ e.target.id).css('background-color', 'red')
        $("#" + e.target.id).addClass('red')
    },

    "touchend .test": function (e) {
        $('body').find('.red').removeClass("red")

    },

    "mousedown .workItem": function (e, template) {
        // $("#"+ e.target.id).css('background-color', 'red')


        $("#" + e.target.id).addClass('red')
        $(e.target).parent().addClass('red')
    },

    "mouseup .test": function (e) {
        $('body').find('.red').removeClass("red")
        /*var parentID = template.data._id;
         var index = ($('.test').index(e.target))

         if (index == -1){
         index = $(e.target).parent().index('.test')

         }

         notearray = (Friends.findOne({'_id': parentID}).note)
         notearray.splice(index, 1);

         Friends.update({
         _id: parentID
         },
         {
         $set: {
         note: notearray,
         }
         });

         console.log(parentID);*/

    },


    "blur .note": function (e) {
        if ($('.note').val().trim() != '') {
            notearray = this.note
            notearray.push($('.note').val())
            console.log(notearray)
            Friends.update({
                    _id: this._id
                },
                {
                    $set: {
                        note: notearray
                    }
                });
            $(".note").val(null)
        }
        $(function () {
            //Enable swiping...
            $(".test").swipe({
                //Generic swipe handler for all directions
                swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
                    //$(this).text("You swiped " + direction );
                },
                //Default is 75px, set to 0 for demo so any distance triggers swipe
                threshold: 0
            });
        });


    },


    "keypress .note": function (e) {

        if ($('.note').val().trim() != '') {
            if (e.which == 13) {
                notearray = this.note
                notearray.push($('.note').val())
                console.log(notearray)


                Friends.update({
                        _id: this._id
                    },
                    {
                        $set: {
                            note: notearray,

                        }
                    });
                $(".note").val(null)
            }
        }
        $(function () {
            //Enable swiping...
            $(".test").swipe({
                //Generic swipe handler for all directions
                swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
                    //$(this).text("You swiped " + direction );
                },
                //Default is 75px, set to 0 for demo so any distance triggers swipe
                threshold: 0
            });
        });


    },

    "click .remove": function (e) {
        var eti = event.target.id.toString()
        notearray = (Friends.findOne({'_id': eti}).note)
        notearray.splice($('.remove').index(e.target), 1);

        Friends.update({
                _id: eti
            },
            {
                $set: {
                    note: notearray,
                }
            });

    },

    'mouseover .friendpagelist': function () {

        $(this._id).draggable();

    },

    'click .camera': function () {

        var cameraOptions = {
            width: 800,
            height: 600
        };

        MeteorCamera.getPicture(cameraOptions, function (error, data) {
            Session.set("photo", data);
        });



    }

})