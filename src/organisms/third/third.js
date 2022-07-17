/** @format */

import React from "react";
import "./third.css";
import H1 from "../../atoms/H1/h1";
import P from "../../atoms/P/p";
import Button from "../../atoms/Button/button";
import logo from "../../../src/assets/icons/eden-logo.PNG";
import Card from "../../molecules/Card/card";
import user from "../../assets/icons/user.png";
import audience from "../../assets/icons/audience.png";
import { Link } from "react-router-dom";

const Third = () => {
	const ref = React.useRef();

	React.useEffect(() => {
		ref.current.style.width = "80%";
	}, []);

	return (
		<div className='third-container'>
			<div className='third-sub-container'>
				<div className='third-logo'>
					<div className='third-logo-image'>
						<img src={logo} alt='logo' />
					</div>
					<div>
						<H1>Eden</H1>
					</div>
				</div>
				<div className='third-progress-bar'>
					<div className='third-progress' ref={ref}></div>
					<div className='third-progress-bar-step'>1</div>
					<div className='third-progress-bar-step'>2</div>
					<div className='third-progress-bar-step'>3</div>
					<div className='third-progress-bar-step'>4</div>
				</div>
				<div className='third-heading'>
					<div>
						<H1>Let's set up a home for all your work</H1>
					</div>
					<div>
						<P light={"light"}>You can always create another workspace later</P>
					</div>
				</div>
				<div className='third-control'>
					<div>
						<div className='third-control-card' style={{ marginRight: "20px" }}>
							<Card
								icon={user}
								head={"For myself"}
								subHead={"Write better. Think more clearly. Stay organised"}
							/>
						</div>
						<div className='third-control-card'>
							<Card
								icon={audience}
								head={"With my team"}
								subHead={"Wikis, docs, tasks & projects, all in one place"}
							/>
						</div>
					</div>
					<Button>
						<Link
							to='/fourth'
							style={{ color: "white", textDecoration: "none" }}>
							Create Workspace
						</Link>
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Third;
