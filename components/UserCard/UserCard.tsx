import { User } from "../../store";

function UserCard({ user }: { user: User }) {
	return (
		<div className="border rounded-2xl w-96 hover:shadow-2xl relative flex flex-col mx-auto shadow-lg m-2 duration-200">
			<div className="w-full flex m-3 ml-4">
				<img className="w-28 h-28 p-1 rounded-full z-20" src="https://images.pexels.com/photos/61100/pexels-photo-61100.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb" />
				<div className="title mt-7 ml-3 flex flex-col z-10 text-gray-900">
					<div className="font-bold break-words">{user.first_name + ' ' + user.last_name}</div>
					<p className="text-sm font-light">
						{ user.birthdate }
						<br/>
						{
							user.phone ? <a href={ "tel:" + user.phone }>{ user.phone }</a> : null
						}
					</p>
				</div>
			</div>
			<div className="flex absolute bottom-0 font-bold right-0 text-xs text-gray-500 space-x-0 my-3.5 mr-3">
				<a href={'mailto:' + user.email + '?subject=Hi ' + user.first_name + '!'}
				   title={'Contact email: ' + user.email}
				   className="rounded border-gray-300 p-1 px-4 cursor-pointer hover:bg-gray-700 hover:text-white">Contact</a>
			</div>
		</div>
	)
}

export default UserCard;
