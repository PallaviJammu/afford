// src/Login.jsx
import { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    // Basic fake login check (replace with real API later)
    if (username === 'admin' && password === '1234') {
      setLoggedIn(true);
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div style={styles.container}>
      <h2>Login Page</h2>
      {loggedIn ? (
        <p style={{ color: 'green' }}>✅ Login Successful!</p>
      ) : (
        <form onSubmit={handleLogin} style={styles.form}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={styles.input}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required
          />
          <button type="submit" style={styles.button}>Login</button>
        </form>
      )}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '300px',
    margin: '100px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    textAlign: 'center',
    fontFamily: 'sans-serif',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  input: {
    padding: '8px',
    fontSize: '16px',
  },
  button: {
    padding: '8px',
    backgroundColor: '#1976d2',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  },
};

export default Login;
