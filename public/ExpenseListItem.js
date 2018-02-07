import React from 'react';

const ExpenseListItem = ({ title,description,note, amount, createdAt }) => (
  <div>
    <h2>{title}</h2>
    <h3>{description}</h3>
    <p>{note}</p>
    <p>{amount} - {createdAt}</p>
  </div>
);

export default ExpenseListItem;
