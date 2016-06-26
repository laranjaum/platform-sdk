angular.module('platformSdk').factory('InitiativesSrv',function() {

    var initiatives = {};

    var Initiative = Parse.Object.extend("Initiative");

    initiatives.getAll = function(){
        var query = new Parse.Query(Initiative);
        return query.find();
    }

    initiatives.getById = function(id) {
        var query = new Parse.Query(Initiative);
        return query.get(id);
    }

    initiatives.insert = function(initiative) {
        var initiatives = new Initiatives();
        return initiatives.save(initiative);
    }

    initiatives.update = function(id, initiative) {
        return id;
    }

    return initiatives;
});
