import React, { useEffect, useState } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [transactions, setTransaction] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    //fetching data + searching
    fetch("http://localhost:8001/transactions?q=" + search) 
      .then((resp) => resp.json())
      .then((data) => {
        setTransaction(data);
        
      })
      .catch((err) => console.log(err));
      //pass search as dependecies.
  },[search])

  //function to add newTransaction
  function addTransaction (newTransaction) {
      const updatedTransaction = [...transactions, newTransaction];
      setTransaction(updatedTransaction);
  }

//handle search
  function handleSearch(e) {
    setSearch(e.target.value)
  }

  return (
    <div>
      <Search 
      handleSearch={handleSearch}/>
      <AddTransactionForm 
      onTransactionSubmit={addTransaction} />
      <TransactionsList 
      transactions={transactions}
      // onDelete={deleteTransaction}
      />
    </div>
  );
}

export default AccountContainer;