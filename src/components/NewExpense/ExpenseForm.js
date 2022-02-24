import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = ({onSaveExpenseData}) => {
	const [tileEntered, setTileEntered] = useState('');
	const [amountEntered, setAmountEntered] = useState('');
	const [dateEntered, setDateEntered] = useState('');

	// const [userInput, setUserInput] = useState({
	// 	enteredTitle: '',
	// 	enteredAmount: '',
	// 	enteredDate: '',
	// });

	const titleChangeHandler = (event) => {
		setTileEntered(event.target.value);
		// setUserInput({
		// 	...userInput,
		// 	enteredTitle: event.target.value,
		// });
		// setUserInput((prev) => {
		// 	return { ...prev, enteredTitle: event.target.value };
		// });
	};
	const amountChangeHandler = (event) => {
		setAmountEntered(event.target.value);
		// setUserInput({
		// 	...userInput,
		// 	enteredAmount: event.target.value,
		// });
		// setUserInput((prev) => {
		// 	return { ...prev, enteredAmount: event.target.value };
		// });
	};
	const dateChangeHandler = (event) => {
		setDateEntered(event.target.value);
		// setUserInput({
		// 	...userInput,
		// 	enteredDate: event.target.value,
		// });
		// setUserInput((prev) => {
		// 	return { ...prev, enteredDate: event.target.value };
		// });
	};

	const submitHandler = (event) => {
		event.preventDefault();
		const expenseData = {
			title: tileEntered,
			amount: amountEntered,
			date: new Date(dateEntered),
		};
		onSaveExpenseData(expenseData);
		setAmountEntered('');
		setTileEntered('');
		setDateEntered('');
	};
    
	return (
		<form onSubmit={submitHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input type="text" value={tileEntered} onChange={titleChangeHandler} />
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input
						type="number"
						value={amountEntered}
						min="0.01"
						step="0.01"
						onChange={amountChangeHandler}
					/>
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input
						type="date"
						value={dateEntered}
						min="2019-01-01"
						max="2022-12-31"
						onChange={dateChangeHandler}
					/>
				</div>
			</div>
			<div className="new-expense__actions">
				<button type="submit">Add Expense</button>
			</div>
		</form>
	);
};

export default ExpenseForm;
