import Card from '../UI/Card';
import User from './User';
import styles from './UserList.module.css';

const UserList = ({ users }) => {
	if (users.length === 0) {
		return <></>;
	}
	return (
		<Card className={styles.users}>
			{users.map((user) => (
				<User key={user.id} user={user} />
			))}
		</Card>
	);
};

export default UserList;
