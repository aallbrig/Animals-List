/** @jsx React.DOM */
define(function(require){
  var React = require('react'),
      $ = require('jquery'),
      ReactBootstrap = require('reactBootstrap'),
      Grid = ReactBootstrap.Grid,
      Row = ReactBootstrap.Row,
      Col = ReactBootstrap.Col,
      Panel = ReactBootstrap.Panel,
      Input = ReactBootstrap.Input,
      Button = ReactBootstrap.Button,
      AnimalActions = require('actions/AnimalActions'),
      AnimalModel = require('models/Animal');

  return React.createClass({
    getInitialState: function(){
      return {
        created : false,
        animalModel : new AnimalModel.Model()
      };
    },
    onSubmit: function(e){
      e.preventDefault();
      this.setState({created : true});
      AnimalActions.create(this.state.animalModel);
      window.console.log(e);
      window.console.log('submit');
    },
    onChange: function(e){
      this.state.animalModel.set(e.target.name, e.target.value);
    },
    render: function(){
      return (
        <Panel header={'Animal Create Form'} 
               bsStyle='success'>
          { (this.state.created) ?
            <h3> Thank you! </h3>
          :
          <form onSubmit={this.onSubmit}>
            <Input type='text'
                   label='Animal Name'
                   name='commonName'
                   onChange={this.onChange} />
            <Input type='text'
                   label='Animal Image Url'
                   name='img/src'
                   onChange={this.onChange} />
            <Button bsStyle='primary'
                    type='submit'
                    className='form-control'>
              Create New Animal
            </Button>
          </form>
          }
        </Panel>
      );
    }
  })
});

