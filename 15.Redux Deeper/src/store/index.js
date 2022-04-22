import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './reducers/cart-slice';
import uiSlice from './reducers/ui-slice';
const store = configureStore({
	reducer: {
		ui: uiSlice,
		cart: cartSlice,
	},
});
export default store;
