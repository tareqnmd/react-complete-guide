import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialCounterState = { counter: 0, showCounter: true };
const initialAuthState = { isAuthenticated: false };

const counterSlice = createSlice({
	name: 'counter',
	initialState: initialCounterState,
	reducers: {
		increment: (state) => {
			state.counter++;
		},
		decrement: (state) => {
			state.counter--;
		},
		increaseBy: (state, action) => {
			state.counter += action.payload;
		},
		toggle: (state) => {
			state.showCounter = !state.showCounter;
		},
	},
});

const authSlice = createSlice({
	name: 'auth',
	initialState: initialAuthState,
	reducers: {
		login: (state) => {
			state.isAuthenticated = true;
		},
		logout: (state) => {
			state.isAuthenticated = false;
		},
	},
});

const store = configureStore({
	reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;

/*
import { createStore } from 'redux';

const counterReducer = (state = initialState, action) => {
	if (action.type === 'Increment') {
		return {
			...state,
			counter: state.counter + 1,
		};
	}
	if (action.type === 'IncreaseBy') {
		return {
			...state,
			counter: state.counter + action.value,
		};
	}
	if (action.type === 'Decrement') {
		return {
			...state,
			counter: state.counter - 1,
		};
	}

	if (action.type === 'toggle') {
		return {
			...state,
			showCounter: !state.showCounter,
		};
	}

	return state;
};

const store = createStore(counterReducer);
*/
