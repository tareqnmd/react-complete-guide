import { createSlice } from '@reduxjs/toolkit';

const initialState = { cartVisible: false, notification: null };

const uiSlice = createSlice({
	name: 'ui',
	initialState,
	reducers: {
		toggle(state) {
			state.cartVisible = !state.cartVisible;
		},
		showNotification(state, action) {
			state.notification = {
				message: action.payload.message,
				status: action.payload.status,
				title: action.payload.title,
			};
		},
	},
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
