import React, { useContext, useEffect, useRef,useState } from 'react'
import Image from 'next/image'
import paperPlane from '../public/paper-plane-solid.svg'
import bars from '../public/bars-solid.svg'
import {
	ContainChat,
	ContainInput,
	Input,
	SendChat,
	HeaderChat,
	ChatMessages,
} from '../styles/style-chat'
import { Context } from '../context/context'
import Message from './Groups/Message'
const Chat = ({ setIsTrue }: any) => {
	const { socket, user, actualGroup,saveMessage } = useContext(Context)!
	const messageEl:any = useRef(null)!
	const sendMessage = (e: any) => {
		e.preventDefault()
		if(!e.target.chat.value) return
		const newMessage = {
			idUser: {
				username:user.username,
				photo:user.photo,
				_id:user._id
			},
			message: e.target.chat.value,
			idGroup: actualGroup._id,
			createdAt:Date.now()
		}
		saveMessage(newMessage)
		socket.emit('message', newMessage)
		e.target.chat.value = ''
	}
	useEffect(() => {
		if (messageEl) {
		  messageEl.current.addEventListener('DOMNodeInserted', (event:any) => {
			const { currentTarget: target } = event;
			target.scroll({ top: target.scrollHeight, behavior: 'smooth' });
		  });
		}
	}, [])

	return (
		<ContainChat>
			<HeaderChat className="flex align-center">
				<Image
					width={18}
					height={18}
					src={bars}
					alt="bars"
					onClick={() => setIsTrue(true)}
				/>
				<p>{actualGroup && actualGroup.name}</p>
			</HeaderChat>
			<ChatMessages ref={messageEl} className="flex flex-column ">
				{actualGroup && 
					actualGroup.messages.map((message: any,i:number) => (
						<Message key={i} {...message}/>
					))}
			</ChatMessages>

			{actualGroup && (
				<ContainInput onSubmit={sendMessage}>
					<Input
						type="text"
						name="chat"
						placeholder="Type a message here"
						autoComplete='off'
					/>
					<SendChat>
						<Image
							src={paperPlane}
							width={20}
							height={20}
							alt="paper-plane"
						/>
					</SendChat>
				</ContainInput>
			)}
		</ContainChat>
	)
}

export default Chat
