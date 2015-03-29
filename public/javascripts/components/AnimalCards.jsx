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
      Panel = ReactBootstrap.Panel;

  var Animals = [{
      href : 'home',
      text : 'Home'
    }, {
      href : 'home',
      text : 'Home'
    }, {
      href : 'home',
      text : 'Home'
    }, {
      href : 'home',
      text : 'Home'
    }, {
      href : 'home',
      text : 'Home'
    }];

  var AnimalCard = React.createClass({
    footer: function(){
      return (
        <article key='footer'>
          <h4> This is an animal! </h4>
          <p> Is it not cool? </p>
        </article>
      )
    },
    render: function(){
      return (
        <Panel footer={this.footer()} className="animal-card">
          <img src='http://www.critterbabies.com/wp-content/uploads/2014/02/a1.jpg' className='img-responsive' alt='image!'/>
          <p>Animal card!</p>
        </Panel>
      );
    }
  })

  return React.createClass({
    AnimalCards: function(){
      return Animals.map(function(item, index){
        window.console.log(index);
        return (
          <Col xs={6} sm={6} md={4}>
            <AnimalCard/>
          </Col>
        );
      });
    },
    render: function(){
      return (
        <Grid fluid={true}>
          <Row>
            {this.AnimalCards()}
          </Row>
        </Grid>
      );
    }
  })
})