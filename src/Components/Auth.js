import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

function Auth() {
  const [userInputs, setUserInputs] = useState({
    email: '',
    password: '',
  });
  const { email, password } = userInputs;

  const saveUserInput = ({ target }) => {
    const { name, value } = target;
    console.log(target.value);
    setUserInputs(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const { signin, signup, logout } = useAuth();
  const signinWithForm = () => {
    signin(email, password);
  };
  const signupWithForm = () => {
    signup(email, password);
  };
  const logoutWithForm = () => {
    logout();
  };
  return (
    <form onSubmit={e => e.preventDefault()}>
      <div>
        <input value={email} name={email} placeholder="email" onChange={saveUserInput} />
      </div>
      <div>
        <input value={password} name={password} placeholder="password" onChange={saveUserInput} />
      </div>
      <button onClick={signinWithForm}>signin</button>
      <button onClick={signupWithForm}>signup</button>
      <button onClick={logoutWithForm}>logout</button>
    </form>
  );
}

export default Auth;
