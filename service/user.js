angular.module('platformSdk').factory('UserService',function() {
    var user = {};

    user.getCurrent = function() {
        return Parse.User.current();
    };

    user.signUp = function(name, surname, username, email, password) {
        var user = new Parse.User();
        user.set('name', name);
        user.set('surname', surname);
        user.set('username', username);
        user.set('email', email);
        user.set('password', password);

        return user.signUp();
    };

    user.logIn = function(username, password) {
        return Parse.User.logIn(username, password);
    };

    user.logOut = function() {
        return Parse.User.logOut();
    };

    return user;
});
