import { useState } from 'react'


// styles
import styles from './Login.module.css'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // const { login, error, isPending } = useLogin()

  const handleSubmit = (e) => {
    e.preventDefault()

  }

  return (
    <form onSubmit={handleSubmit} className={styles['login-form']}>
      <h2>login</h2>
      <label>
        <span>email:</span>
        <input 
          type="email" 
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
       <button className="btn">Login</button>
       <button className="btn" disabled>loading</button>

    </form>
  )
}
