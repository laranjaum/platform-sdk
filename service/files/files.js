angular.module('platformSdk').factory('FileSrv',function() {

    var files = {};

    var Files = Parse.Object.extend("Files");

    files.getAll = function(){
        var query = new Parse.Query(Files);
        return query.find();    
    }

    files.getById = function(id) {
        var query = new Parse.Query(Files);
        return query.get(id);
    }

    files.insert = function(file) {
        var files = new Files();
        return files.save(file);
    }

    files.update = function(id, file) {
        return id;
    }

    return files;
});
