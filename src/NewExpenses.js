import React from 'react';
import './NewExpenses.css';
import ExpensesForm from './ExpensesFrom.js';

export default function NewExpenses({ AppEx }) {
  const addExpenses = (addex) => {
    const expenses = {
      ...addex,
      id: Math.random().toString(),
    };
    {
      AppEx(expenses);
    }
  };

  return (
    <div className="new-expense">
      <ExpensesForm onaddExpenses={addExpenses} />
    </div>
  );
}
