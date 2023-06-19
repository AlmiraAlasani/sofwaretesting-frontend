import { Link } from "react-router-dom"


// styles
import styles from './Navbar.module.css'

export default function Navbar() {

  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}>myMoney</li>

          <>
            <li>Login</li>
            <li>Signup</li>
          </>


          <>
            <li>hello</li>
            <li>
              <button className="btn" >Logout</button>
            </li>
          </>

      </ul>
    </nav>
  )
}
