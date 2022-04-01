import useHttp from '../../hooks/use-http';
import Section from '../UI/Section';
import TaskForm from './TaskForm';

const NewTask = (props) => {
	const { isLoading, error, SendRequest: sendTaskRequest } = useHttp();

	const createTask = (taskText, data) => {
		const generatedId = data.name;
		const createdTask = { id: generatedId, text: taskText };

		props.onAddTask(createdTask);
	};

	const enterTaskHandler = async (taskText) => {
		sendTaskRequest(
			{
				url: 'https://react-http-tareq-default-rtdb.firebaseio.com/tasks.json',
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: { text: taskText },
			},
			createTask.bind(null, taskText)
		);
	};

	return (
		<Section>
			<TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
			{error && <p>{error}</p>}
		</Section>
	);
};

export default NewTask;
