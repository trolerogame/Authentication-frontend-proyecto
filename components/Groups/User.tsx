import React, { useState } from 'react'
import Image from 'next/image'
import { ContainUser } from '../../styles/style-chat'
import AvatarDefault from '/public/R.png'
import angleUp from '/public/angle-left.svg'
import DropdownUse from '../DropdownUse'

const User = ({ user }: any) => {
	const [rotate, setRotate] = useState(false)
	return (
		<ContainUser
			rotate={rotate ? rotate.toString() : undefined}
			className="flex justify-between"
		>
			<div className="flex align-center">
				<Image
					src={(user && user.photo) || AvatarDefault}
					alt="avatar"
					width={40}
					height={40}
				/>
				<p>{user ? user.username : 'Xanthe neal'}</p>
			</div>
			<div
				className="flex align-center containAngle"
				onClick={() => setRotate(!rotate)}
			>
				{rotate && (
					<DropdownUse chat/>
				)}
				<Image
					id="angle"
					src={angleUp}
					alt="angle-up"
					width={10}
					height={10}
				/>
			</div>
		</ContainUser>
	)
}

export default User
