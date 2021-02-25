import { useSelector } from "react-redux";
import { StoreGlobalState, User } from "./storeTypes";

interface UseUsersReturn extends Partial<StoreGlobalState> {
	prospects: User[],
}

export const useUsers = () => {
	return useSelector((state: StoreGlobalState): UseUsersReturn => ({
		users: state.users,
		prospects: state.users.filter(u => u.approved),
		lastUpdatedUser: state.lastUpdatedUser,
		error: state.error,
		isFetchedOnServer: state.isFetchedOnServer,
		openedModalCheck: state.openedModalCheck
	}))
}
