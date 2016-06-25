angular.module('platformSdk').factory('UserService',function() {
    var user = {};

    user.getCurrent = function() {
        return Parse.User.current();
    };

    user.signUp = function(username, password) {
        return Parse.User.signUp(username, password);
    };

    user.logIn = function(username, password) {
        return Parse.User.logIn(username, password);
    };

    user.logOut = function() {
        return Parse.User.logOut();
    };

    return user;
});
