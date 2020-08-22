import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarToggler, MDBCollapse, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBContainer, MDBBtn } from 'mdbreact';
import './NavbarHeader.styles.scss'
class NavbarHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
          collapse: false,
          isWideEnough: false,
        };
        this.onClick = this.onClick.bind(this);
      }
    
      onClick() {
        this.setState({
          collapse: !this.state.collapse,
        });
      }
      style = 
      {
        anchor:
        {
            margin:'0px', color:'black'
        }
      }
    
    render() {
        return (
            <div>
            <MDBNavbar className='navbar' color="bg-dark" fixed="top" dark expand="md" scrolling transparent>
                <MDBContainer fluid >
              <MDBNavbarBrand href="/" >
                <span style={{fontWeight:'bold'}}>TRIPifyy</span>
              </MDBNavbarBrand>
              {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
              <MDBCollapse isOpen={this.state.collapse} navbar >
                <MDBNavbarNav right>
                  <MDBNavItem>
                    <MDBNavLink to="/register/organizer"><MDBBtn color='link' className='white-text'>Become an Organizer</MDBBtn></MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="/sign-in" ><MDBBtn color='link' className='white-text'>Sign In</MDBBtn></MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="/register/user"><MDBBtn color='info' style={{margin:'0px',borderRadius:'7px'}}>Join</MDBBtn></MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
              </MDBContainer>
            </MDBNavbar>
            </div>
        );
    }
}


export default NavbarHeader;