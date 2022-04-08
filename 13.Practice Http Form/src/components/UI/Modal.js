import classes from './Modal.module.css';

const Backdrop = (props) => {
	return <div className={classes.backdrop} onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
	return (
		<div className={classes.modal}>
			<div className={classes.content}>{props.children}</div>
		</div>
	);
};

const Modal = (props) => {
	return (
		<>
			portalElement.render(<ModalOverlay>{props.children}</ModalOverlay>); portalElement.render(
			<Backdrop onClose={props.onClose} />
			);
		</>
	);
};

export default Modal;
