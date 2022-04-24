import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { fetchCartData, sendCartData } from './store/actions/cart-actions';
// import { uiActions } from './store/reducers/ui-slice';
let isInitial = true;

function App() {
	const dispatch = useDispatch();
	const showCart = useSelector((state) => state.ui.cartVisible);
	const cart = useSelector((state) => state.cart);
	const notification = useSelector((state) => state.ui.notification);

	useEffect(() => {
		dispatch(fetchCartData());
	}, [dispatch]);

	useEffect(() => {
		// const sendCartData = async () => {
		// 	dispatch(
		// 		uiActions.showNotification({
		// 			status: 'pending',
		// 			title: 'Sending...',
		// 			message: 'Sending cart data',
		// 		})
		// 	);
		// 	try {
		// 		const response = await fetch(
		// 			'https://redux-cart-6dcd9-default-rtdb.firebaseio.com/cart.json',
		// 			{
		// 				method: 'PUT',
		// 				body: JSON.stringify(cart),
		// 			}
		// 		);
		// 		if (!response.ok) {
		// 			throw new Error('Sending cart data failed!');
		// 		}
		// 		dispatch(
		// 			uiActions.showNotification({
		// 				status: 'success',
		// 				title: 'Success!',
		// 				message: 'Sent cart data Successfully',
		// 			})
		// 		);
		// 	} catch (error) {
		// 		dispatch(
		// 			uiActions.showNotification({
		// 				status: 'error',
		// 				title: 'Error!',
		// 				message: 'Sent cart data Failed',
		// 			})
		// 		);
		// 	}
		// };
		if (isInitial) {
			isInitial = false;
			return;
		}
		// sendCartData();
		dispatch(sendCartData(cart));
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
