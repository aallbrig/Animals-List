/** @jsx React.DOM */
define(function(require){
  var React = require('react'),
      ReactBootstrap = require('reactBootstrap'),
      Grid = ReactBootstrap.Grid,
      Row = ReactBootstrap.Row,
      Col = ReactBootstrap.Col,
      Jumbotron = ReactBootstrap.Jumbotron,
      Button = ReactBootstrap.Button,
      NavBar = require('jsx!components/NavBar'),
      AnimalCards = require('jsx!components/AnimalCards'),
      AnimalCreateForm = require('jsx!components/Animal/CreateForm');

  return React.createClass({
    render: function(){
      return (
        <span>
          <NavBar/>
          <Grid>
            <Row>
              <Col xs={12}>
                <Jumbotron>
                  <h2>Welcome to Animal's List</h2>
                  <p>Welcome to Animal's List-- the premiere animal browsing experience. Animal's List was founded with one purpose: to bring you and loveable animals together under one site.  Stay and browse the awesome animals!</p>
                  <p><Button bsStyle='primary'>Learn more</Button></p>
                </Jumbotron>
              </Col>
            </Row>
          </Grid>
          <AnimalCreateForm />
          <AnimalCards/>
        </span>
      );
    }
  });
})