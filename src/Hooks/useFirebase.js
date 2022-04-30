import {
      createUserWithEmailAndPassword,
      getAuth,
      GoogleAuthProvider,
      onAuthStateChanged,
      sendEmailVerification,
      sendPasswordResetEmail,
      signInWithEmailAndPassword,
      signInWithPopup,
      signOut,
      updateProfile
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import app from '../firebase.init';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
      const [user, setUser] = useState({});

      const [registered, setRegistered] = useState(false);
      const [error, setError] = useState('');
      const [name, setName] = useState('');
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');

      //update name
      const setUserName = () => {
            console.log('ok');
            updateProfile(auth.currentUser, {
                  displayName: name,
            })
                  .then(() => {
                        console.log('updating name');
                  })
                  .catch((error) => {
                        setError(error.message);
                  });
      };

      const handleNameBlur = (event) => {
            setName(event.target.value);
      };
      const handleEmailBlur = (event) => {
            setEmail(event.target.value);
      };

      const handlePasswordBlur = (event) => {
            setPassword(event.target.value);
      };

      const handleRegisteredChange = (event) => {
            setRegistered(event.target.checked);
      };

      const handlePasswordReset = () => {
            if (!email){
                  setError('Please type Email');
            }
                  sendPasswordResetEmail(auth, email).then(() => {
                        console.log('email sent');
                        setError('email sent');
                  });
      };

      const verifyEmail = () => {
            sendEmailVerification(auth.currentUser).then(() => {
                  console.log('Email Verification Sent');
                  setError('Email Verification Sent');
            });
      };

      const handleFormSubmit = (event) => {
            event.preventDefault();

            // check Password Should contain at least one special character
            if (!/(?=.*?[#?!@$%^&*-])/.test(password)) {
                  setError(
                        'Password Should contain at least one special character'
                  );
                  return;
            }

            if (registered) {
                  signInWithEmailAndPassword(auth, email, password)
                        .then((result) => {
                              const user = result.user;
                              setError('');
                              console.log(user);
                              setUser(user);
                        })
                        .catch((error) => {
                              setError(error.message);
                        });
            } else {
                  //create user
                  createUserWithEmailAndPassword(auth, email, password)
                        .then((result) => {
                              const user = result.user;
                              console.log(user);
                              setUser(user);
                              setError('');
                              verifyEmail();
                              setUserName();
                        })
                        .catch((error) => {
                              setError(error.message);
                        });
            }
      };

      const singInWithGoogle = () => {
            signInWithPopup(auth, googleProvider).then((result) => {
                  const user = result.user;
                  setUser(user);
                  console.log(user);
            });
      };

      const handleSignOut = () => {
            signOut(auth).then(() => {});
      };

      //value ta dhore rakhe
      useEffect(() => {
            onAuthStateChanged(auth, (user) => {
                  setUser(user);
            });
      }, []);

      return {
            user,
            handleSignOut,
            singInWithGoogle,
            handleNameBlur,
            handleEmailBlur,
            handlePasswordBlur,
            handleRegisteredChange,
            handlePasswordReset,
            verifyEmail,
            handleFormSubmit,
            error,
            registered,
      };
};

export default useFirebase;
