import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import useFirebase from '../../Hooks/useFirebase';
import './header2.css';

const Header2 = () => {
      const { user, handleSignOut } = useFirebase();
return (
      <header>
            <Navbar bg='light' expand='lg'>
                  <Container className='NavBox'>
                        <Navbar.Brand href='#home'>
                              IQBAL's Cuisine
                        </Navbar.Brand>
                        <div>
                              <Navbar.Toggle aria-controls='basic-navbar-nav' />
                              <Navbar.Collapse
                                    className='className="justify-content-end"'
                                    id='basic-navbar-nav'
                              >
                                    <Nav className='me-0'>
                                          <Nav.Link href='#home'>Home</Nav.Link>
                                          <Nav.Link href='#link'>Link</Nav.Link>
                                          <NavDropdown
                                                title='Name'
                                                id='basic-nav-dropdown'
                                          >
                                                <NavDropdown.Item href='#action/3.1'>
                                                      Signout
                                                </NavDropdown.Item>
                                                <NavDropdown.Item href='#action/3.2'>
                                                      Another action
                                                </NavDropdown.Item>
                                                <NavDropdown.Item href='#action/3.3'>
                                                      Something
                                                </NavDropdown.Item>
                                                <NavDropdown.Divider />
                                                <NavDropdown.Item href='#action/3.4'>
                                                      Separated link
                                                </NavDropdown.Item>
                                          </NavDropdown>
                                    </Nav>
                              </Navbar.Collapse>
                        </div>
                  </Container>
            </Navbar>
      </header>
);
};

export default Header2;
