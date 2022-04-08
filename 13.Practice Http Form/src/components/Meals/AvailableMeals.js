import { useEffect, useState } from 'react';
import Card from '../UI/Card';
import classes from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';

const AvailableMeals = () => {
	const [meals, setMeals] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState();
	useEffect(() => {
		const fetchMeals = async () => {
			try {
				const response = await fetch(
					'https://react-http-tareq-default-rtdb.firebaseio.com/meals.json'
				);
				if (!response.ok) {
					throw new Error('Something went wrong!');
				}
				const data = await response.json();
				const processedData = [];
				for (const key in data) {
					processedData.push({
						...data[key],
						id: key,
					});
				}
				setMeals(processedData);
			} catch (error) {
				setError(error.message);
			}
			setIsLoading(false);
		};

		fetchMeals();
	}, []);

	if (isLoading) {
		return <div className={classes.loading}>Loading...</div>;
	}
	if (error) {
		return <div className={classes.error}>{error}</div>;
	}

	const mealsList = meals.map((meal) => (
		<MealItem
			key={meal.id}
			id={meal.id}
			name={meal.name}
			description={meal.description}
			price={meal.price}
		/>
	));

	return (
		<section className={classes.meals}>
			<Card>
				<ul>{mealsList}</ul>
			</Card>
		</section>
	);
};

export default AvailableMeals;
