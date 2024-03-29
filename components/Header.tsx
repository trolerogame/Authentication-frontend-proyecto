import React, { useState } from 'react'
import Image from 'next/image'
import Logo from '../public/devchallenges.svg'
import Avatar from '../public/R.png'
import AngleUp from '../public/angle-up.svg'
import { HeaderStyle } from '../styles/style-global'
import { Context } from '../context/context'
import DropdownUse from './DropdownUse'

const Header = ({ username, photo }: { username: string; photo: string }) => {
	const [rotate, setRotate] = useState(false)
	return (
		<HeaderStyle className="flex justify-between" rotate={rotate ? rotate.toString() : undefined}>
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
					<DropdownUse chat={false} />
				)}
			</button>
		</HeaderStyle>
	)
}

export default Header
