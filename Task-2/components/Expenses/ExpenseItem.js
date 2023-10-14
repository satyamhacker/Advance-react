import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
const ExpenseItem = (props) => {
  // function clickHandler() {}
  const [title, setTitle] = useState(props.title);
  const [amount, setAmount] = useState(props.amount);
  console.log('ExpenseItem evaluated by React');

  const clickHandler = () => {
    setTitle('Updated!');
    console.log(title);
  };
  const DeleteHandler = () => {
    setTitle('Deleted!');
    console.log(title);
  };
  const amountHandler = () => {
    setAmount('100');
    console.log(amount);

  };

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>Rs{amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={amountHandler}>Change Amount</button>
      <button onClick={DeleteHandler}>Delete</button>
    </Card>
  );
}

export default ExpenseItem;