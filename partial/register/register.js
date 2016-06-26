angular.module('platformSdk').controller('RegisterCtrl',function($scope, $state, UserService){
    $scope.match = function(a, b) {
        return a === b;
    };

    $scope.emailTaken = function(email) {
        UserService.getByEmail(email).then(function(user) {
            if (user) {
                $scope.registerForm.emailInput.$error.duplicate = true;
            } else {
                $scope.registerForm.emailInput.$setPristine();
            }
        });
    };

    $scope.usernameTaken = function(username) {
        UserService.getByUsername(username).then(function(user) {
            if (user) {
                $scope.registerForm.usernameInput.$error.duplicate = true;
            } else {
                $scope.registerForm.usernameInput.$setPristine();
            }
        });
    };

    $scope.signUp = function(name, surname, username, email, password) {
        return UserService.signUp(name, surname, username, email, password).then(function(user) {
            console.log(user);
            $state.go('initiatives');
            $scope.registerForm.$setUntouched();
        }).catch(function(error) {
            switch (error.code) {
                case Parse.Error.DUPLICATE_VALUE:
                    $scope.registerForm.usernameInput.$error.duplicate = true;
                    break;
                case Parse.Error.EMAIL_TAKEN:
                    $scope.registerForm.emailInput.$error.duplicate = true;
                    break;
                default:
                    $scope.registerForm.$setUntouched();
            }
        });
    };
});
