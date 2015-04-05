define(function(require){
  var AnimalConversationModel = require('models/AnimalConversation'),
      Dispatcher = require('dispatcher/Dispatcher'),
      EventEmitter = require('eventEmitter'),
      AnimalConstants = require('constants/AnimalConstants'),
      _ = require('underscore'),
      testData = require('tests/mockData/animalConversations');

  var eventEmitter = new EventEmitter(),
      AnimalCollection = new AnimalConversationModel.Collection(),
      treturn = 'All good in the Animal Store!',
      CHANGE_EVENT = 'change';

  /**
   * @param  {new AnimalConversationModel.Model()} the animal that's being created
   */
  function create(animal) {
    AnimalCollection.add(animal);
    animal.id = animal.id || (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
    // TODO: add server endpoint
    // AnimalCollection.sync();
  }

  /**
   * @param {AnimalConversationModel.Model.id} id of an animal model
   * @param {AnimalConversationModel.Model.isValid()} Updates with a valid animal
   */
  function update(id, updates) {
    AnimalCollection.where({id:id}).map(function(model){
      // TODO: add server endpoint
      // model.sync();
      return model.set(updates);
    });
    // TODO: add server endpoint
    // AnimalCollection.sync();
  }

  /**
   * @param  {object} Updates animals with information
   */
  function updateAll(updates) {
    AnimalCollection.models.map(function(model){
      // TODO: add server endpoint
      // model.set(updates)
      // return model.sync();
      return model.set(updates);
    });
    // TODO: add server endpoint
    // AnimalCollection.sync();
  }

  function destroy(id) {
    // delete _todos[id];
    return AnimalCollection.where({id:id})
          .map(function(model){
            // TODO: add server endpoint
            return model.destroy();
          });
    // TODO: add server endpoint
    // AnimalCollection.sync();
  }

  // TODO: remove testing operations from file
  testData.forEach(function(animal){
    create(new AnimalConversationModel.Model(animal));
  });
  window.console.log(AnimalCollection);

  var AnimalStore = _.extend({}, EventEmitter.prototype, {
    getAll: function() {
      // TODO: add server endpoint
      // return AnimalCollection.fetch().then(function(){
      //   return AnimalCollection.models;
      // });
      return AnimalCollection.models;
    },
    emitChange: function(){
      this.emit(CHANGE_EVENT);
    },
    /**
     * @param {function} callback
     */
    addChangeListener: function(cb){
      this.on(CHANGE_EVENT, cb);
    },
    /**
     * @param {function} callback
     */
    removeChangeListener: function(cb){
      this.removeListener(CHANGE_EVENT, cb);
    }
  });

  // TODO: remove testing operations from file
  window.console.log(AnimalStore);

  // Dispatcher registrations
  Dispatcher.register(function(action){
    switch(action.actionType) {
      case AnimalConstants.ANIMAL_CREATE:
        create(action.animalModel);
        AnimalStore.emitChange();
        break;

      case AnimalConstants.ANIMAL_UPDATE:
        update(action.animalModel);
        AnimalStore.emitChange();
        break;

      case AnimalConstants.ANIMAL_DESTROY:
        desctroy(action.animalModel);
        AnimalStore.emitChange();
        break;
    }
  });

  return AnimalStore;
});

