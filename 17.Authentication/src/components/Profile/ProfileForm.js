import { useContext, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import AuthContext from '../../store/auth-context';
import classes from './ProfileForm.module.css';

const ProfileForm = () => {
	const history = useHistory();
	const newPasswordRef = useRef();
	const authCtx = useContext(AuthContext);
	const submitHandler = (e) => {
		e.preventDefault();
		const enteredNewPassword = newPasswordRef.current.value;
		const url = `https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDaADQcCs4xoyjSGhDAcC6RQfAxDCNsp5U`;
		fetch(url, {
			method: 'POST',
			body: JSON.stringify({
				idToken: authCtx.token,
				password: enteredNewPassword,
				returnSecureToken: true,
			}),
			headers: {
				'Content-Type': 'application/json',
			},
		}).then((response) => {
			alert('Password Updated');
			history.replace('/');
		});
	};
	return (
		<form className={classes.form} onSubmit={submitHandler}>
			<div className={classes.control}>
				<label htmlFor="new-password">New Password</label>
				<input minLength="7" type="password" id="new-password" ref={newPasswordRef} />
			</div>
			<div className={classes.action}>
				<button>Change Password</button>
			</div>
		</form>
	);
};

export default ProfileForm;
