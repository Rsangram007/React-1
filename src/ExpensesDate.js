import React from 'react';
import './ExpensesDate.css';

export default function ExpensesDate({ date }) {
  const Month = date.toLocaleString('en-US', { month: 'long' });
  const Year = date.getFullYear();
  const Day = date.toLocaleString('en-US', { day: '2-digit' });
  return (
    <div className="expense-date">
      <div classNaem="expense-date__month">{Month}</div>
      <div className="expense-date__day">{Day}</div>
      <div className="expense-date__year">{Year}</div>
    </div>
  );
}
