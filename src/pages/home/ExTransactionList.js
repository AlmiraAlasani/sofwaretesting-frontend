
// styles
import styles from './Home.module.css'

export default function ExTransactionList({ transactions ,onDelete }) {


  return (
    <ul className={styles.transactions}>
      {transactions?.map((transaction) => (
        <li key={transaction.id} data-testid="income-transaction" style={{borderLeftColor:"red"}}>
          <p className={styles.name}>{transaction.description}</p>
          <p className={styles.amount}>${transaction.amount}</p>
          <button
              onClick={() => onDelete(transaction.id)}
          >x</button>
        </li>
      ))}
    </ul>
  )
}