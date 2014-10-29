/**
 * Created by Jasper on 12/08/14.
 */


Router.configure({
    layoutTemplate: 'layout',
    LoadingTemplate: 'loading',
    waitOn: function() { return Meteor.subscribe('friends'); }
});



Router.map(function()
    {
        this.route('friendsList', {path: '/'});

        this.route('friendPage', { path: '/friend/:_id',
            data: function() { return Friends.findOne(this.params._id); }
        });
        this.route('picture', { path: '/picture/:_id',
            data: function() { return Images.findOne(this.params._id); }
        });


        this.route('addFriend', {path: '/addfriend'});
        this.route('camera', {path: '/test'});
        this.route('calendar', {path: '/calendar'});
        //this.route('picture', {path: '/picture'});
});