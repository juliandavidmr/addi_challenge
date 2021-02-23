import React from "react";

import App from "../pages/index";
import { render, screen } from "@testing-library/react";

describe("Check initial content", () => {
	it('App shows "A simple example repo" in a <p> tag', () => {
		render(<App />);
		expect(screen.getByRole("button")).toHaveTextContent("Hi");
	});
});
