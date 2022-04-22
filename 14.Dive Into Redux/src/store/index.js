import { createStore } from 'redux';

const initialState = { counter: 0 };

const counterReducer = (state = initialState, action) => {
	if (action.type === 'Increment') {
		return {
			counter: state.counter + 1,
		};
	}
	if (action.type === 'Decrement') {
		return {
			counter: state.counter - 1,
		};
	}

	return state;
};

const store = createStore(counterReducer);

export default store;
