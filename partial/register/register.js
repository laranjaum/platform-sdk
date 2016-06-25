angular.module('platformSdk').controller('RegisterCtrl',function($scope, UserService){
    $scope.signUp = function(name, surname, username, email, password) {
        return UserService.signUp(name, surname, username, email, password).then(function(user) {
            console.log(user)
        }).catch(function(error) {
            console.log(error)
        })
    };
});
