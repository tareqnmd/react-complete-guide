import React from 'react';
// import React,{createContext} from 'react';

// export default AuthContext = createContext({
// 	isLoggedIn: false,
// });

const AuthContext = React.createContext({
	isLoggedIn: false,
});

export default AuthContext;
