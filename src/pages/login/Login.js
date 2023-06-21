import { useState } from 'react';
import axios from 'axios';

// styles
import styles from './Login.module.css';
import { setToken } from '../../hooks/tokenStorage';

const BASE_URL = 'https://localhost:44308';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${BASE_URL}/api/auth/login`, {
        username:email,
        passwordHash:password
      });

      // Extract the bearer token from the response
      const token = response?.data;
  

      // Set the token in the Authorization header for all subsequent requests
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setToken(token)

      // Handle success, e.g., redirect to a different page or update state
      // console.log('Login successful:', response?.data);
    } catch (error) {
      // Handle error, e.g., display an error message to the user
      // setError(error.response.data?.message);
      // console.error('Login failed:', error.response.data);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles['login-form']}>
      <h2>login</h2>
      {error && <p className={styles.error}>{error}</p>}
      <label>
        <span>email:</span>
        <input
          type="string"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label>
        <span>password:</span>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label>
      <button className="btn" type="submit">
        Login
      </button>
    </form>
  );
}
