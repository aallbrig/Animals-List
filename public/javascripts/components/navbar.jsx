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
      CollapsableNav = ReactBootstrap.CollapsableNav;

  var NavItems = [{
      href : 'home',
      text : 'Home'
    }],
    NavItemsRight = [{
      href : 'home',
      text : 'Home'
    }];
    MenuItems = [{
      text : 'Action 1'
    }];

  return React.createClass({
    NavItems : function(){
      return NavItems.map(function(item, index){
                return (<NavItem eventKey={index} href={item.href}>{item.text}</NavItem>);
              });
    },
    MenuItems : function(){
      return MenuItems.map(function(item, index){
        return (<MenuItem eventKey={index}>{item.text}</MenuItem>);
      });
    },
    NavItemsRight: function(){
      return NavItemsRight.map(function(item, index){
        return (<NavItem eventKey={index} href={item.href}>{item.text}</NavItem>);
      });
    },
    render: function(){
      return (
        <Grid fluid={true}>
          <Row>
            <Col xs={12}>
              <Navbar brand="Animal's List" toggleNavKey={0}>
                <CollapsableNav eventKey={0}> {/* This is the eventKey referenced */}
                  <Nav navbar>
                    {this.NavItems()}
                    <DropdownButton eventKey={3} title='Dropdown'>
                      {this.MenuItems()}
                    </DropdownButton>
                  </Nav>
                  <Nav navbar right>
                    {this.NavItemsRight()}
                  </Nav>
                </CollapsableNav>
              </Navbar>
            </Col>
          </Row>
        </Grid>
      );
    }
  })
})