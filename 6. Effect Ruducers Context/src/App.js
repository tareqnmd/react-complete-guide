import { useEffect, useState } from 'react';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import MainHeader from './components/MainHeader/MainHeader';

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const loginHandler = (email, password) => {
		// We should of course check email and password
		// But it's just a dummy/ demo anyways
		localStorage.setItem('isLoggedIn', true);
		setIsLoggedIn(true);
	};

	const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
		setIsLoggedIn(false);
	};

	useEffect(() => {
		const storedLocalStorageData = localStorage.getItem('isLoggedIn');
		if (storedLocalStorageData) {
			setIsLoggedIn(true);
		}
	}, []);

	return (
		<>
			<MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
			<main>
				{!isLoggedIn && <Login onLogin={loginHandler} />}
				{isLoggedIn && <Home onLogout={logoutHandler} />}
			</main>
		</>
	);
}

export default App;
