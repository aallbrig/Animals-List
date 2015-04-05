/** @jsx React.DOM */
define(function(require){
  var React = require('react'),
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
      Button = ReactBootstrap.Button,
      AnimalStore = require('stores/AnimalStore');

  var AnimalCard = React.createClass({
    propTypes: {
      animal : React.PropTypes.object
    },
    onClick: function(){
      // TODO: remove this fn and take user to a conversation
      window.console.log('Hi!  This is...');
      window.console.log(this.props.animal);
    },
    footer: function(){
      return (
        <article key='footer'>
          <h4>
            This is {this.props.animal.commonName} wanting to speak with you about, you know, animal stuff.
          </h4>
          <p>{this.props.animal.greeting}</p>
          <Button bsStyle='primary'
                  className='form-control'
                  onClick={this.onClick}>
            Talk with me! 
          </Button>
        </article>
      )
    },
    render: function(){
      var animalModel = this.props.animal;
      return (
        <Panel footer={this.footer()} className="animal-card">
          <img src={ animalModel.get('img').src }
               className='img-responsive img-thumbnail'
               alt='image!'/>
        </Panel>
      );
    }
  });

  return React.createClass({
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