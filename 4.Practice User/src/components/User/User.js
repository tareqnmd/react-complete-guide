import styles from './User.module.css';

const User = ({ user }) => {
	return (
		<div className={styles.user}>
			{user.name} ({user.age} years old)
		</div>
	);
};

export default User;
