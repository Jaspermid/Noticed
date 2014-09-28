






function Facebook(accessToken) {
    this.fb = Meteor.require('fbgraph');
    this.accessToken = accessToken;
    this.fb.setAccessToken(this.accessToken);
    this.options = {
        timeout: 3000,
        pool: {maxSockets: Infinity},
        headers: {connection: "keep-alive"}
    }
    this.fb.setOptions(this.options);
}


Facebook.prototype.query = function(query, method) {
    var self = this;
    var method = (typeof method === 'undefined') ? 'get' : method;
    var data = Meteor.sync(function(done) {
        self.fb[method](query, function(err, res) {
            done(null, res);
        });
    });
    return data.result;
}


Facebook.prototype.getFriendsData = function() {
    return this.query('/me/taggable_friends');
}

Meteor.methods({

    getFriendsData: function() {
        var fb = new Facebook(Meteor.user().services.facebook.accessToken);
        var data = fb.getFriendsData();

       var test = data.data
       // return data


            if(!this.userId){
                throw new Meteor.Error(500,"Must be signed in to get friends data !");
            }

        for(var i=0;i<data.data.length;i++) {
            Facebooklist.insert({
                name: data.data[i].name,
                userid: this.userId

            })
        }
            /*for(var i=0;i<10;i++){
                console.log(i);
                Facebooklist.insert({
                    name:"test"+i,
                    userId:this.userId
                });
            }
            Facebooklist.find().forEach(function(name){
                console.log(friend.name);
            });*/



    },



    removeAllFacebookFriends: function(){
        return Facebooklist.remove({});
    }


});

