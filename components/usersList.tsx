import React from "react";
import { useUsers } from "../store";
import { User } from "../store";

interface UsersListArgs {
	onCheckUser: (user?: User) => void
}

function UserList({ onCheckUser }: UsersListArgs) {
	const { users, error } = useUsers();

	if (error) {
		return (<div className={ '' }>Error</div>)
	}

	return (
		<div className={ '' }>
			<div>
				<div className="flex flex-col max-w-full overflow-x-hidden shadow-md m-8">
					{/* Tools */ }
					<div
						className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 bg-white p-6 space-y-2 md:space-y-0">
						<div>
							<select name="representative"
							        className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-800 shadow-sm rounded-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm">
								<option>Representative</option>
							</select>
						</div>
						<div>
							<select name="status"
							        className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-800 shadow-sm rounded-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm">
								<option>Status Report</option>
							</select>
						</div>
						<div>
							<select name="schedule"
							        className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-800 shadow-sm rounded-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm">
								<option>Schedule Date</option>
							</select>
						</div>
						<button onClick={e => onCheckUser()} className="bg-indigo-800 text-white text-xs font-semibold py-2 rounded-md border-0">
							Check new client
						</button>
					</div>
					{/* End Tools */ }
					<table className="overflow-x-auto w-full bg-white">
						<thead className="bg-blue-100 border-b border-gray-300">
						<tr>
							<th className="p-4 text-left text-sm font-medium text-gray-500">Birthdate</th>
							<th className="p-4 text-left text-sm font-medium text-gray-500">Status</th>
							<th className="p-4 text-left text-sm font-medium text-gray-500">Client</th>
							<th className="p-4 text-left text-sm font-medium text-gray-500">Email</th>
							<th className="p-4 text-left text-sm font-medium text-gray-500">Actions</th>
							<th className="p-4 text-left text-sm font-medium text-gray-500"/>
						</tr>
						</thead>
						<tbody className="text-gray-600 text-sm divide-y divide-gray-300">
						{
							users.map(user => (
								<tr key={user.id} className="bg-white font-medium text-sm divide-y divide-gray-200 text-left">
									<td className="p-4 whitespace-nowrap">{ user.birthdate }</td>
									<td className="p-4 whitespace-nowrap">
										{
											user.approved ?
												<span className="bg-green-200 text-indigo-600 text-xs font-semibold rounded-2xl py-1 px-4">Approved</span> :
												<span className="bg-yellow-100 text-yellow-600 text-xs font-semibold rounded-2xl py-1 px-4">Not approved</span>
										}
									</td>
									<td className="p-4 whitespace-nowrap">{ user.first_name + ' ' + user.last_name }</td>
									<td className="p-4 whitespace-nowrap">
										<a href={ "mailto:" + user.email }>{ user.email }</a>
									</td>
									<td className="p-4 whitespace-nowrap">
										<div className="flex space-x-1">
											<button className="border-2 border-indigo-200 rounded-md p-1">
												<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
												     className="h-4 w-4 text-indigo-500">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 }
													      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 }
													      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
												</svg>
											</button>
											<button className="border-2 border-indigo-200 rounded-md p-1">
												<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
												     className="h-4 w-4 text-indigo-500">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 }
													      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/>
												</svg>
											</button>
											<button className="border-2 border-red-200 rounded-md p-1">
												<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
												     className="h-4 w-4 text-red-500">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 }
													      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
												</svg>
											</button>
										</div>
									</td>
									<td className="p-4 whitespace-nowrap">
										<button
											onClick={e => onCheckUser(user)}
											className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-4 py-2 rounded-md border-0">
											Start checking
										</button>
									</td>
								</tr>
							))
						}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}

export default UserList;
