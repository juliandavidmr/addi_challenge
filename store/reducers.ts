import * as Actions from "./actionTypes";
import { StoreGlobalState } from "./storeTypes";

const INITIAL_STATE: StoreGlobalState = {
	users: [],
	isFetchedOnServer: false,
	error: null,
}

type ReducerArgs = { type: string, payload: any };

export function reducer(state = INITIAL_STATE, { type, payload }: ReducerArgs): StoreGlobalState {
	switch (type) {
		case Actions.FETCH_USER_SUCCESS:
			return {
				...state,
				users: payload.users,
				isFetchedOnServer: payload.isServer,
			};
		case Actions.FETCH_USER_FAILURE:
			return {
				...state,
				error: payload.error,
				isFetchedOnServer: payload.isServer,
			}
		case Actions.CHECK_USER_SUCCESS:
			const users = state.users.map(user => {
				if (user.identification === payload.user.identification) {
					user.approved = payload.valid;
				}

				return user;
			})
			return {
				...state,
				users: users
			}
		default:
			return state
	}
}
