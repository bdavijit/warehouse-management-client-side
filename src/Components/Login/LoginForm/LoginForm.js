import React from 'react';
import useFirebase from '../../../Hooks/useFirebase';

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
          <div>
                <h1 className='mb-3'>
                      Please {registered ? 'Login' : 'Register'}!!
                </h1>
                <form onSubmit={handleFormSubmit}>
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
                            placeholder='email'
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
                      <input
                            onChange={handleRegisteredChange}
                            type='checkbox'
                            name=''
                            id=''
                      />
                      <label> Already registered </label>
                      <br></br>
                 

                      <p className='text-danger'>{error}</p>
                    

                      <button
                            className='btn btn-link text-decoration-none'
                            onClick={handlePasswordReset}
                      >
                            Forget Password?
                      </button>
                      <br></br>
                      <br></br>
                      <button type='submit' className='btn btn-primary'>
                            {registered ? 'Login' : 'Register'}
                      </button>

                      <br></br>
                </form>
          </div>
    );
};

export default LoginForm;