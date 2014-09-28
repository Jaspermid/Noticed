/**
 * Created by Jasper on 12/08/14.
 */


Template.alert.helpers({
    alert: function() {
        return Session.get('alert');
    }
});