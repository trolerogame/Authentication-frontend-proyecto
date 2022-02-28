/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Chat from '../components/Chat'
import GroupList from '../components/GroupList'
import { ContainChatGroup } from '../styles/style-chat'
import { getTokenCookie } from '../utils/getTokenCookie'
import HeaderComponent from '../components/HeadComponent'
const chat = () => {
	const [isTrue, setIsTrue] = useState(false)
	const router = useRouter()
	useEffect(() => {
		if(!getTokenCookie()) router.push('/login')
	},[router])
	return (
		<ContainChatGroup>
			<HeaderComponent title='Chat' />
			<GroupList isTrue={isTrue} setIsTrue={setIsTrue} />
			<Chat setIsTrue={setIsTrue} />
		</ContainChatGroup>
	)
}

export default chat
