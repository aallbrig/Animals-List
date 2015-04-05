/** @jsx React.DOM */
define(function(require){
  var React = require('react'),
      AnimalModel = require('models/Animal'),
      ReactBootstrap = require('reactBootstrap'),
      Grid = ReactBootstrap.Grid,
      Row = ReactBootstrap.Row,
      Col = ReactBootstrap.Col,
      Navbar = ReactBootstrap.Navbar,
      Nav = ReactBootstrap.Nav,
      NavItem = ReactBootstrap.NavItem,
      DropdownButton = ReactBootstrap.DropdownButton,
      MenuItem = ReactBootstrap.MenuItem,
      CollapsableNav = ReactBootstrap.CollapsableNav,
      Panel = ReactBootstrap.Panel,
      AnimalStore = require('stores/AnimalStore');


  var AnimalCard = React.createClass({
    propTypes: {
      animal : React.PropTypes.object
    },
    footer: function(){
      return (
        <article key='footer'>
          <h4> This is an animal! </h4>
          <p> Is it not cool? </p>
        </article>
      )
    },
    ribbon: function(){
      if(this.props.animal.text == 'Home'){
        return (<span className='animal-card_ribbon'><em>New!</em></span>);
      }
      return null;
    },
    render: function(){
      var animalModel = this.props.animal;
      return (
        <Panel footer={this.footer()} className="animal-card">
          {this.ribbon()}
          <img src={ animalModel.get('img').src }
               className='img-responsive img-thumbnail'
               alt='image!'/>
          <p>Animal card!</p>
        </Panel>
      );
    }
  });

  return React.createClass({
    componentDidMount: function() {
      AnimalStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
      AnimalStore.removeChangeListener(this._onChange);
    },
    _onChange: function(){
      window.console.log('something changed!');
      this.forceUpdate();
    },
    AnimalCards: function(animals){
      return animals.map(function(animal, index){
        return (
          <Col xs={6} sm={6} md={4}>
            <AnimalCard animal={animal}/>
          </Col>
        );
      });
    },
    render: function(){
      var animals = AnimalStore.getAll();
      return (
        <Grid fluid={true}>
          <Row>
            {this.AnimalCards(animals)}
          </Row>
        </Grid>
      );
    }
  })
})