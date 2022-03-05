import { useState } from 'react';
import Button from '../UI/Button';
import styles from './UserForm.module.css';

const UserForm = ({ onSaveUserData }) => {
	const [nameEntered, setNameEntered] = useState('');
	const [ageEntered, setAgeEntered] = useState('');

	const nameChangeHandler = (event) => {
		setNameEntered(event.target.value);
	};

	const ageChangeHandler = (event) => {
		setAgeEntered(event.target.value);
	};

	const submitHandler = (event) => {
		event.preventDefault();
		const userData = {
			name: nameEntered,
			age: ageEntered,
		};
		onSaveUserData(userData);
		setAgeEntered('');
		setNameEntered('');
	};

	return (
		<form className={styles['add-user']} onSubmit={submitHandler}>
			<label>Username</label>
			<input type="text" value={nameEntered} onChange={nameChangeHandler} />
			<label>Age (Years)</label>
			<input type="number" value={ageEntered} onChange={ageChangeHandler} />
			<Button type="submit">Add User</Button>
		</form>
	);
};

export default UserForm;
