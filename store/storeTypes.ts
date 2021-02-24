export interface StoreGlobalState {
	users: User[],
	lastUpdatedUser: User;
	openedModalCheck: boolean;
	isFetchedOnServer: boolean,
	error: any,
}

export interface User {
	id: number;
	first_name: string;
	last_name: string;
	email: string;
	gender: string;
	identification: string;
	birthdate: string;
	approved?: boolean;
}
