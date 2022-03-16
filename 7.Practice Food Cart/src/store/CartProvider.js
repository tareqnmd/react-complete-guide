import { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartState = {
	items: [],
	totalAmount: 0,
};

const carReducer = (state, action) => {
	if (action.type === 'ADD') {
		const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
		const existingItemIndex = state.items.findIndex((item) => item.id === action.item.id);
		const existingCartItem = state.items[existingItemIndex];

		let updatedItems;

		if (existingCartItem) {
			const updatedItem = {
				...existingCartItem,
				amount: existingCartItem.amount + action.item.amount,
			};
			updatedItems = [...state.items];
			updatedItems[existingItemIndex] = updatedItem;
		} else {
			updatedItems = state.items.concat(action.item);
		}

		return {
			items: updatedItems,
			totalAmount: updatedTotalAmount,
		};
	} else if (action.type === 'REMOVE') {
		const existingItemIndex = state.items.findIndex((item) => item.id === action.id);
		const existingCartItem = state.items[existingItemIndex];
		const updatedTotalAmount = state.totalAmount - existingCartItem.price;

		let updatedItems;

		if (existingCartItem.amount === 1) {
			updatedItems = state.items.filter((item, index) => item.id !== action.id);
		} else {
			const updatedItem = {
				...existingCartItem,
				amount: existingCartItem.amount - 1,
			};
			updatedItems = [...state.items];
			updatedItems[existingItemIndex] = updatedItem;
		}

		return {
			items: updatedItems,
			totalAmount: updatedTotalAmount,
		};
	}
	return defaultCartState;
};

const CartProvider = ({ children }) => {
	const [cartState, dispatchCartAction] = useReducer(carReducer, defaultCartState);

	const addItemHandler = (item) => {
		dispatchCartAction({ type: 'ADD', item: item });
	};

	const removeItemHandler = (id) => {
		dispatchCartAction({ type: 'REMOVE', id: id });
	};

	const cartContext = {
		items: cartState.items,
		totalAmount: cartState.totalAmount,
		addItem: addItemHandler,
		removeItem: removeItemHandler,
	};

	return <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>;
};

export default CartProvider;
