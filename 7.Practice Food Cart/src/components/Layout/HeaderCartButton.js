import { useContext, useEffect, useState } from 'react';
import CartContext from '../../store/cart-context';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = ({ onClick }) => {
	const [btnHighlighted, setBtnHighlighted] = useState(false);
	const cartContext = useContext(CartContext);
	const { items } = cartContext;
	const cartItems = items.reduce((current, item) => current + item.amount, 0);
	const btnClasses = `${classes.button} ${btnHighlighted ? classes.bump : ''}`;

	useEffect(() => {
		if (items.length === 0) {
			return;
		}
		setBtnHighlighted(true);

		const timer = setTimeout(() => {
			setBtnHighlighted(false);
		}, 300);

		return () => clearTimeout(timer);
	}, [items]);

	return (
		<button onClick={onClick} className={btnClasses}>
			<span>
				<CartIcon />
			</span>
			<span>Your Cart</span>
			<span className={classes.badge}>{cartItems}</span>
		</button>
	);
};

export default HeaderCartButton;
