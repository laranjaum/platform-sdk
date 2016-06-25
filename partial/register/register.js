angular.module('platformSdk').controller('RegisterCtrl',function($scope, UserService){
    $scope.signUp = function(email, password) {
        return UserService.signUp(email, password).then(function(user) {
            console.log(user)
        }).catch(function(error) {
            console.log(error)
        })
    };
});
