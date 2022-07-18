/** @format */

import React from "react";
import "./fourth.css";
import H1 from "../../atoms/H1/h1";
import P from "../../atoms/P/p";
import Button from "../../atoms/Button/button";
import logo from "../../../src/assets/icons/eden-logo.PNG";
import tick from "../../assets/icons/tick.png";
import { Link } from "react-router-dom";

const Fourth = () => {
	const ref = React.useRef();

	React.useEffect(() => {
		ref.current.style.width = "100%";
	}, []);

	return (
		<div className='fourth-container'>
			<div className='fourth-sub-container'>
				<div className='fourth-logo'>
					<div className='fourth-logo-image'>
						<img src={logo} alt='logo' />
					</div>
					<div>
						<H1>Eden</H1>
					</div>
				</div>
				<div className='fourth-progress-bar'>
					<div className='fourth-progress' ref={ref}></div>
					<div className='fourth-progress-bar-step'>1</div>
					<div className='fourth-progress-bar-step'>2</div>
					<div className='fourth-progress-bar-step'>3</div>
					<div className='fourth-progress-bar-step'>4</div>
				</div>
				<div className='fourth-tick'>
					<img src={tick} alt='tick' />
				</div>
				<div className='fourth-heading'>
					<div>
						<H1>Congratulations, Eren!</H1>
					</div>
					<div>
						<P light={"light"} center={"center"}>
							You have completed onboarding, you can start using the Eden!
						</P>
					</div>
				</div>
				<div className='fourth-control'>
					<Link to='/' style={{ color: "white", textDecoration: "none" }}>
						<Button>Launch Eden</Button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Fourth;
