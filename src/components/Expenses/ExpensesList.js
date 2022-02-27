import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = ({ filteredExpenses }) => {
	// let expensesContent = <h2>No Expenses Found</h2>;

	// if (filteredExpenses.length > 0) {
	// 	expensesContent = filteredExpenses.map((expense) => (
	// 		<ExpenseItem key={expense.id} expense={expense} />
	// 	));
	// }

	if (filteredExpenses.length === 0) {
		return <h2 className="expenses-list__fallback">No expenses found</h2>;
	}

	return (
		<>
			{/* {filteredExpenses.length === 0 && <h2>No Expenses Found</h2>}
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
				<h2>No Expenses Found</h2>
			)} */}

			{/* {expensesContent} */}

			<div className="expenses-list">
				{filteredExpenses.map((expense) => (
					<ExpenseItem key={expense.id} expense={expense} />
				))}
			</div>
		</>
	);
};

export default ExpensesList;
