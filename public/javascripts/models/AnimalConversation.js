define(function(require){
  var Backbone = require('backbone');

  var AnimalConversationModel = Backbone.Model.extend({
    url: '/animal/conversation'
  });

  var AnimalConverstaionCollection = Backbone.Collection.extend({
      url: '/animals/conversations',
      model: AnimalConversationModel
    })

  return {
    Model: AnimalConversationModel,
    Collection: AnimalConverstaionCollection
  };
});

