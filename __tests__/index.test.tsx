import React from "react";

import App from "../pages/index";
import { render, screen } from "@testing-library/react";
import AppTest from "../__tests_util/AppWrapper";

describe("Check initial content", () => {
	it('App shows "A simple example repo" in a <p> tag', () => {
		const { container } = render(
			<AppTest>
				<App />
			</AppTest>
		);
		expect(container.querySelector("footer")).toHaveTextContent("By Julian");
	});
});
