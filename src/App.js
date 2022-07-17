/** @format */

import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import First from "./organisms/first/first";
import Second from "./organisms/second/second";
import Third from "./organisms/third/third";
import Fourth from "./organisms/fourth/fourth";

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route exact path='/' element={<First />} />
				<Route exact path='/second' element={<Second />} />
				<Route exact path='/third' element={<Third />} />
				<Route exact path='/fourth' element={<Fourth />} />
			</Routes>
		</div>
	);
}

export default App;
