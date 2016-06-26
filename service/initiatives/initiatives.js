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

    initiatives.getByTags = function(tags) {
        var Tag = Parse.Object.extend("Tag");
        var tagInnerQuery = (new Parse.Query(Tag)).containsAll('name', tags);

        var InitiativeTag = Parse.Object.extend("InitiativeTag");
        var query = new Parse.Query(InitiativeTag);
        var promise = query.include('initiative')
                           .matchesQuery('tag', tagInnerQuery).find();

        return promise.then(function(data){
            var initiatives = [];
            for (var i = 0; i < data.length; i++) {
                initiatives.push(data[i].get('initiative'));
            }
            return initiatives;
        }).catch(function(error){
            console.error(error);
        });
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
