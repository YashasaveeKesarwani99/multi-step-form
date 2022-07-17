/** @format */

import React from "react";
import "./card.css";
import P from "../../atoms/P/p";

const Card = ({ icon, head, subHead }) => {
	const ref = React.useRef();

	const clickHandler = () => {
		if (ref) {
			if (ref.current.style.borderColor === "rgb(90, 35, 216)") {
				ref.current.style.borderColor = "rgb(236, 230, 230)";
			} else {
				ref.current.style.borderColor = "rgb(90, 35, 216)";
			}
		}
	};

	return (
		<div className='card' onClick={clickHandler} ref={ref}>
			<div>
				<img src={icon} alt='user/audience' />
			</div>
			<P p12={"p-12"} bold={"bold"}>
				{head}
			</P>
			<P light={"light"} p12={"p-12"}>
				{subHead}
			</P>
		</div>
	);
};

export default Card;
