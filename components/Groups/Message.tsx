import React from 'react'
import Image from 'next/image'
import AvatarDefault from '/public/R.png'
import { MessageStyle,MessageAndDate } from '../../styles/style-chat'
import { moment } from '../../utils/moment'
const Message = ({ message, createdAt, idUser }: any) => {
	return (
		<MessageStyle className="flex justify-start">
			<div>
				<Image
					src={idUser ? idUser.photo : AvatarDefault}
					alt="avatar"
					width={40}
					height={40}
				/>
			</div>
			<MessageAndDate>
				<div className="flex align-center">
					<b>{idUser.username}</b>
					<span>{moment(createdAt)}</span>
				</div>
				<p>{message}</p>
			</MessageAndDate>
		</MessageStyle>
	)
}

export default Message
