import React, { useState } from 'react';
import Expensiveitem from './Expensitem';
import './Expenses.css';
import Card from './Card.js';
import './Card.css';
import ExpensesFilter from './ExpensesFilter.js';


export default function Expenses({ expenses }) {
  const [seletedYear, setSeletedYear] = useState('2020');

  const SelectYear = (EYear) => {
    setSeletedYear(EYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter year={seletedYear} ChildYear={SelectYear} />

        {expenses.map((x) => (
          <Expensiveitem title={x.title} amount={x.amount} date={x.date} />
        ))}
      </Card>
    </div>
  );
}
