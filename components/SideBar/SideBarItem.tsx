import React from "react";

interface SideBarItemArgs {
	text: string;
	bagText?: string | number;
	children?: React.ReactNode;
	onSelect: (arg: any) => any;
}

function SideBarItem({ text, bagText, onSelect, children }: SideBarItemArgs) {
	return (
		<li>
			<button onClick={onSelect} className="relative flex flex-row items-center h-11 w-full focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
        <span className="inline-flex justify-center items-center ml-4">
          { children }
        </span>
				<span className="ml-2 text-sm tracking-wide truncate">{ text }</span>
				{
					bagText ?
						<span
							className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-green-500 bg-green-50 rounded-full">
							{ bagText }
						</span> : null
				}
			</button>
		</li>
	);
}

export default SideBarItem;
