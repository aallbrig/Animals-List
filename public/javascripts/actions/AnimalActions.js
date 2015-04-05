define(function(require){
  var Dispatcher = require('dispatcher/Dispatcher'),
      AnimalConstants = require('constants/AnimalConstants');

  var AnimalActions = {
    /**
     * @param  {animalModel} AnimalModel.Model
     */
    create: function(animalModel) {
      Dispatcher.dispatch({
        actionType: AnimalConstants.ANIMAL_CREATE,
        animalModel: animalModel
      });
    },

    /**
     * @param  {string} id The ID of the animal
     * @param  {animalModel} AnimalModel.Model
     */
    update: function(id, animalModel) {
      Dispatcher.dispatch({
        actionType: AnimalConstants.ANIMAL_UPDATE,
        id: id,
        animalModel: animalModel
      });
    },

    /**
     * @param  {string} id The ID of the animal
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