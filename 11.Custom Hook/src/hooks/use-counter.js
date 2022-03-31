import { useEffect, useState } from 'react';

const useCounter = (initial, value) => {
	const [counter, setCounter] = useState(initial);

	useEffect(() => {
		const interval = setInterval(() => {
			setCounter((prevCounter) => prevCounter + value);
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	return counter;
};

export default useCounter;
