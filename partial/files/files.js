angular.module('platformSdk').controller('FilesCtrl',function($scope,$document,FileSrv){

        $scope.create = function (name,filemodel) {

          console.log(file);

          var parseFile = new Parse.File(name, filemodel);

          FileSrv.insert(parseFile).then(
              function (success) {
                  $scope.file = success.id;
              },
              function (error) {
                  console.error(error);
              }
          )

    }

});
