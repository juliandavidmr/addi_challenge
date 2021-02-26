import * as Actions from "./actionTypes";
import { StoreGlobalState, User } from "./storeTypes";

export const INITIAL_STATE: StoreGlobalState = {
	users: [],
	openedModalCheck: false,
	lastUpdatedUser: null,
	isFetchedOnServer: false,
	error: null,
}

export type ReducerArgs = { type: string, payload: any };

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
		case Actions.CHECK_USER_MODAL:
			return {
				...state,
				openedModalCheck: true,
			}
		case Actions.CHECK_USER_SUCCESS:
			const lastUpdatedUser: User = payload.user;
			const users = state.users.map(user => {
				if (user.identification === lastUpdatedUser.identification) {
					user.approved = payload.valid;
				}

				return user;
			})

			return {
				...state,
				users: users,
				openedModalCheck: false,
				lastUpdatedUser
			}
		case Actions.CHECK_USER_CANCELED:
			return {
				...state,
				lastUpdatedUser: null,
				openedModalCheck: false,
			}
		default:
			return state
	}
}
