/** @format */

import React from "react";
import P from "../../atoms/P/p";
import Input from "../../atoms/Input/input";
import "./control.css";
import Small from "../../atoms/Small/small";

const Control = ({ label, placeholder }) => {
	return (
		<div className='control'>
			<Small bold={"bold"}>{label}</Small>
			<Input placeholder={placeholder} />
		</div>
	);
};

export default Control;
