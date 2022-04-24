import { cartActions } from '../reducers/cart-slice';
import { uiActions } from '../reducers/ui-slice';

export const fetchCartData = () => {
	return async (dispatch) => {
		try {
			const response = await fetch(
				'https://redux-cart-6dcd9-default-rtdb.firebaseio.com/cart.json'
			);
			if (!response.ok) {
				throw new Error('Fetching cart data failed!');
			}
			const data = await response.json();
			dispatch(cartActions.replaceCart(data));
		} catch (error) {
			dispatch(
				uiActions.showNotification({
					status: 'error',
					title: 'Error!',
					message: 'Fetching cart data failed',
				})
			);
		}
	};
};

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
			const cartData = {
				items: cart.items,
				totalQuantity: cart.totalQuantity,
			};
			const response = await fetch(
				'https://redux-cart-6dcd9-default-rtdb.firebaseio.com/cart.json',
				{
					method: 'PUT',
					body: JSON.stringify(cartData),
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
