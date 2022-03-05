import { useEffect, useState } from 'react';
import Card from '../UI/Card';
import Button from './Button';
import styles from './ErrorModal.module.css';

const ErrorModal = ({ title, message, visibility, onConfirm }) => {
	const [isVisible, setIsVisible] = useState();

	const closeModal = () => {
		setIsVisible(false);
		setTimeout(() => {
			onConfirm();
		}, 300);
		clearTimeout();
	};

	useEffect(() => {
		setIsVisible(visibility);
	}, [visibility]);

	return (
		<div className={`${styles.backdrop} ${styles[isVisible]}`} onClick={closeModal}>
			<Card className={styles.modal}>
				<header className={styles.header}>
					<h2>{title}</h2>
				</header>
				<div className={styles.content}>
					<p>{message}</p>
				</div>
				<footer className={styles.actions}>
					<Button onClick={closeModal}>Ok</Button>
				</footer>
			</Card>
		</div>
	);
};

export default ErrorModal;
