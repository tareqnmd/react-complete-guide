import ExpenseItem from './ExpenseItem';
import './ExpensesFilter.css';

const ExpensesList = ({ filteredExpenses }) => {
	let expensesContent = <p>No Expense Found</p>;

	if (filteredExpenses.length > 0) {
		expensesContent = filteredExpenses.map((expense) => (
			<ExpenseItem key={expense.id} expense={expense} />
		));
	}
	return (
		<>
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
		</>
	);
};

export default ExpensesList;
