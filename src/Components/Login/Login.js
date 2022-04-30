import React from 'react';
import useFirebase from '../../Hooks/useFirebase';
import LoginForm from './LoginForm/LoginForm';

const Login = () => {
      const { singInWithGoogle } = useFirebase();
      return (
            <div>
                  <LoginForm></LoginForm>

                  <p>or</p>
                  <div style={{ margin: '20px' }}>
                        <button
                              onClick={singInWithGoogle}
                              className='btn btn-primary'
                        >
                              Google Sign In
                        </button>
                  </div>
            </div>
      );
};

export default Login;
