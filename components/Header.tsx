import React, { useState,useContext } from 'react'
import Image from 'next/image'
import Logo from '../public/devchallenges.svg'
import Avatar from '../public/R.png'
import AngleUp from '../public/angle-up.svg'
import logOut from '../public/log-out.svg'
import userGroup from '../public/user-group.svg'
import userSvg from '../public/user.svg'
import { HeaderStyle, DropDown } from '../styles/style-global'
import Link from 'next/link'
import { Context } from '../context/context'

const Header = ({ username, photo }: { username: string; photo: string }) => {
	const [rotate, setRotate] = useState(false)
	const context = useContext(Context)!
	return (
		<HeaderStyle className="flex justify-between" rotate={rotate}>
			<div id="img" className="flex align-center">
				<Image src={Logo} width={150} alt="logo" />
			</div>
			<button className="flex" onClick={() => setRotate(!rotate)}>
				<Image
					src={photo || Avatar}
					alt="avatar"
					width={50}
					height={50}
				/>
				<p>{username || ''}</p>
				<Image
					src={AngleUp}
					width={15}
					height={15}
					alt="angle-up"
					className="angle"
				/>
				{rotate && (
					<DropDown className="flex flex-column">
						<Link href="/personalInfo" passHref>
							<a className="flex align-center">
								<Image width={15} height={15} src={userSvg} alt='My profile' />
								My Profile
							</a>
						</Link>
						<Link href="/personalInfo" passHref>
							<a className="flex align-center">
								<Image width={15} height={15} src={userGroup} alt='group user' />
								Group chat
							</a>
						</Link>
						<button className='flex' onClick={context.logout}>
							<Image width={15} height={15} src={logOut} alt='log out' />
							Log out
						</button>
					</DropDown>
				)}
			</button>
		</HeaderStyle>
	)
}

export default Header
