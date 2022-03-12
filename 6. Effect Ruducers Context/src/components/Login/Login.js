import React, { useContext, useEffect, useReducer, useState } from 'react';
import AuthContext from '../../store/auth-context';
import Button from '../UI/Button/Button';
import Card from '../UI/Card/Card';
import classes from './Login.module.css';

const emailReducer = (state, action) => {
	if (action.type === 'USER_INPUT') {
		return {
			value: action.value,
			isValid: action.value.includes('@'),
		};
	} else if (action.type === 'INPUT_BLUR') {
		return {
			value: state.value,
			isValid: state.value.includes('@'),
		};
	}
	return {
		value: '',
		isValid: false,
	};
};

const passwordReducer = (state, action) => {
	if (action.type === 'USER_INPUT') {
		return {
			value: action.value,
			isValid: action.value.trim().length > 6,
		};
	} else if (action.type === 'INPUT_BLUR') {
		return {
			value: state.value,
			isValid: state.value.trim().length > 6,
		};
	}
	return {
		value: '',
		isValid: false,
	};
};

const Login = () => {
	// const [enteredEmail, setEnteredEmail] = useState('');
	// const [emailIsValid, setEmailIsValid] = useState();
	// const [enteredPassword, setEnteredPassword] = useState('');
	// const [passwordIsValid, setPasswordIsValid] = useState();
	const authCtx = useContext(AuthContext);
	const [formIsValid, setFormIsValid] = useState(false);

	const [emailState, dispatchEmail] = useReducer(emailReducer, { value: '', isValid: null });
	const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
		value: '',
		isValid: null,
	});

	const emailChangeHandler = (event) => {
		// setEnteredEmail(event.target.value);
		// setFormIsValid(event.target.value.includes('@') && enteredPassword.trim().length > 6);
		dispatchEmail({ type: 'USER_INPUT', value: event.target.value });
		// setFormIsValid(event.target.value.includes('@') && passwordState.isValid);
	};

	const passwordChangeHandler = (event) => {
		// setEnteredPassword(event.target.value);
		// setFormIsValid(enteredEmail.includes('@') && event.target.value.trim().length > 6);
		dispatchPassword({ type: 'USER_INPUT', value: event.target.value });
		// setFormIsValid(emailState.isValid && event.target.value.trim().length > 6);
	};

	const validateEmailHandler = () => {
		// setEmailIsValid(enteredEmail.includes('@'));
		// setEmailIsValid(emailState.isValid);
		dispatchEmail({ type: 'INPUT_BLUR' });
	};

	const validatePasswordHandler = () => {
		// setPasswordIsValid(enteredPassword.trim().length > 6);
		// setPasswordIsValid(passwordState.isValid);
		dispatchPassword({ type: 'INPUT_BLUR' });
	};

	const submitHandler = (event) => {
		event.preventDefault();
		authCtx.onLogin(emailState.value, passwordState.value);
	};

	// useEffect(() => {
	// 	const identifier = setTimeout(() => {
	// 		setFormIsValid(enteredEmail.includes('@') && enteredPassword.trim().length > 6);
	// 	}, 500);
	// 	return () => {
	// 		clearInterval(identifier);
	// 	};
	// }, [enteredEmail, enteredPassword]);

	const { isValid: emailIsValid } = emailState;
	const { isValid: passwordIsValid } = passwordState;

	useEffect(() => {
		const identifier = setTimeout(() => {
			setFormIsValid(passwordIsValid && emailIsValid);
		}, 500);
		return () => {
			clearInterval(identifier);
		};
	}, [emailIsValid, passwordIsValid]);

	useEffect(() => {
		console.log('EFFECT RUNNING');

		return () => {
			console.log('EFFECT CLEANUP');
		};
	}, []);

	return (
		<Card className={classes.login}>
			<form onSubmit={submitHandler}>
				<div
					className={`${classes.control} ${
						emailState.isValid === false ? classes.invalid : ''
					}`}
				>
					<label htmlFor="email">E-Mail</label>
					<input
						type="email"
						id="email"
						value={emailState.value}
						onChange={emailChangeHandler}
						onBlur={validateEmailHandler}
					/>
				</div>
				<div
					className={`${classes.control} ${
						passwordState.isValid === false ? classes.invalid : ''
					}`}
				>
					<label htmlFor="password">Password</label>
					<input
						type="password"
						id="password"
						value={passwordState.value}
						onChange={passwordChangeHandler}
						onBlur={validatePasswordHandler}
					/>
				</div>
				<div className={classes.actions}>
					<Button type="submit" className={classes.btn} disabled={!formIsValid}>
						Login
					</Button>
				</div>
			</form>
		</Card>
	);
};

export default Login;
