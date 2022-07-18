/** @format */

import React from "react";
import "./second.css";
import H1 from "../../atoms/H1/h1";
import P from "../../atoms/P/p";
import Button from "../../atoms/Button/button";
import Control from "../../molecules/Control/control";
import logo from "../../../src/assets/icons/eden-logo.PNG";
import Small from "../../atoms/Small/small";
import Input from "../../atoms/Input/input";
import { Link } from "react-router-dom";

const Second = () => {
	const ref = React.useRef();

	React.useEffect(() => {
		ref.current.style.width = "50%";
	}, []);

	return (
		<div className='second-container'>
			<div className='second-sub-container'>
				<div className='second-logo'>
					<div className='second-logo-image'>
						<img src={logo} alt='logo' />
					</div>
					<div>
						<H1>Eden</H1>
					</div>
				</div>
				<div className='second-progress-bar'>
					<div className='second-progress' ref={ref}></div>
					<div className='second-progress-bar-step'>1</div>
					<div className='second-progress-bar-step'>2</div>
					<div className='second-progress-bar-step'>3</div>
					<div className='second-progress-bar-step'>4</div>
				</div>
				<div className='second-heading'>
					<div>
						<H1>Let's set up a home for all your work</H1>
					</div>
					<div>
						<P light={"light"}>You can always create another workspace later</P>
					</div>
				</div>
				<div className='second-control'>
					<div>
						<Control label={"Workspace Name"} placeholder={"Even"} />
					</div>
					<div className='second-new-control'>
						<div className='second-new-control-label'>
							<Small bold={"bold"}>Workspace URL</Small>
							<P p12={"p-12"} light={"light"}>
								(optional)
							</P>
						</div>
						<div className='second-new-control-input'>
							<Input placeholder={"www.eden.com/"} bool={true} />
							<Input placeholder={"Example"} />
						</div>
					</div>
					<Link to='/third' style={{ color: "white", textDecoration: "none" }}>
						<Button>Create Workspace</Button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Second;
