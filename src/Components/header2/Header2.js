import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
import './header2.css';

const Header2 = () => {
      const { user, handleSignOut } = useFirebase();
            const navigate = useNavigate();
            // const showDetail = () => {
            //       navigate('/inventory/' + _id);
            // };
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
                                    Grocery
                              </span>{' '}
                              HUB
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
                                                            onClick={() =>
                                                                  navigate(
                                                                        '/ManageInventories'
                                                                  )
                                                            }
                                                      >
                                                            Manage Items
                                                      </NavDropdown.Item>
                                                      <NavDropdown.Item
                                                            id='nav-dropdown'
                                                            onClick={() =>
                                                                  navigate(
                                                                        '/Add_new'
                                                                  )
                                                            }
                                                      >
                                                            Add Item
                                                      </NavDropdown.Item>
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
