import { createEpicMiddleware } from "redux-observable";
import { createLogger } from 'redux-logger'
import { applyMiddleware, createStore, Store, compose } from "redux";
import { rootEpic } from "./epics";
import { useMemo } from "react";
import { reducer, ReducerArgs } from "./reducers";
import { StoreGlobalState } from "./storeTypes";

declare const window: any;
let store: Store<StoreGlobalState, ReducerArgs>;

const initStore = (initialState: StoreGlobalState) => {
	const epicMiddleware = createEpicMiddleware()
	const logger = createLogger({ collapsed: true }) // log every action to see what's happening behind the scenes.
	const reduxMiddleware = applyMiddleware(epicMiddleware, logger)

	const store = createStore(
		reducer,
		initialState,
		reduxMiddleware
	)

	epicMiddleware.run(rootEpic)

	return store
}

export const initializeStore = (preloadedState: StoreGlobalState) => {
	let _store = store ?? initStore(preloadedState)

	// After navigating to a page with an initial Redux state, merge that state
	// with the current state in the store, and create a new store
	if (preloadedState && store) {
		_store = initStore({
			...store.getState(),
			...preloadedState,
		})
		// Reset the current store
		store = undefined
	}

	// For SSG and SSR always create a new store
	if (typeof window === 'undefined') return _store
	// Create the store once in the client
	if (!store) store = _store

	return _store
}

export function useStore(initialState?: StoreGlobalState) {
	return useMemo(() => initializeStore(initialState), [ initialState ])
}

