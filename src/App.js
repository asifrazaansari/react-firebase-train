import { useState } from 'react';
import './App.css';
import { useFirebase } from './context/Firebase';

function App() {

  const firebase = useFirebase()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  
  return (
    <div className="App">
      <h1>Firebase React App</h1>
      <input
        onChange={e => setEmail(e.target.value)}
        value={email}
        type="email"
        placeholder='Enter email address'
      />
      <input
        onChange={e => setPassword(e.target.value)}
        value={password}
        type="password"
        placeholder='Enter password'
      />
      <button
        onClick={() => {
          firebase.signupUserWithEmailAndPassword(email, password)
          firebase.putData("users/asifraza", { email, password })
        }}>Signup</button>
    </div>
  );
}

export default App;