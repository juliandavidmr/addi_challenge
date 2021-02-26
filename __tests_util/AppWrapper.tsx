import React from "react";
import { Provider } from 'react-redux'
import { useStore } from "../store";
import { INITIAL_STATE } from "../store/reducers";

function AppTest({ children, initialReduxState = INITIAL_STATE }) {
	const store = useStore(initialReduxState);

	return (
		<Provider store={store}>
			{ children }
		</Provider>
	)
}

export default AppTest
