import React from 'react';
import './Expensitem.css';
import ExpensesDate from './ExpensesDate.js';
import Card from './Card.js';

export default function Expensiveitem({ title, amount, date }) {
  return (
    <Card className="expense-item">
      <ExpensesDate date={date} />

      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{amount}</div>
      </div>
    </Card>
  );
}
