// import { createContext } from 'react';

// const AuthContext = createContext({
// 	isLoggedIn: false,
// });

import React from 'react';

const AuthContext = React.createContext({
	isLoggedIn: false,
});

export default AuthContext;
