import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useFirebase from '../../../Hooks/useFirebase';
import "./LoginForm.css";

const LoginForm = () => {

    const {
          handleNameBlur,
          handleEmailBlur,
          handlePasswordBlur,
          handleRegisteredChange,
          handlePasswordReset,
          handleFormSubmit,
          error,
          registered,
    } = useFirebase();
    return (
          <div className='Login-Form'>
                <h1 className='mb-3'>
                      Please
                      <span style={{ color: '#cc4717' }}>
                            {registered ? ' Login' : ' Register'}
                      </span>
                </h1>
                <form onSubmit={handleFormSubmit}>
                      <div className='d-flex justify-content-center flex-column'>
                            {!registered && (
                                  <>
                                        <input
                                              onBlur={handleNameBlur}
                                              type='text'
                                              placeholder='Name'
                                              required
                                        />
                                        <br></br>
                                        <br></br>
                                  </>
                            )}
                            <input
                                  onBlur={handleEmailBlur}
                                  type='email'
                                  placeholder='Email'
                                  required
                            />
                            <br></br>
                            <br></br>
                            <input
                                  onBlur={handlePasswordBlur}
                                  type='password'
                                  placeholder='password'
                                  required
                            />
                            <br></br>
                            <br></br>
                      </div>
                      <div>
                            <input
                                  onChange={handleRegisteredChange}
                                  type='checkbox'
                                  name=''
                                  id=''
                            />
                            <label className='p-2'> Already registered </label>
                            <br></br>

                            <p className='text-danger'>{error}</p>

                            <button
                                  type='submit'
                                  className='btn btn-Main-color w-100'
                            >
                                  {registered ? 'Login' : 'Register'}
                            </button>

                            <br></br>
                      </div>
                </form>

                <button
                      type='button'
                      className='btn btn-link text-decoration-none m-2'
                      onClick={handlePasswordReset}
                >
                      Forget Password?
                </button>
                <ToastContainer />
          </div>
    );
};

export default LoginForm;