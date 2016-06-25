angular.module('platformSdk').controller('FilesCtrl', function($scope,$document,FileSrv){

    var filetoUpload ;

    $scope.create = function (modelName) {

      var parseFile = new Parse.File(modelName, filetoUpload);
      var fileModel = {
          name: modelName,
          content: parseFile
      }

      FileSrv.insert(fileModel).then(
          function (success) {
              $scope.file = success.id;
          },
          function (error) {
              console.error(error);
          }
      )
    }

    $scope.uploadFile = function(files) {
        console.log(files);
        if (files.length > 0 ) {
            filetoUpload = files[0];
        }
    };

    $scope.getById = function (id) {
        FileSrv.getById(id).then(
            function (file) {
                $scope.image = file;
            },
            function (error) {
                console.error(error);
            }
        );
    }
    
});
