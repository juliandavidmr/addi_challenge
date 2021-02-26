import React from "react";
import { User, useUsers } from "../../store";
import { FormEvent } from "react";
import { useDispatch } from "react-redux";
import { checkUserNationalRegistry } from "../../store";

interface CheckNewUserArgs {
	onClose: (user: User, force: boolean) => void;
	user?: User;
}

function CheckUser({ onClose, user }: CheckNewUserArgs) {
	const dispatch = useDispatch();
	const { users } = useUsers();
	const editing = !!user;

	function submitCheck(e: FormEvent) {
		e.preventDefault();

		if (!editing) {
			user = {
				id: users.length + 1,
				first_name: "",
				last_name: "",
				birthdate: "",
				email: "",
				gender: "",
				identification: "",
				approved: false,
				phone: ''
			}
		}

		dispatch(checkUserNationalRegistry(user))
	}

	return (
		<div className="flex items-center justify-center fixed left-0 bottom-0 w-full h-full bg-gray-800">
			<div className="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center w-full">
				<div className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md">
					<div className="p-4 py-6 text-white bg-blue-500 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly">
						<div className="my-3 text-3xl font-bold tracking-wider text-center">
							Validations
						</div>
						<div className="mt-6 font-normal text-base text-center md:text-justify text-gray-100 md:mt-0 p-1 md:pl-3">
							<ul className='list-outside list-decimal'>
								<li>
									The person should exist in the national registry identification external system and their personal information should
									match the information stored in our local database.
								</li>
								<li>
									The person does not have any judicial records in the national archives' external system.
								</li>
								<li>
									Our internal prospect qualification system gives a satisfactory score for that person. This system outputs a random
									score between 0 and 100. A lead could be turned into prospect if the score is greater than 60.
								</li>
							</ul>
						</div>
						<p className="mt-6 text-sm text-center text-gray-200">
							ADDI <a href="#" className="underline">terms</a> and <a href="#" className="underline">conditions</a>
						</p>
					</div>

					<div className="p-5 bg-white md:flex-1 relative">
						<h3 className="my-4 text-2xl font-semibold text-gray-700">User checker</h3>
						<form action="#" className="flex flex-col space-y-5" onSubmit={e => submitCheck(e)}>
							<div className="flex flex-col space-y-1">
								<label htmlFor="email" className="text-sm font-semibold text-gray-500">Email address</label>
								<input type="email" autoFocus
								       required
								       readOnly={editing}
								       className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
								       defaultValue={user?.email}
								/>
							</div>


							<div className="flex flex-col space-y-1">
								<div className="flex items-center justify-between">
									<label htmlFor="firstname" className="text-sm font-semibold text-gray-500">First name</label>
								</div>
								<input type="text"
								       id='firstname'
								       required
								       readOnly={editing}
								       className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
								       defaultValue={user?.first_name}
								/>
							</div>

							<div className="flex flex-col space-y-1">
								<div className="flex items-center justify-between">
									<label htmlFor="lastname" className="text-sm font-semibold text-gray-500">Last name</label>
								</div>
								<input type="text"
								       id='lastname'
								       required
								       readOnly={editing}
								       className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
								       defaultValue={user?.last_name}
								/>
							</div>

							<div className="flex flex-col space-y-1">
								<div className="flex items-center justify-between">
									<label htmlFor="birthdate" className="text-sm font-semibold text-gray-500">Birthdate</label>
								</div>
								<input type="date"
								       id='birthdate'
								       required
								       readOnly={editing}
								       className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
								       defaultValue={user?.birthdate}
								/>
							</div>
							<div className="flex flex-col space-y-1">
								<div className="flex items-center justify-between">
									<label htmlFor="identification" className="text-sm font-semibold text-gray-500">Identification</label>
								</div>
								<input type="text"
								       id='identification'
								       required
								       readOnly={editing}
								       className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
								       defaultValue={user?.identification}
								/>
							</div>

							<button type="submit" className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4">
								Check
							</button>
						</form>

						<button onClick={e => onClose(null, true)} className="absolute right-3 top-3">
							<svg className="ml-auto fill-current text-gray-700 w-6 h-6 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
								<path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" />
							</svg>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CheckUser;
