
// styles
import styles from './Home.module.css'

// components

import TransactionList from './TransactionList'
import {useEffect, useState} from "react";
import {createExpenses, createIncomes, deleteExpenses, deleteIncomes, getBalanceByID, getExpenses, getIncomes} from "../../hooks/api";
import Navbar from "../../components/Navbar";
import TransactionForm from "./TransactionForm";
import ExTransactionForm from './ExTransactionForm';
import ExTransactionList from './ExTransactionList';



export default function Home() {
    const [incomes, setIncomes] = useState([]);
    const [expenses, setExpenses] = useState([]);
    const [balance, setBalance] = useState([]);
    useEffect(() => {
        fetchIncomes();
        fetchExpenses();
        fetchAccount();
    }, []);

    const fetchIncomes = async () => {
        try {
            const fetchedTodos = await getIncomes(); // Fetch todos from the API
            setIncomes(fetchedTodos); 
        } catch (error) {
            console.log('Error fetching todos:', error);
        }
    };
    const handledeleteIncomes = async (todoId) => {
        try {
            await deleteIncomes(todoId); // Delete the todo using the API
            setIncomes((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
        } catch (error) {
            console.log('Error deleting todo:', error);
        }
    };
    const handlecreateIncomes = async (newTodo) => {
        try {
            const createdTodo = await createIncomes(newTodo); // Create a new todo using the API
            setIncomes((prevTodos) => [...prevTodos, createdTodo]);
            fetchAccount()
        } catch (error) {
            console.log('Error creating todo:', error);
        }
    };

    //expenses


    const fetchExpenses= async () => {
        try {
            const fetchedTodos = await getExpenses(); // Fetch todos from the API
            setExpenses(fetchedTodos);
        } catch (error) {
            console.log('Error fetching todos:', error);
        }
    };
    const handledeleteExpenses= async (todoId) => {
        try {
            await deleteExpenses(todoId); // Delete the todo using the API
            setExpenses((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
        } catch (error) {
            console.log('Error deleting todo:', error);
        }
    };
    const handlecreateExpenses = async (newTodo) => {
        try {
            const createdTodo = await createExpenses(newTodo); // Create a new todo using the API
            setExpenses((prevTodos) => [...prevTodos, createdTodo]);
            fetchAccount()
        } catch (error) {
            console.log('Error creating todo:', error);
        }
    };

    // fetch account

    const fetchAccount = async () => {
        try {
            const fetchAccount = await getBalanceByID(); // Fetch todos from the API
           setBalance(fetchAccount)

        } catch (error) {
            console.log('Error fetching todos:', error);
        }
    };
    console.log(fetchAccount)
    return (
    <div className={styles.container}>
       
      <div className={styles.content}>
      <h3>ACCOUNT BALANCE:{balance.balance}</h3>
         <TransactionList transactions={incomes}
           onDelete={handledeleteIncomes}/>

         <ExTransactionList transactions={expenses}
           onDelete={handledeleteExpenses}/>

     
      </div>
      <div className={styles.sidebar}>
        <TransactionForm onCreate={handlecreateIncomes} />
        <ExTransactionForm onCreate={handlecreateExpenses} />
      </div>
    </div>
  )
}
