import React, { useState } from 'react';
import './style.css';
import Expenses from './Expenses.js';
import NewExpenses from './NewExpenses.js';

const DummyData = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

export default function App() {
  const [expenses, SetExpenses] = useState(DummyData);

  // const appAddEx = (Expenses) => {

  //   SetExpenses((preexpenses)=>{
  //     [Expenses,...preexpenses]
  //   });
  // };

  const appAddEx = (Expenses) => {
    const date = new Date(Expenses.date);
    const newExpense = {
      id: Expenses.id,
      title: Expenses.title,
      amount: Expenses.amount,
      date: date,
    };
    let updatedlist = [newExpense, ...expenses];
    SetExpenses(updatedlist);
  };

  return (
    <div>
      <NewExpenses AppEx={appAddEx} />
      <Expenses expenses={expenses} />
    </div>
  );
}
