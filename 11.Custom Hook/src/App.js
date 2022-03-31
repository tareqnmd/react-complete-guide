// import BackwardCounter from './components/BackwardCounter';
// import ForwardCounter from './components/ForwardCounter';
import { useEffect, useState } from 'react';
import NewTask from './components/NewTask/NewTask';
import Tasks from './components/Tasks/Tasks';

const App = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	const [tasks, setTasks] = useState([]);

	const fetchTasks = async (taskText) => {
		setIsLoading(true);
		setError(null);
		try {
			const response = await fetch(
				'https://react-http-tareq-default-rtdb.firebaseio.com/tasks.json'
			);

			if (!response.ok) {
				throw new Error('Request failed!');
			}

			const data = await response.json();

			const loadedTasks = [];

			for (const taskKey in data) {
				loadedTasks.push({ id: taskKey, text: data[taskKey].text });
			}

			setTasks(loadedTasks);
		} catch (err) {
			setError(err.message || 'Something went wrong!');
		}
		setIsLoading(false);
	};

	useEffect(() => {
		fetchTasks();
	}, []);

	const taskAddHandler = (task) => {
		setTasks((prevTasks) => prevTasks.concat(task));
	};
	return (
		<>
			{/* <ForwardCounter />
			<BackwardCounter /> */}
			<NewTask onAddTask={taskAddHandler} />
			<Tasks items={tasks} loading={isLoading} error={error} onFetch={fetchTasks} />
		</>
	);
};

export default App;
