import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  // function clickHandler() {}
  const [amount, setAmount] = useState(props.amount);

  const [title, setTitle] = useState(props.title);
  

  const amountHandler = () => {

    setAmount('100');
    
  };

  const DeleteHandler=()=>{

    setTitle('Deleted!');

  }

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>Rs{amount}</div>
      </div>
      <button onClick={amountHandler}>Change Amount</button>
      <button onClick={DeleteHandler}>Delete</button>
    </Card>
  );
}

export default ExpenseItem;