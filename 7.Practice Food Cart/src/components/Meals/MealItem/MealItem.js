import { useContext } from 'react';
import CartContext from '../../../store/cart-context';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';

const MealItem = ({ meal }) => {
	const { name, description, price } = meal;
	const cartCtx = useContext(CartContext);
	const addCartHandler = (amount) => {
		cartCtx.addItem({ id: meal.id, name: meal.name, price: meal.price, amount: amount });
	};
	return (
		<li className={classes.meal}>
			<div>
				<h3>{name}</h3>
				<div className={classes.description}>{description}</div>
				<div className={classes.price}>{price.toFixed(2)}</div>
			</div>
			<div>
				<MealItemForm onAddCart={addCartHandler} />
			</div>
		</li>
	);
};

export default MealItem;
