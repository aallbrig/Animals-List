define(function(require){
  var AnimalModel = require('models/Animal'),
      Dispatcher = require('dispatcher/Dispatcher'),
      EventEmitter = require('eventEmitter'),
      AnimalConstants = require('constants/AnimalConstants'),
      _ = require('underscore'),
      testData = require('tests/mockData/animals');

  var eventEmitter = new EventEmitter(),
      AnimalCollection = new AnimalModel.Collection(),
      treturn = 'All good in the Animal Store!',
      CHANGE_EVENT = 'change',
      tempModels;

  /**
   * @param  {new AnimalModel.Model()} the animal that's being created
   */
  function create(animal) {
    window.console.log(animal);
    AnimalCollection.add(animal);
    animal.id = animal.id || (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
    // TODO: add server endpoint
    // AnimalCollection.sync();
    window.console.log('Created!');
    window.console.log(AnimalCollection);
  }
  // TODO: remove testing operations from file
  // var testModel = new AnimalModel.Model({id:(+new Date() + Math.floor(Math.random() * 999999)).toString(36),
  //                                        x:'1',y:'2',z:'3'});
  // create(testModel);

  /**
   * @param {AnimalModel.Model.id} id of an animal model
   * @param {AnimalModel.Model.isValid()} Updates with a valid animal
   */
  function update(id, updates) {
    AnimalCollection.where({id:id}).map(function(model){
      // TODO: add server endpoint
      // model.sync();
      return model.set(updates);
    });
    // window.console.log(tempModels);
    // TODO: add server endpoint
    // AnimalCollection.sync();
  }
  // TODO: remove testing operations from file
  // update(testModel.id, {x:'foo',y:'bar',z:'baz'});

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
  // TODO: remove testing operations from file
  // updateAll({x:'wait',y:'whats',z:'up'});
  // window.console.log(AnimalCollection);

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
  // destroy(testModel.id);

  // TODO: remove testing operations from file
  testData.forEach(function(animal){
    create(new AnimalModel.Model(animal));
  });
  // window.console.log(AnimalCollection);

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
    window.console.log('store action');
    window.console.log(action);
    switch(action.actionType) {
      case AnimalConstants.ANIMAL_CREATE:
        window.console.log('animal create event');
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

