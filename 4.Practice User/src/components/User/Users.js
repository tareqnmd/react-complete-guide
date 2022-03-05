import styles from './Users.module.css';
import UserList from './UserList';

const Users = ({ users }) => {
	return (
		<>
			<UserList users={users} />
		</>
	);
};

export default Users;
