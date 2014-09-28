/**
 * Created by Jasper on 14/08/14.
 */
Friends.allow({
    insert: function (userId) {
        // the user must be logged in, and the document must be owned by the user
        return (userId != null);
    },

    remove: function (userId) {
        // the user must be logged in, and the document must be owned by the user
        return (userId != null);
    },

    update: function (userId) {
        // the user must be logged in, and the document must be owned by the user
        return (userId != null);
    }

})

Facebooklist.allow({
    insert: function (userId) {
        // the user must be logged in, and the document must be owned by the user
        return (userId != null);
    },

    remove: function (userId) {
        // the user must be logged in, and the document must be owned by the user
        return (userId != null);
    },

    update: function (userId) {
        // the user must be logged in, and the document must be owned by the user
        return (userId != null);
    }

})