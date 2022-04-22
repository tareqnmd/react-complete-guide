import { createSlice } from '@reduxjs/toolkit';

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

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
