import React,{useContext} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { DropDown } from '../styles/style-global'
import logOut from '/public/log-out.svg'
import userGroup from '/public/user-group.svg'
import userSvg from '/public/user.svg'
import userWhiteSvg from '/public/user-white.svg'
import { DropdownChat } from '../styles/style-chat'
import { Context } from '../context/context'

const DropdownUse = ({ chat }: { chat: boolean }) => {
	const { logout } = useContext(Context)!
    const Drop = !chat ? DropDown : DropdownChat
	return (
		<Drop className="flex flex-column">
			<Link href="/personalInfo" >
				<span className="flex align-center">
					<Image
						width={15}
						height={15}
						src={chat ? userWhiteSvg : userSvg}
						alt="My profile"
					/>
					My Profile
				</span>
			</Link>
			<Link href="/chat">
				<span className="flex align-center">
					<Image
						width={15}
						height={15}
						src={userGroup}
						alt="group user"
					/>
					{chat ? 'Tweeter' : 'Group chat'}
				</span>
			</Link>
			<button className="flex" onClick={logout}>
				<Image width={15} height={15} src={logOut} alt="log out" />
				Log out
			</button>
		</Drop>
	)
}

export default DropdownUse
