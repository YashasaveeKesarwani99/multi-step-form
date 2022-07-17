/** @format */

import React from "react";
import "./p.css";

const P = ({ children, light, p12, bold, center }) => {
	return (
		<div
			className={`p ${light ? "light" : null} ${p12 ? "p-12" : null} ${
				bold ? "bold" : null
			}
			${center ? "center" : null}
			`}>
			{children}
		</div>
	);
};

export default P;
