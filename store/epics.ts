import { of } from 'rxjs'
import { takeUntil, mergeMap, catchError, map } from 'rxjs/operators'
import { combineEpics, ofType } from 'redux-observable'

import * as actions from './actions'
import * as types from './actionTypes'
import { checkJudicialRecords, checkNationalRegistry, checkProspectQualification, getUsers } from "./api";
import { User } from "./storeTypes";

export const fetchUsersEpic = (action$, state$) =>
	action$.pipe(
		ofType(types.START_FETCHING_USERS),
		mergeMap((action) => {
			return of([]).pipe(
				map(() => actions.fetchUser()),
				takeUntil(
					action$.ofType(types.STOP_FETCHING_USERS, types.FETCH_USER_FAILURE)
				)
			)
		})
	)

export const fetchUserEpic = (action$, state$) =>
	action$.pipe(
		ofType(types.FETCH_USER),
		mergeMap((action: any) =>
			getUsers()
				.pipe(
					map((response) =>
						actions.fetchUserSuccess(response.response.data, action.payload.isServer)
					),
					catchError((error) =>
						of(
							actions.fetchUserFailure(
								error.xhr.response,
								action.payload.isServer
							)
						)
					)
				)
		)
	)


export const checkUserEpic = (action$, state$) =>
	action$.pipe(
		ofType(types.CHECK_USER),
		mergeMap((action: any) =>
			checkNationalRegistry((action.payload.user as User).identification)
				.pipe(
					map((response) =>
						response.response.valid ?
							actions.checkUserJudicialRecords(action.payload.user) : actions.checkUserCanceled(action.payload.user)
					),
					catchError((error) =>
						of(
							actions.checkUserCanceled(
								error.xhr?.response
							)
						)
					)
				)
		)
	)

export const checkUserJudicialRecordsEpic = (action$, state$) =>
	action$.pipe(
		ofType(types.CHECK_USER_JUDICIAL_RECORDS),
		mergeMap((action: any) =>
			checkJudicialRecords(action.payload.user)
				.pipe(
					map((response) =>
						response.response.valid ?
							actions.checkUserProspectQualification(action.payload.user)
							: actions.checkUserCanceled(action.payload.user)
					),
					catchError((error) =>
						of(
							actions.checkUserCanceled(action.payload.user)
						)
					)
				)
		)
	)


export const checkUserProspectQualificationEpic = (action$, state$) =>
	action$.pipe(
		ofType(types.CHECK_USER_PROSPECT_QUALIFICATION_RECORDS),
		mergeMap((action: any) =>
			checkProspectQualification(action.payload.user.identification)
				.pipe(
					map((response) =>
						response.response.valid ?
							actions.checkUserSuccess(action.payload.user, true)
							: actions.checkUserCanceled(action.payload.user)
					),
					catchError((error) =>
						of(actions.checkUserCanceled(action.payload.user))
					)
				)
		)
	)


export const rootEpic = combineEpics(
	fetchUsersEpic,
	fetchUserEpic,
	checkUserEpic,
	checkUserJudicialRecordsEpic,
	checkUserProspectQualificationEpic
)
