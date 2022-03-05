import { useState } from 'react';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import styles from './UserForm.module.css';

const UserForm = ({ onSaveUserData }) => {
	const [nameEntered, setNameEntered] = useState('');
	const [ageEntered, setAgeEntered] = useState('');
	const [error, setError] = useState({
		title: '',
		message: '',
		visibility: false,
	});

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
		if (ageEntered.trim().length === 0 || nameEntered.trim().length === 0) {
			setError({
				title: 'Invalid input!',
				message: 'Please enter a name and age to continue.',
				visibility: true,
			});
			return;
		}
		if (+ageEntered < 1) {
			setError({
				title: 'Invalid age!',
				message: 'Please enter valid age (greater than 0)!',
				visibility: true,
			});
			return;
		}
		onSaveUserData(userData);
		setAgeEntered('');
		setNameEntered('');
	};

	const errorModalHandler = () => {
		setError({
			title: '',
			message: '',
			visibility: false,
		});
	};

	return (
		<>
			<ErrorModal
				title={error.title}
				message={error.message}
				visibility={error.visibility}
				onConfirm={errorModalHandler}
			/>
			<form className={styles['add-user']} onSubmit={submitHandler}>
				<label>Username</label>
				<input type="text" value={nameEntered} onChange={nameChangeHandler} />
				<label>Age (Years)</label>
				<input type="number" value={ageEntered} onChange={ageChangeHandler} />
				<Button type="submit">Add User</Button>
			</form>
		</>
	);
};

export default UserForm;
