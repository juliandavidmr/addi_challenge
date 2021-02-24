import React from "react";
import { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import '../styles/globals.css'
import { useStore } from "../store";

function App({ Component, pageProps }: AppProps) {
	const store = useStore(pageProps.initialReduxState);

	return (
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>
	)
}

export default App
