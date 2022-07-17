/** @format */

import React from "react";
import "./small.css";

const Small = ({ children, bold }) => {
	return <div className={`small ${bold ? "bold" : null}`}>{children}</div>;
};

export default Small;
