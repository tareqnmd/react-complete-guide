import React, { useState } from 'react';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = ({ expenses }) => {
	const [filteredYear, setFilteredYear] = useState('all');

	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};

	const filteredExpenses =
		filteredYear === 'all'
			? expenses
			: expenses.filter((expense) => {
					return expense.date.getFullYear().toString() === filteredYear;
			  });

	return (
		<Card className="expenses">
			<ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
			<ExpensesChart expenses={filteredExpenses} />
			<ExpensesList filteredExpenses={filteredExpenses} />
		</Card>
	);
};

export default Expenses;
