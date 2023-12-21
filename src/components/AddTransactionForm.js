import React, { useState } from "react";
//import Transaction from "./Transaction";

function AddTransactionForm({ onTransactionSubmit }) {
const [date, setDate] = useState("");
const [description, setDescription] = useState("");
const [category, setCategory] = useState("");
const [amount, setAmount] = useState("");

function handleSubmit(e) {
  e.preventDefault();
  // onTransactionSubmit({ date, description, category, amount });
  setDate("");
  setDescription("");
  setCategory("");
  setAmount("");

  const transactions = {
      date : date,
      description : description,
      category : category,
      amount : amount
    }
//persist transaction data on server
fetch("http://localhost:8001/transactions", {
  method: "POST",
  headers: {
    "Content-Type" : "application/json"
  },
  body: JSON.stringify(transactions)
})
.then(resp => resp.json())
.then((data) => onTransactionSubmit(data.transactions))
}



return (
  <div className="ui segment" onSubmit={handleSubmit}>
    <form className="ui form">
      <div className="inline fields">

        <input type="date" name="date" 
        value={date} 
        onChange={(e) => setDate(e.target.value) } />

        <input type="text" name="description" placeholder="Description" value={description}  onChange={(e) => setDescription(e.target.value)} />

        <input type="text" name="category" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)}/>

        <input type="number" name="amount" placeholder="Amount" step="0.01" value={amount} onChange={(e) => setAmount(e.target.value)}/>

      </div>
      <button className="ui button" type="submit">
        Add Transaction
      </button>
    </form>
  </div>
);
}

export default AddTransactionForm;
