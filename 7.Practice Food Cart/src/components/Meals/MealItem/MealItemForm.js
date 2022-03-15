import { useRef, useState } from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = ({onAddCart}) => {
	const amountInputRef = useRef();
	const [amountValid, setAmountValid] = useState(true);
	const submitHandler = (event) => {
		event.preventDefault();
		const enteredAmount = amountInputRef.current.value;
		if (enteredAmount.trim().length === 0 || enteredAmount < 1 || enteredAmount > 5) {
			setAmountValid(false);
			return;
		} 
		onAddCart(+enteredAmount);

	};

	return (
		<form className={classes.form}>
			<Input
				ref={amountInputRef}
				label={'Amount'}
				input={{
					id: 'amount',
					type: 'number',
					min: '1',
					max: '5',
					step: '1',
					defaultValue: '1',
				}}
			/>
			<button onClick={submitHandler}>+ Add</button>
			{!amountValid && 'Please enter a valid amount 1 to 5'}
		</form>
	);
};

export default MealItemForm;
