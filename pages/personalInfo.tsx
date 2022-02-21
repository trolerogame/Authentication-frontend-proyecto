/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext, useEffect } from 'react'
import Image from 'next/image'
import HeaderComponent from '../components/HeadComponent'
import { useRouter } from 'next/router'
import { Context } from '../context/context'
import { useQuery } from '@apollo/client'
import { dataUserConvert } from '../utils/dataUserConvert'
import Avatar from '../public/R.png'
import {
	ElementInfo,
	List,
	ContainEditButton,
	ContainTitle,
	CardInfo,
	ContainInfo,
	Edit,
} from '../styles/style-personalInfo'
import Link from 'next/link'
import { getTokenCookie } from '../utils/getTokenCookie'
import Header from '../components/Header'

const personalInfo = () => {
	const router = useRouter()
	const context = useContext(Context)!
	const { data } = useQuery(context.GET_USER)
	useEffect(() => {
		if (!getTokenCookie()) router.push('/login')
		context.setUser(data && data.getUser)
		console.log(context.user ? context.user : '')
	}, [context, data, router])
	return (
		<>
			<HeaderComponent title='Personal Info' />
			<Header
				username={context.user ? context.user.username : ''}
				photo={context.user ? context.user.photo : ''}
			/>
			{context.user && (
				<ContainInfo>
					<div>
						<ContainTitle>
							<h2>Personal Info</h2>
							<p>Basic Info, like your name and photo</p>
						</ContainTitle>
						<CardInfo>
							<ContainEditButton className="flex justify-between">
								<div>
									<h2>Profile</h2>
									<p>
										Some info may be visible to other people
									</p>
								</div>
								<Link href="/editProfile" passHref>
									<Edit>Edit</Edit>
								</Link>
							</ContainEditButton>
							<List>
								<ElementInfo>
									<p>PHOTO</p>
									<Image
										width={70}
										height={70}
										src={
											(context.user &&
												context.user.photo) ||
											Avatar
										}
										alt="avatar"
									/>
								</ElementInfo>
								{context.user &&
									dataUserConvert(context.user).map(
										(el: any) => (
											<ElementInfo key={el[0]}>
												<p>{el[0]}</p>
												<b>{el[1]}</b>
											</ElementInfo>
										)
									)}
							</List>
						</CardInfo>
					</div>
				</ContainInfo>
			)}
		</>
	)
}

export default personalInfo
