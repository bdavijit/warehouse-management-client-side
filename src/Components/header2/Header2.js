import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
import './header2.css';

const Header2 = () => {
      const { user, handleSignOut } = useFirebase();
return (
      <header>
            <Navbar bg='light' expand='lg'>
                  <Container className='NavBox'>
                        <Navbar.Brand to='/'>
                              <span
                                    style={{
                                          color: '#e03b8b',
                                          fontWeight: 'bold',
                                    }}
                              >
                                    IQBAL's
                              </span>{' '}
                              Cuisine
                        </Navbar.Brand>
                        <div>
                              <Navbar.Toggle aria-controls='basic-navbar-nav' />
                              <Navbar.Collapse
                                    className='className="justify-content-end"'
                                    id='basic-navbar-nav'
                              >
                                    <Nav className='me-0'>
                                          <Nav.Link>
                                                <NavLink
                                                      className='custom'
                                                      activeClassName='activeStyle'
                                                      to='/'
                                                >
                                                      Home
                                                </NavLink>
                                          </Nav.Link>
                                          <Nav.Link>
                                                {' '}
                                                <NavLink
                                                      className='custom'
                                                      activeClassName='activeStyle'
                                                      to='/product'
                                                >
                                                      Products
                                                </NavLink>
                                          </Nav.Link>
                                          <Nav.Link>
                                                {' '}
                                                <NavLink
                                                      className='custom'
                                                      activeClassName='activeStyle'
                                                      to='/blogs'
                                                >
                                                      Blogs
                                                </NavLink>
                                          </Nav.Link>
                                          <Nav.Link>
                                                {' '}
                                                <NavLink
                                                      className='custom'
                                                      activeClassName='activeStyle'
                                                      to='/About'
                                                >
                                                      About
                                                </NavLink>
                                          </Nav.Link>
                                          {user ? (
                                                <NavDropdown
                                                      title={
                                                            user?.displayName &&
                                                            user.displayName
                                                      }
                                                      id='basic-nav-dropdown'
                                                      
                                                >
                                                      <NavDropdown.Item
                                                            id='nav-dropdown'
                                                            onClick={
                                                                  handleSignOut
                                                            }
                                                      >
                                                            Logout
                                                      </NavDropdown.Item>
                                                </NavDropdown>
                                          ) : (
                                                <Nav.Link>
                                                      {' '}
                                                      <NavLink
                                                            className='custom'
                                                            activeClassName='activeStyle'
                                                            to='/Login'
                                                      >
                                                            Register/Login
                                                      </NavLink>
                                                </Nav.Link>
                                          )}
                                    </Nav>
                              </Navbar.Collapse>
                        </div>
                  </Container>
            </Navbar>
      </header>
);
};

export default Header2;
