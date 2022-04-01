// import BackwardCounter from './components/BackwardCounter';
// import ForwardCounter from './components/ForwardCounter';
import { useEffect, useState } from 'react';
import NewTask from './components/NewTask/NewTask';
import Tasks from './components/Tasks/Tasks';
import useHttp from './hooks/use-http';

const App = () => {
	const [tasks, setTasks] = useState([]);

	const transformTasks = (taskObj) => {
		const loadedTasks = [];

		for (const taskKey in taskObj) {
			loadedTasks.push({ id: taskKey, text: taskObj[taskKey].text });
		}

		setTasks(loadedTasks);
	};

	const {
		isLoading,
		error,
		SendRequest: fetchTasks,
	} = useHttp(
		{ url: 'https://react-http-tareq-default-rtdb.firebaseio.com/tasks.json' },
		transformTasks
	);

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
