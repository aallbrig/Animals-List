/** @jsx React.DOM */
define(function(require){
  var React = require('react'),
      ReactBootstrap = require('reactBootstrap'),
      Grid = ReactBootstrap.Grid,
      Row = ReactBootstrap.Row,
      Col = ReactBootstrap.Col,
      NavBar = require('jsx!components/NavBar');

  return React.createClass({
    render: function(){
      return (
        <span>
          <NavBar/>
          <Grid>
            <Row>
              <Col xs={12}>
                Hey!
              </Col>
            </Row>
          </Grid>
        </span>
      );
    }
  });
})