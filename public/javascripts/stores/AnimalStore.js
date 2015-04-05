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
      tempModels;

  window.console.log('Animal');
  window.console.log(AnimalModel);
  
  window.console.log('Dispatcher');
  window.console.log(Dispatcher);
  
  window.console.log('EventEmitter');
  window.console.log(eventEmitter);

  window.console.log('AnimalConstants');
  window.console.log(AnimalConstants);

  window.console.log('AnimalCollection');
  window.console.log(AnimalCollection);
  // var testModel = new AnimalModel.Model({id:(+new Date() + Math.floor(Math.random() * 999999)).toString(36),
  //                                        x:'1',y:'2',z:'3'});
  /**
   * Create a TODO item.
   * @param  {new AnimalModel.Model()} the animal that's being created
   */
  function create(animal) {
    AnimalCollection.add(animal);
    animal.id = animal.id || (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
    window.console.log(AnimalCollection);
    // TODO: add server endpoint
    // AnimalCollection.sync();
  }
  // create(testModel);

  /**
   * Update a TODO item.
   * @param  {AnimalModel.Model.id} id of an animal model
   * @param {AnimalModel.Model.isValid()} Updates with a valid animal
   */
  function update(id, updates) {
    tempModels = AnimalCollection.where({id:id});
    tempModels.map(function(model){
      // TODO: add server endpoint
      // model.sync();
      return model.set(updates);
    });
    // window.console.log(tempModels);
    // TODO: add server endpoint
    // AnimalCollection.sync();
  }
  // update(testModel.id, {x:'foo',y:'bar',z:'baz'});

  /**
   * Update all of the TODO items with the same object.
   *     the data to be updated.  Used to mark all TODOs as completed.
   * @param  {object} updates An object literal containing only the data to be
   *     updated.
   */
  function updateAll(updates) {
    AnimalCollection.models.forEach(function(model){
      // TODO: add server endpoint
      // model.set(updates)
      // return model.sync();
      return model.set(updates);
    });
    // TODO: add server endpoint
    // AnimalCollection.sync();
  }
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
  // destroy(testModel.id);

  testData.forEach(function(animal){
    create(new AnimalModel.Model(animal));
  });

  window.console.log(AnimalCollection);

  var AnimalStore = _.extend({}, EventEmitter.prototype, {
    getAll: function() {
      return AnimalCollection;
    }
  });
  window.console.log(AnimalStore);
  // var TodoStore = assign({}, EventEmitter.prototype, {

  //   /**
  //    * Tests whether all the remaining TODO items are marked as completed.
  //    * @return {boolean}
  //    */
  //   areAllComplete: function() {
  //     for (var id in _todos) {
  //       if (!_todos[id].complete) {
  //         return false;
  //       }
  //     }
  //     return true;
  //   },

  //   /**
  //    * Get the entire collection of TODOs.
  //    * @return {object}
  //    */
  //   getAll: function() {
  //     return _todos;
  //   },

  //   emitChange: function() {
  //     this.emit(CHANGE_EVENT);
  //   },

  //   /**
  //    * @param {function} callback
  //    */
  //   addChangeListener: function(callback) {
  //     this.on(CHANGE_EVENT, callback);
  //   },

  //   /**
  //    * @param {function} callback
  //    */
  //   removeChangeListener: function(callback) {
  //     this.removeListener(CHANGE_EVENT, callback);
  //   }
  // });

  // // Register callback to handle all updates
  // AppDispatcher.register(function(action) {
  //   var text;

  //   switch(action.actionType) {
  //     case TodoConstants.TODO_CREATE:
  //       text = action.text.trim();
  //       if (text !== '') {
  //         create(text);
  //         TodoStore.emitChange();
  //       }
  //       break;

  //     case TodoConstants.TODO_TOGGLE_COMPLETE_ALL:
  //       if (TodoStore.areAllComplete()) {
  //         updateAll({complete: false});
  //       } else {
  //         updateAll({complete: true});
  //       }
  //       TodoStore.emitChange();
  //       break;

  //     case TodoConstants.TODO_UNDO_COMPLETE:
  //       update(action.id, {complete: false});
  //       TodoStore.emitChange();
  //       break;

  //     case TodoConstants.TODO_COMPLETE:
  //       update(action.id, {complete: true});
  //       TodoStore.emitChange();
  //       break;

  //     case TodoConstants.TODO_UPDATE_TEXT:
  //       text = action.text.trim();
  //       if (text !== '') {
  //         update(action.id, {text: text});
  //         TodoStore.emitChange();
  //       }
  //       break;

  //     case TodoConstants.TODO_DESTROY:
  //       destroy(action.id);
  //       TodoStore.emitChange();
  //       break;

  //     case TodoConstants.TODO_DESTROY_COMPLETED:
  //       destroyCompleted();
  //       TodoStore.emitChange();
  //       break;

  //     default:
  //       // no op
  //   }
  // });

  // module.exports = TodoStore;
  return AnimalStore;
});

