import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = ({ onClick }) => {
	const cartContext = useContext(CartContext);
	const cartItems = cartContext.items.reduce((current, item) => current + item.amount, 0);
	return (
		<button onClick={onClick} className={classes.button}>
			<span>
				<CartIcon />
			</span>
			<span>Your Cart</span>
			<span className={classes.badge}>{cartItems}</span>
		</button>
	);
};

export default HeaderCartButton;
