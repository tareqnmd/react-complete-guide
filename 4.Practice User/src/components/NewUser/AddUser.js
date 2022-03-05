import Card from '../UI/Card';
import styles from './AddUser.module.css';
import UserForm from './UserForm';

const AddUser = ({ onAddUser }) => {
	const saveUserDataHandler = (userData) => {
		const user = { ...userData, id: Math.random().toString() };
		onAddUser(user);
	};
	return (
		<Card className={styles['add-user']}>
			<UserForm onSaveUserData={saveUserDataHandler} />
		</Card>
	);
};

export default AddUser;
