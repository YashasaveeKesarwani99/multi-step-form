/** @format */

import React from "react";
import Card from "./card";

import user from "../../../src/assets/icons/user.png";

export default {
	title: "Card",
	component: Card,
};

export const primary = () => {
	return (
		<Card icon={user} head={"This is heading"} subHead={"This is subHead"} />
	);
};
