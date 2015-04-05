define(function(require){
  var Dispatcher = require('dispatcher/Dispatcher'),
      AnimalConstants = require('constants/AnimalConstants');

  var AnimalActions = {
    /**
     * @param  {string} text
     */
    create: function(animalModel) {
      Dispatcher.dispatch({
        actionType: AnimalConstants.ANIMAL_CREATE,
        animalModel: animalModel
      });
    },

    /**
     * @param  {string} id The ID of the ToDo item
     * @param  {string} text
     */
    update: function(id, animalModel) {
      Dispatcher.dispatch({
        actionType: AnimalConstants.ANIMAL_UPDATE,
        id: id,
        animalModel: animalModel
      });
    },

    /**
     * @param  {string} id
     */
    destroy: function(id) {
      Dispatcher.dispatch({
        actionType: AnimalConstants.ANIMAL_DESTROY,
        id: id
      });
    }

  };

  return AnimalActions;

});