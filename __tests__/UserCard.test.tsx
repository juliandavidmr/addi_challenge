import React from "react";

import { render, screen } from "@testing-library/react";
import UserCard from "../components/UserCard/UserCard";
import { User } from "../store";

describe("Check render UserCard", () => {
	const user: User = {
		approved: false,
		birthdate: "1993-03-11",
		email: "username@domain.com",
		first_name: "",
		gender: "",
		id: 0,
		identification: "",
		last_name: "",
		phone: ""
	};

	it('App shows "A simple example repo" in a <p> tag', () => {
		const { container } = render(<UserCard user={user} />);
		expect(container.querySelector("p")).toHaveTextContent(user.birthdate);
		const email = screen.getByTitle(`Contact email: ${user.email}`);
		expect(email).toBeInTheDocument();
	});
});
