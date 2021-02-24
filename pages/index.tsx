import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Head from 'next/head'
import Layout from "../components/layout";
import { checkUserCanceled, checkUserModal, startFetchingUsers, stopFetchingUsers, useStore, useUsers } from "../store";
import UsersList from '../components/usersList'
import CheckUser from '../components/checkUser'
import { User } from "../store";
import MiniCard from "../components/miniCard";

export default function Home() {
	const dispatch = useDispatch();
	const [ currentUser, setCurrentUser ] = useState(null);
	const { openedModalCheck } = useUsers()

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

	return (
		<Layout>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico"/>
			</Head>

			<main className=''>
				<UsersList onCheckUser={ checkUser }/>
				{ openedModalCheck ? <CheckUser user={ currentUser } onClose={ closeCheckNewUser }/> : null }
			</main>

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
