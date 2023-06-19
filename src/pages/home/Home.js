
// styles
import styles from './Home.module.css'

// components

import TransactionList from './TransactionList'
import {useEffect, useState} from "react";
import {createTodo, deleteTodo, getTodos} from "../../hooks/api";
import Navbar from "../../components/Navbar";
import TransactionForm from "./TransactionForm";



export default function Home() {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = async () => {
        try {
            const fetchedTodos = await getTodos(); // Fetch todos from the API
            setTodos(fetchedTodos);
        } catch (error) {
            console.log('Error fetching todos:', error);
        }
    };
    const handleDeleteTodo = async (todoId) => {
        try {
            await deleteTodo(todoId); // Delete the todo using the API
            setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
        } catch (error) {
            console.log('Error deleting todo:', error);
        }
    };
    const handleCreateTodo = async (newTodo) => {
        try {
            const createdTodo = await createTodo(newTodo); // Create a new todo using the API
            setTodos((prevTodos) => [...prevTodos, createdTodo]);
        } catch (error) {
            console.log('Error creating todo:', error);
        }
    };

    return (
    <div className={styles.container}>
      <div className={styles.content}>
         <TransactionList transactions={todos}
           onDelete={handleDeleteTodo}/>

      </div>
      <div className={styles.sidebar}>
        <TransactionForm onCreate={handleCreateTodo} />
      </div>
    </div>
  )
}
