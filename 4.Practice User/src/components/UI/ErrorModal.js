import Card from '../UI/Card';
import Button from './Button';
import styles from './ErrorModal.module.css';

const ErrorModal = ({ title, message, visibility, onConfirm }) => {
	return (
		<>
			<div className={`${styles.backdrop} ${styles[visibility]}`} onClick={onConfirm}>
				<Card className={styles.modal}>
					<header className={styles.header}>
						<h2>{title}</h2>
					</header>
					<div className={styles.content}>
						<p>{message}</p>
					</div>
					<footer className={styles.actions}>
						<Button onClick={onConfirm}>Ok</Button>
					</footer>
				</Card>
			</div>
		</>
	);
};

export default ErrorModal;
