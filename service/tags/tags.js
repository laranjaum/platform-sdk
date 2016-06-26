angular.module('platformSdk').factory('tagsService',function() {

    var tags = {};

    tags.createTag = function(name) {
        var tags = new Parse.tags();

        /* Salva em lowerCase para facilitar a busca */
        var lowerCaseName = name.toLowerCase()

        tags.set('name',lowerCaseName);

        return tags.createTags()
    };

    tags.getTagById = function(id){
      var tags = Parse.Object.extend("Tag");
      var query = new Parse.Query(Tag);

      query.get(id, {
        success: function(tagFound) {
          console.log("objeto recuperado com sucesso")
        },
        error: function(object, error) {
          console.log("Erro ao recuperar o objeto")
        }
      });

      return tagFound
    }

    tags.getTagByName = function(name){
      var tags = Parse.Object.extend("Tag");
      var query = new Parse.Query(Tag);

      query.equalTo("name", name);

      query.find({
        success: function(results) {
          console.log("Successfully retrieved " + results.length + "tags");
          // Do something with the returned Parse.Object values
          for (var i = 0; i < results.length; i++) {
            var object = results[i];
            console.log(object.id + ' - ' + object.get('name'));
          }
        },
        error: function(error) {
          alert("Error: " + error.code + " " + error.message);
        }
      });

      return results
    }

    tags.removeTagById = function(id) {
      getTagById(id).destroy({
      success: function(myObject) {
        console.log("o objeto foi deletado")
      },
      error: function(myObject, error) {
        console.log("Erro ao deletar o objeto")
      }
      });
    }

    tags.removeTagByName = function(name) {
          getTagByName(name).destroy({
          success: function(myObject) {
            console.log("o objeto foi deletado")
          },
          error: function(myObject, error) {
            console.log("Erro ao deletar o objeto")
          }
          });
    }

    tags.getInitiavesWithTagsByName = function(name){


    }

    tags.getInitiavesWithTagsById = function(id){

    }

    return tags;
});
