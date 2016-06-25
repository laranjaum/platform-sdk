angular.module('platformSdk').controller('InitiativesCtrl',function($scope){
    console.log(Parse)
    var Initiatives = Parse.Object.extend("Initiative");
    var query = new Parse.Query(Initiatives);
    query.find({
        success: function(results) {
            alert("Successfully retrieved " + results.length + " initiatives.");
        },
        error: function(error) {
            alert("Error: " + error.code + " " + error.message);
        }
    });

    $scope.initiatives = [{
        title: 'Test1'
    }, {
        title: 'Test2'
    }, {
        title: 'Test3'
    }];
});
