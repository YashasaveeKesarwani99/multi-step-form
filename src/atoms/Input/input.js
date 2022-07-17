/** @format */

import React from "react";
import "./input.css";

const Input = ({ placeholder, bool }) => {
	return (
		<div className='input'>
			<input placeholder={placeholder} disabled={bool} />
		</div>
	);
};

export default Input;
