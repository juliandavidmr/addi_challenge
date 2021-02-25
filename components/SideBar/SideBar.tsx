import SideBarItem from "./SideBarItem";
import { User } from "../../store";

interface SideBarArgs {
	users: User[],
	prospects: User[],
	onSelectItem: (item: string) => any;
}

export const SideBarOptions = {
	AVAILABLE_CLIENTS: 'AVAILABLE_CLIENTS',
	PROSPECTS: 'PROSPECTS'
};

function SideBar({ users, prospects, onSelectItem }: SideBarArgs) {
	return (
		<div className="flex flex-col top-0 left-0 w-64 bg-white h-screen border-r">
			<div className="flex items-center justify-center h-14 border-b">
				CRM + Prospect validation
			</div>
			<div className="overflow-y-auto overflow-x-hidden flex-grow">
				<ul className="flex flex-col py-4 space-y-1">
					<li className="flex flex-row items-center h-8 px-5">
						<div className="text-sm font-light tracking-wide text-gray-500">Menu</div>
					</li>
					<SideBarItem text={ 'Available users' }
					             bagText={users.length.toString()}
					             onSelect={ () => onSelectItem(SideBarOptions.AVAILABLE_CLIENTS) }>
						<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
						     xmlns="http://www.w3.org/2000/svg">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
							      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/>
						</svg>
					</SideBarItem>
					<SideBarItem text={ 'Prospects' } bagText={ prospects.length.toString() }
					             onSelect={ () => onSelectItem(SideBarOptions.PROSPECTS) }>
						<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
						     xmlns="http://www.w3.org/2000/svg">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
							      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
						</svg>
					</SideBarItem>
				</ul>
			</div>
		</div>
	)
}

export default SideBar;
