import { useState, useEffect } from 'react'


export default function ExTransactionForm({ onCreate }) {
  const [newTodo, setNewTodo] = useState({

    description: '',

  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newValue = name === 'amount' ? Number(value) : value;

    setNewTodo((prevTodo) => ({
      ...prevTodo,
      [name]: newValue,
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(newTodo);
    setNewTodo({
      amount: 0,
      description: '',

    });
  };


  return (
    <>
      <h3 style={{color:"red",marginTop:"15px"}}>Add a Expense</h3>
      <form style={{backgroundColor:"red"}} onSubmit={handleSubmit}>
       
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
         <span>Amount ($):</span>
         <input
             type="number"
             name="amount"
             defaultValue={undefined}
             placeholder="amount"
             value={newTodo.amount}
             onChange={handleChange}
             required
         />
       </label>
       <button>Add Transaction</button>
     </form>
    </>
  )
}

