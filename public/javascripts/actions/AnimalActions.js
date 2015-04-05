define(function(require){
  var Dispatcher = require('dispatcher/Dispatcher'),
      AnimalConstants = require('constants/AnimalConstants');

  var TodoActions = {
    /**
     * @param  {string} text
     */
    create: function(text) {
      Dispatcher.dispatch({
        actionType: AnimalConstants.TODO_CREATE,
        text: text
      });
    },

    /**
     * @param  {string} id The ID of the ToDo item
     * @param  {string} text
     */
    updateText: function(id, text) {
      Dispatcher.dispatch({
        actionType: AnimalConstants.TODO_UPDATE_TEXT,
        id: id,
        text: text
      });
    },

    /**
     * Toggle whether a single ToDo is complete
     * @param  {object} todo
     */
    toggleComplete: function(todo) {
      var id = todo.id;
      if (todo.complete) {
        Dispatcher.dispatch({
          actionType: AnimalConstants.TODO_UNDO_COMPLETE,
          id: id
        });
      } else {
        Dispatcher.dispatch({
          actionType: AnimalConstants.TODO_COMPLETE,
          id: id
        });
      }
    },

    /**
     * Mark all ToDos as complete
     */
    toggleCompleteAll: function() {
      Dispatcher.dispatch({
        actionType: AnimalConstants.TODO_TOGGLE_COMPLETE_ALL
      });
    },

    /**
     * @param  {string} id
     */
    destroy: function(id) {
      Dispatcher.dispatch({
        actionType: AnimalConstants.TODO_DESTROY,
        id: id
      });
    },

    /**
     * Delete all the completed ToDos
     */
    destroyCompleted: function() {
      Dispatcher.dispatch({
        actionType: AnimalConstants.TODO_DESTROY_COMPLETED
      });
    }

  };

});