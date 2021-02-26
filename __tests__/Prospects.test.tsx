import React from "react";

import { render, screen } from "@testing-library/react";
import UserCard from "../components/UserCard/UserCard";
import { User } from "../store";
import Prospects from "../components/Prospects/Prospects";

describe("Check render UserCard", () => {
	const users: User[] = [
		{
			approved: true,
			birthdate: "1993-03-11",
			email: "username@domain.com",
			first_name: "",
			gender: "",
			id: 0,
			identification: "",
			last_name: "",
			phone: ""
		},
		{
			approved: true,
			birthdate: "1993-03-11",
			email: "username@domain.com",
			first_name: "",
			gender: "",
			id: 0,
			identification: "",
			last_name: "",
			phone: ""
		}
	];

	it('App shows "2 Prospects" in a tag', () => {
		render(<Prospects prospects={ users }/>);
		const email = screen.getByText(`${ users.length } Prospects`);
		expect(email).toBeInTheDocument();
	});

	it('Should render 2 cards', () => {
		render(<Prospects prospects={ users }/>);
		const email = screen.getByRole(`group`);
		expect(email).toBeInTheDocument();

		const cards = screen.getAllByRole(`article`);
		expect(cards.length).toEqual(users.length);
	});
});
