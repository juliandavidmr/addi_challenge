import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Head from 'next/head'
import Layout from "../components/Layout/Layout";
import { checkUserCanceled, checkUserModal, startFetchingUsers, stopFetchingUsers, useUsers } from "../store";
import UsersList from '../components/UsersList/UsersList'
import CheckUser from '../components/CheckUser/CheckUser'
import { User } from "../store";
import SideBar, { SideBarOptions } from "../components/SideBar/SideBar";
import Prospects from "../components/Prospects/Prospects";

export default function Home() {
	const dispatch = useDispatch();
	const [ currentTab, setCurrentTab ] = useState(SideBarOptions.AVAILABLE_CLIENTS);
	const [ currentUser, setCurrentUser ] = useState(null);
	const { users, prospects, error, openedModalCheck } = useUsers()

	// @ts-ignore
	useEffect(() => {
		dispatch(startFetchingUsers())
		return () => dispatch(stopFetchingUsers())
	}, [ dispatch ]);

	function checkUser(user?: User) {
		setCurrentUser(user);
		dispatch(checkUserModal(user))
	}

	function closeCheckNewUser(user: User, force: boolean) {
		setCurrentUser(null);
		dispatch(checkUserCanceled(user, force))
	}

	function selectItemPage(item: string) {
		setCurrentTab(item)
	}

	function renderContent() {
		switch (currentTab) {
			case SideBarOptions.PROSPECTS:
				return (<Prospects prospects={prospects} />);
			case SideBarOptions.AVAILABLE_CLIENTS:
				return (<UsersList users={users} onCheckUser={ checkUser }/>);
			default:
				return <div>Empty</div>
		}
	}

	return (
		<Layout>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico"/>
			</Head>

			<div className='flex'>
				<div className={'flex-auto'}>
					<SideBar users={users} prospects={prospects} onSelectItem={selectItemPage} />
				</div>
				<div className='flex-auto container mx-auto'>
					{ renderContent() }
				</div>
			</div>

			{ openedModalCheck ? <CheckUser user={ currentUser } onClose={ closeCheckNewUser }/> : null }

			<footer className={ 'text-center' }>
				<a
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					By Julian
				</a>
			</footer>
		</Layout>
	)
}
