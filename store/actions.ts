import * as types from './actionTypes'
import { User } from "./storeTypes";

//#region Users
export const startFetchingUsers = () => ({
	type: types.START_FETCHING_USERS,
})

export const stopFetchingUsers = () => ({
	type: types.STOP_FETCHING_USERS,
})

export const fetchUser = (isServer = false) => ({
	type: types.FETCH_USER,
	payload: { isServer },
})

export const fetchUserSuccess = (users: User[], isServer) => ({
	type: types.FETCH_USER_SUCCESS,
	payload: { users, isServer },
})

export const fetchUserFailure = (error, isServer) => ({
	type: types.FETCH_USER_FAILURE,
	payload: { error, isServer },
})
//#endregion

//#region Check User
export const checkUserNationalRegistry = (user: User) => ({
	type: types.CHECK_USER,
	payload: { user },
})

export const checkUserSuccess = (user: User, valid: boolean) => ({
	type: types.CHECK_USER_SUCCESS,
	payload: { user, valid },
})

export const checkUserJudicialRecords = (user: User) => ({
	type: types.CHECK_USER_JUDICIAL_RECORDS,
	payload: { user },
})

export const checkUserProspectQualification = (user: User) => ({
	type: types.CHECK_USER_PROSPECT_QUALIFICATION_RECORDS,
	payload: { user },
})

export const checkUserCanceled = (error) => ({
	type: types.CHECK_USER_CANCELED,
	payload: { error },
})

//#endregion
