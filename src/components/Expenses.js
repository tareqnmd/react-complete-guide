import React from 'react';
import ExpenseItem from './ExpenseItem';

const Expenses = ({ expenses }) => {
	return (
		<>
			{expenses.map((expense) => (
				<ExpenseItem key={expense.id} expense={expense} />
			))}
		</>
	);
};

export default Expenses;
