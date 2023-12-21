import React from "react";

function Transaction({ id, date, description, category, amount} ) {  
  return (
    <tr key={id} >
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
      {/* <td><button onDelete={handleDelete}>X</button></td> */}
    </tr>
  );
}

export default Transaction;