define(function(require){
  var Backbone = require('backbone');

  var AnimalModel = Backbone.Model.extend({
    defaults: function(){
      return {
        commonName : 'default prop',
        img : {
          src : 'http://www.critterbabies.com/wp-content/uploads/2014/02/a1.jpg'
        }
      }
    },
    url: '/animals'
  });

  var AnimalCollection = Backbone.Collection.extend({
    url: '/animals',
    model: AnimalModel
  });

  return {
    Model: AnimalModel,
    Collection: AnimalCollection
  };
});

