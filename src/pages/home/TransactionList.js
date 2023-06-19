
// styles
import styles from './Home.module.css'

export default function TransactionList({ transactions ,onDelete }) {


  return (
    <ul className={styles.transactions}>
      {transactions?.map((transaction) => (
        <li key={transaction.id}>
          <p className={styles.name}>{transaction.name}</p>
          <p className={styles.amount}>${transaction.description}</p>
          <button
              onClick={() => onDelete(transaction.id)}
          >x</button>
        </li>
      ))}
    </ul>
  )
}