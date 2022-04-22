import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../store';
import classes from './Counter.module.css';

const Counter = () => {
	const counter = useSelector((state) => state.counter);
	const toggle = useSelector((state) => state.showCounter);
	const dispatch = useDispatch();

	const incrementHandler = () => {
		dispatch(counterActions.increment());
		// dispatch({ type: 'Increment' });
	};
	const decrementHandler = () => {
		dispatch(counterActions.decrement());
		// dispatch({ type: 'Decrement' });
	};
	const increaseHandler = () => {
		dispatch(counterActions.increaseBy(5));
		// dispatch({ type: 'IncreaseBy', value: 5 });
	};

	const toggleCounterHandler = () => {
		dispatch(counterActions.toggle());
		// dispatch({ type: 'toggle' });
	};

	return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>
			{toggle && (
				<>
					<div className={classes.value}>{counter}</div>
					<div>
						<button onClick={incrementHandler}>Increment</button>
						<button onClick={increaseHandler}>Increase By 5</button>
						<button onClick={decrementHandler}>Decrement</button>
					</div>
				</>
			)}
			<button onClick={toggleCounterHandler}>Toggle Counter</button>
		</main>
	);
};

export default Counter;
