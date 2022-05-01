import React, {useState} from 'react';

import ExpensesList from './ExpensesList';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setSelectedYear] = useState('2022');
  
 const filterhanlder = newYearSelect => {
   setSelectedYear(newYearSelect);
    console.log(newYearSelect)
  };
  const filteredExpenses = props.item.filter(
    expense => {
       return expense.date.getFullYear().toString() === filteredYear
    }
  );
  


  return (
    <div>
   
    <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onFilterExpenseData={ filterhanlder}/>
        

      <ExpensesList items={filteredExpenses} />
     
      </Card>
      </div>
  );
}

export default Expenses;