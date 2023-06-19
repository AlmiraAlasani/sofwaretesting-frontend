import { useState, useEffect } from 'react'


export default function TransactionForm({ onCreate }) {
  const [newTodo, setNewTodo] = useState({
    name: '',
    description: '',

    isCompleted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;

    setNewTodo((prevTodo) => ({
      ...prevTodo,
      [name]: newValue,
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(newTodo);
    setNewTodo({
      name: '',
      description: '',

      isCompleted: false,
    });
  };


  return (
    <>
      <h3>Add a Transaction</h3>
      <form  onSubmit={handleSubmit}>
        <label>
          <span>Transaction name:</span>
          <input
              type="text"
              name="name"
              placeholder="Name"
              value={newTodo.name}
              onChange={handleChange}
              required
          />
        </label>
        <label>
          <span>Descritpion ($):</span>
          <input
              type="text"
              name="description"
              placeholder="Description"
              value={newTodo.description}
              onChange={handleChange}
              required
          />
        </label>
        <label>
          <span>IsCompleted ($):</span>
          <input
              type="checkbox"
              name="isCompleted"
              onChange={handleChange}

          />
        </label>
        <button>Add Transaction</button>
      </form>
    </>
  )
}