import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { uiActions } from './store/reducers/ui-slice';

function App() {
	const dispatch = useDispatch();
	const showCart = useSelector((state) => state.ui.cartVisible);
	const cart = useSelector((state) => state.cart);
	const notification = useSelector((state) => state.ui.notification);

	useEffect(() => {
		const sendCartData = async () => {
			dispatch(
				uiActions.showNotification({
					status: 'pending',
					title: 'Sending...',
					message: 'Sending cart data',
				})
			);
			const response = fetch('https://redux-cart-6dcd9-default-rtdb.firebaseio.com/cart.json', {
				method: 'PUT',
				body: JSON.stringify(cart),
			});
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
		};
		sendCartData().catch((error) => {
			uiActions.showNotification({
				status: 'error',
				title: 'Error!',
				message: 'Sent cart data Failed',
			});
		});
	}, [cart, dispatch]);

	return (
		<>
			{notification && (
				<Notification
					status={notification.status}
					message={notification.message}
					title={notification.title}
				/>
			)}
			<Layout>
				{showCart && <Cart />}
				<Products />
			</Layout>
		</>
	);
}

export default App;
