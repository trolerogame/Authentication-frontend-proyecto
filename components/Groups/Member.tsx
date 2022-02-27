import React from 'react'
import Image from 'next/image'
import R from '/public/R.png'
import { ContainMembers } from '../../styles/style-chat'
const Member = ({name,description,members}:any) => {
	return (
		<>
			<div className="data">
                <h3>{name && name.toLocaleUpperCase()}</h3>
                <p>{description}</p>
            </div>
			<h3>Members</h3>
			{members && members.map((member: any, i: number) => (
				<ContainMembers className="flex align-center" key={i}>
					<Image
						src={member.photo ? member.photo : R}
						alt="avatar"
						width={40}
						height={40}
					/>
					<p>{member.username}</p>
				</ContainMembers>
			))}
		</>
	)
}

export default Member
