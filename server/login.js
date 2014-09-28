/**
 * Created by Jasper on 20/08/14.
 */
Meteor.startup(function () {


    // first, remove configuration entry in case service is already configured
    Accounts.loginServiceConfiguration.remove({
        service: "facebook"
    });
    Accounts.loginServiceConfiguration.insert({
        service: "facebook",
        appId: "278237565717322",
        secret: "1cbd969c5a38231862908163fdbd2b45"
    });



    Accounts.loginServiceConfiguration.remove({
        service: "linkedin"
    });
    Accounts.loginServiceConfiguration.insert({
        service: "linkedin",
        appId: "77b45lfgkzgpws",
        secret: "hC7o1fPbCQR8beKL"
    });



});