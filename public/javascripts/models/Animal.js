define(function(require){
  var Backbone = require('backbone');

  var AnimalModel = Backbone.Model.extend({
    url: '/animals'
  });

  var AnimalCollection = Backbone.Collection.extend({
      url: '/animals',
      model: AnimalModel
    })

  return {
    Model: AnimalModel,
    Collection: AnimalCollection
  };
});

