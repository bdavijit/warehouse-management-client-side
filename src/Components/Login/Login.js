import React from 'react';
import { Spinner } from 'react-bootstrap';
import useFirebase from '../../Hooks/useFirebase';
import "./Login.css";
import LoginForm from './LoginForm/LoginForm';

const Login = () => {
      const { singInWithGoogle } = useFirebase();
      const { loading } = useFirebase();
      return (
            <div className='LoginBox'>
                  {loading ? (
                        <Spinner animation='border' variant='danger' />
                  ) : (
                        ''
                  )}
                  <LoginForm></LoginForm>

                  <p>or</p>
                  <div style={{ margin: '20px' }}>
                        <button
                              onClick={singInWithGoogle}
                              className='btn btn-Main-color'
                              style={{ border: '0' }}
                        >
                              Google Sign In
                        </button>
                  </div>
            </div>
      );
};

export default Login;
