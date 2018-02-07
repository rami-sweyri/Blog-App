import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({id, title, description, note, amount, city, adress, createdAt}) => (
  <div>
    <Link to={`/edit/${id}`}>
     <h2>{title}</h2>
     
    </Link>
     <h3>{description}</h3>
     <p>{note}</p>
    <p>{amount} - {createdAt}</p>
    <p>{city} - {adress}</p>
  </div>
);

export default ExpenseListItem;
