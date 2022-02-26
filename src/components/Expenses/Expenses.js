import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';

const Expenses = ({ expenses }) => {
	const [filteredYear, setFilteredYear] = useState('2020');

	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};

	const filteredExpenses = expenses.filter((expense) => {
		return expense.date.getFullYear().toString() === filteredYear;
	});

	let expensesContent = <p>No Expense Found</p>;

	if (filteredExpenses.length > 0) {
		expensesContent = filteredExpenses.map((expense) => (
			<ExpenseItem key={expense.id} expense={expense} />
		));
	}

	return (
		<Card className="expenses">
			<ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
			{/* {filteredExpenses.length === 0 && <p>No expenses found</p>}
			{filteredExpenses.length > 0 && (
				<>
					{filteredExpenses.map((expense) => (
						<ExpenseItem key={expense.id} expense={expense} />
					))}
				</>
			)} */}
			{/* {filteredExpenses.length > 0 ? (
				<>
					{filteredExpenses.map((expense) => (
						<ExpenseItem key={expense.id} expense={expense} />
					))}
				</>
			) : (
				<p>No expenses found</p>
			)} */}
			{expensesContent}
		</Card>
	);
};

export default Expenses;
