import { useState } from 'react';
import AddUser from './components/NewUser/AddUser';
import Users from './components/User/Users';

function App() {
	const [users, setUsers] = useState([
		// {
		// 	id: '1',
		// 	name: 'Mohammad',
		// 	age: '25',
		// },
	]);

	const addUserHandler = (user) => {
		setUsers((prev) => {
			return [...prev, user];
		});
	};

	return (
		<>
			<AddUser onAddUser={addUserHandler} />
			<Users users={users} />
		</>
	);
}

export default App;
