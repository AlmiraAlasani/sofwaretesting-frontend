import { useState } from 'react';
import axios from 'axios';

// styles
import styles from './Signup.module.css';

const BASE_URL = 'https://localhost:44308';

export default function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${BASE_URL}/api/auth/register`, {
        username,
        passwordHash: password
      });

      // Handle success response here, e.g., show a success message or redirect to a different page
      console.log('Registration successful:', response.data);
    } catch (error) {
      // Handle error here, e.g., display an error message to the user
      console.error('Registration failed:', error.response.data);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles['signup-form']}>
      <h2>sign up</h2>
      <label>
        <span>username:</span>
        <input
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
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
        sign up
      </button>
    </form>
  );
}
