import { useContext, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import AuthContext from '../../store/auth-context';
import classes from './AuthForm.module.css';

const AuthForm = () => {
	const history = useHistory();
	const emailRef = useRef();
	const passwordRef = useRef();
	const api = 'AIzaSyDaADQcCs4xoyjSGhDAcC6RQfAxDCNsp5U';
	const [isLogin, setIsLogin] = useState(true);
	const authCtx = useContext(AuthContext);
	const [loading, seLoading] = useState(false);

	const switchAuthModeHandler = () => {
		setIsLogin((prevState) => !prevState);
	};

	const submitHandler = (e) => {
		e.preventDefault();
		const enteredEmail = emailRef.current.value;
		const enteredPassword = passwordRef.current.value;
		seLoading(true);
		let url;
		if (isLogin) {
			url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${api}`;
		} else {
			url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${api}`;
		}
		fetch(url, {
			method: 'POST',
			body: JSON.stringify({
				email: enteredEmail,
				password: enteredPassword,
				returnSecureToken: true,
			}),
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((response) => {
				seLoading(false);
				if (response.ok) {
					return response.json();
				} else {
					return response.json().then((data) => {
						let errorMessage = 'Authentication Failed';
						if (data && data.error.message) {
							errorMessage = data.error.message;
						}
						throw new Error(errorMessage);
					});
				}
			})
			.then((data) => {
				const expirationTime = new Date(new Date().getTime() + +data.expiresIn * 1000);
				authCtx.login(data.idToken, expirationTime.toISOString());
				history.replace('/');
			})
			.catch((err) => {
				alert(err.message);
			});
	};

	return (
		<section className={classes.auth}>
			<h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
			<form onSubmit={submitHandler}>
				<div className={classes.control}>
					<label htmlFor="email">Your Email</label>
					<input type="email" id="email" required ref={emailRef} />
				</div>
				<div className={classes.control}>
					<label htmlFor="password">Your Password</label>
					<input type="password" id="password" required ref={passwordRef} />
				</div>
				<div className={classes.actions}>
					{loading ? (
						<div>Loading...</div>
					) : (
						<button>{isLogin ? 'Login' : 'Create Account'}</button>
					)}
					<button type="button" className={classes.toggle} onClick={switchAuthModeHandler}>
						{isLogin ? 'Create new account' : 'Login with existing account'}
					</button>
				</div>
			</form>
		</section>
	);
};

export default AuthForm;
