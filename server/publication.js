/**
 * Created by Jasper on 13/08/14.
 */

Meteor.publish('friends', function() {
    user = this.userId
   return Friends.find({'userid':user})
});


Meteor.publish('facebooklist', function() {
    user = this.userId
    return Facebooklist.find({'userid': user})
});

Meteor.publish('images', function() {
    user = this.userId
    return Images.find({'userid': user})
});

