import { configureStore } from '@reduxjs/toolkit';
import authSlice from './reducers/auth';
import counterSlice from './reducers/counter';

const store = configureStore({
	reducer: { counter: counterSlice, auth: authSlice },
});

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
