import { useSelector } from "react-redux";
import { StoreGlobalState } from "./storeTypes";

export const useUsers = () => {
	return useSelector((state: StoreGlobalState): Partial<StoreGlobalState> => ({
		users: state.users,
		error: state.error,
		isFetchedOnServer: state.isFetchedOnServer
	}))
}
