import React from "react";
import Head from 'next/head'

export const siteTitle = 'ADDI Challenge'

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Head>
				<link rel="icon" href="/favicon.ico"/>
				<meta
					name="description"
					content="Learn how to build a personal website using Next.js"
				/>
				<meta
					property="og:image"
					content={ `https://og-image.vercel.app/${ encodeURI(
						siteTitle
					) }.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg` }
				/>
				<meta name="og:title" content={ siteTitle }/>
				<meta name="twitter:card" content="summary_large_image"/>
			</Head>
			<main>{ children }</main>
		</>
	)
}
