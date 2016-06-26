angular.module('platformSdk').controller('InitiativesCtrl',function($scope, InitiativesSrv){

    $scope.search = function(query){
        var tags = query.split(" ");
        InitiativesSrv.getByTags(tags).then(function(initiativesByTag){
            $scope.initiatives = initiativesByTag;
            $scope.$apply();
        }).catch(function(err){
            console.error(err);
        });
    }

});
