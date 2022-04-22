import { useDispatch } from 'react-redux';
import { uiActions } from '../../store/reducers/ui-slice';
import classes from './CartButton.module.css';

const CartButton = (props) => {
	const dispatch = useDispatch();
	const cartHandler = () => {
		dispatch(uiActions.toggle());
	};
	return (
		<button onClick={cartHandler} className={classes.button}>
			<span>My Cart</span>
			<span className={classes.badge}>1</span>
		</button>
	);
};

export default CartButton;
