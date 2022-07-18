/** @format */

import React from "react";
import "./first.css";
import H1 from "../../atoms/H1/h1";
import P from "../../atoms/P/p";
import Button from "../../atoms/Button/button";
import Control from "../../molecules/Control/control";
import logo from "../../../src/assets/icons/eden-logo.PNG";
import { Link } from "react-router-dom";

const First = () => {
	const ref = React.useRef();

	React.useEffect(() => {
		ref.current.style.width = "22%";
	}, []);

	return (
		<div className='first-container'>
			<div className='first-sub-container'>
				<div className='first-logo'>
					<div className='first-logo-image'>
						<img src={logo} alt='logo' />
					</div>
					<div>
						<H1>Eden</H1>
					</div>
				</div>
				<div className='first-progress-bar'>
					<div className='first-progress' ref={ref}></div>
					<div className='first-progress-bar-step'>1</div>
					<div className='first-progress-bar-step'>2</div>
					<div className='first-progress-bar-step'>3</div>
					<div className='first-progress-bar-step'>4</div>
				</div>
				<div className='first-heading'>
					<div>
						<H1>Welcome! First things first...</H1>
					</div>
					<div>
						<P light={"light"}>You can change them later</P>
					</div>
				</div>
				<div className='first-control'>
					<div>
						<Control label={"Full Name"} placeholder={"Steve Jobs"} />
					</div>
					<div>
						<Control label={"Display Name"} placeholder={"Steve"} />
					</div>
					<Link to='/second' style={{ color: "white", textDecoration: "none" }}>
						<Button>Create Workspace</Button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default First;
