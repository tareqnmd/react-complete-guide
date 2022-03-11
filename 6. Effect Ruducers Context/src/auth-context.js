// import React from 'react';

// const AuthContext = React.createContext({
// 	isLoggedIn: false,
// 	onLogout: () => {},
// });

import { createContext, useEffect, useState } from 'react';

const AuthContext = createContext({
	isLoggedIn: false,
	onLogout: () => {},
	onLogin: (email, password) => {},
});

export const AuthContextProvider = ({ children }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const loginHandler = (email, password) => {
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
		<AuthContext.Provider
			value={{ isLoggedIn: isLoggedIn, onLogout: logoutHandler, onLogin: loginHandler }}
		>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContext;
