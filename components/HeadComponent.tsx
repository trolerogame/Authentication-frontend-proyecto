/* eslint-disable @next/next/no-page-custom-font */
import React from 'react'
import Head from 'next/head'
const HeadComponent = ({ title }: { title: string }) => {
	return (
		<Head>
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link
				rel="preconnect"
				href="https://fonts.gstatic.com"
				crossOrigin="true"
			/>
			<link
				href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&family=Mukta:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700&family=Rubik:wght@400;500&display=swap"
				rel="stylesheet"
			/>
			<link rel="icon" type="image/png" href="/devchallenges.png" />
			<title>{title}</title>
		</Head>
	)
}

export default HeadComponent
