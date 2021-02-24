import { useSelector } from "react-redux";
import { StoreGlobalState } from "./storeTypes";

export const useUsers = () => {
	return useSelector((state: StoreGlobalState): Partial<StoreGlobalState> => ({
		users: state.users,
		lastUpdatedUser: state.lastUpdatedUser,
		error: state.error,
		isFetchedOnServer: state.isFetchedOnServer,
		openedModalCheck: state.openedModalCheck
	}))
}
