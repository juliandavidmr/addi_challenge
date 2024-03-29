import React from "react";
import { User } from "../../store";
import UserCard from "../UserCard/UserCard";

interface ProspectsArgs {
	prospects: User[]
}

function Prospects({ prospects }: ProspectsArgs) {
	return (
		<div className={ 'p-8' } role={ 'con' }>
			<h2 className={ 'font-semibold text-center' }>{ prospects.length.toString() } Prospects</h2>

			<div className={ 'flex flex-wrap flex-row justify-center' } role={ 'group' }>
				{
					prospects.map(prospect =>
						<UserCard key={ prospect.identification } user={ prospect }/>
					)
				}
			</div>
		</div>
	);
}

export default Prospects;
