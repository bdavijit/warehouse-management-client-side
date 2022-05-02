import React from 'react';
import useFirebase from '../../Hooks/useFirebase';
import LoginForm from './LoginForm/LoginForm';
import "./Login.css"

const Login = () => {
      const { singInWithGoogle } = useFirebase();
      return (
            <div className='LoginBox'>
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
