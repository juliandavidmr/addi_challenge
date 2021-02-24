import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Head from 'next/head'
import Layout from "../components/layout";
import { startFetchingUsers, stopFetchingUsers } from "../store";
import UsersList from '../components/usersList'
import CheckUser from '../components/checkUser'
import { User } from "../store";

export default function Home() {
	const dispatch = useDispatch();
	const [openedCheckNew, setOpenedCheckNew] = useState(false);
	const [currentUser, setCurrentUser] = useState(null);

	// @ts-ignore
	useEffect(() => {
		dispatch(startFetchingUsers())
		return () => dispatch(stopFetchingUsers())
	}, [dispatch]);

	function checkUser(user?: User) {
		setOpenedCheckNew(true);
		if (user) {
			setCurrentUser(user);
		}
	}

	function closeCheckNewUser() {
		setOpenedCheckNew(false);
		setCurrentUser(null);
	}

	return (
		<Layout>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico"/>
			</Head>

			<main className=''>
				<UsersList onCheckUser={checkUser}/>
				{ openedCheckNew ? <CheckUser user={currentUser} onClose={closeCheckNewUser} /> : null }
			</main>

			<footer className={'text-center'}>
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
