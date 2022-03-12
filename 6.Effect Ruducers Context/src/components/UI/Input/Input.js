import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import classes from './Input.module.css';

const Input = forwardRef(({ isValid, id, label, type, value, onChange, onBlur }, ref) => {
	const inputRef = useRef();

	const activeFocus = () => {
		inputRef.current.focus();
	};

	useImperativeHandle(ref, () => {
		return { focus: activeFocus };
	});

	return (
		<div className={`${classes.control} ${isValid === false ? classes.invalid : ''}`}>
			<label htmlFor={id}>{label}</label>
			<input ref={inputRef} type={type} id={id} value={value} onChange={onChange} onBlur={onBlur} />
		</div>
	);
});

export default Input;
