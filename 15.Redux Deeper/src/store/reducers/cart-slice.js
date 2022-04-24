import { createSlice } from '@reduxjs/toolkit';
import { uiActions } from './ui-slice';

const initialState = {
	items: [],
	totalQuantity: 0,
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItemToCart: (state, action) => {
			const newItem = action.payload;
			const existingItem = state.items.find((item) => item.id === newItem.id);
			state.totalQuantity++;
			if (existingItem) {
				existingItem.quantity++;
				existingItem.totalPrice += newItem.price;
			} else {
				state.items.push({
					id: newItem.id,
					name: newItem.title,
					price: newItem.price,
					quantity: 1,
					totalPrice: newItem.price,
				});
			}
		},
		removeItemFromCart: (state, action) => {
			const itemToRemove = state.items.find((item) => item.id === action.payload);
			state.totalQuantity--;
			if (itemToRemove.quantity === 1) {
				state.items = state.items.filter((item) => item.id !== action.payload);
			} else {
				itemToRemove.quantity--;
				itemToRemove.totalPrice -= itemToRemove.price;
			}
		},
	},
});

export const sendCartData = (cart) => {
	return async (dispatch) => {
		dispatch(
			uiActions.showNotification({
				status: 'pending',
				title: 'Sending...',
				message: 'Sending cart data',
			})
		);

		try {
			const response = await fetch(
				'https://redux-cart-6dcd9-default-rtdb.firebaseio.com/cart.json',
				{
					method: 'PUT',
					body: JSON.stringify(cart),
				}
			);
			if (!response.ok) {
				throw new Error('Sending cart data failed!');
			}
			dispatch(
				uiActions.showNotification({
					status: 'success',
					title: 'Success!',
					message: 'Sent cart data Successfully',
				})
			);
		} catch (error) {
			dispatch(
				uiActions.showNotification({
					status: 'error',
					title: 'Error!',
					message: 'Sent cart data Failed',
				})
			);
		}
	};
};

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
