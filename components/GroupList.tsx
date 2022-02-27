/* eslint-disable react/jsx-no-undef */
import React, { useContext, useState, useEffect, useRef } from 'react'
import FormModal from './FormModal'
import Member from './Groups/Member'
import CreateChannels from './Groups/CreateChannels'
import User from './Groups/User'
import Group from './Groups/Group'
import { ContainGroup, ContainGroups, Search } from '../styles/style-chat'
import { Context } from '../context/context'

const GroupList = ({ isTrue, setIsTrue }: any) => {
	const [modal, setModal] = useState(false)
	const search: any = useRef(null)
	const {
		user,
		groups,
		getGroups,
		getGroup,
		actualGroup,
		viewMembers,
		setViewMembers,
	} = useContext(Context)!
	useEffect(() => {
		getGroups()
	}, [getGroups])

	return (
		<ContainGroup
			className="flex flex-column justify-between"
			isTrue={isTrue ? isTrue : undefined}
		>
			<CreateChannels
				actualGroup={actualGroup}
				setModal={setModal}
				setIsTrue={setIsTrue}
				setView={setViewMembers}
				view={viewMembers}
			/>
			<ContainGroups className="flex flex-column">
				{!viewMembers && (
					<Search ref={search} type="text" placeholder="Search" />
				)}
				{!viewMembers ? (
					groups
						.filter((g: any) =>
							g.name
								.toLowerCase()
								.includes(
									search.current
										? search.current.value.toLowerCase()
										: ''
								)
						)
						.map((group: any, i: number) => (
							<Group
								key={i}
								getGroup={getGroup}
								actual={actualGroup && actualGroup._id}
								setView={setViewMembers}
								{...group}
							/>
						))
				) : (
					<>
						{actualGroup && (
							<Member
								name={actualGroup.name}
								description={actualGroup.description}
								members={actualGroup.members}
							/>
						)}
					</>
				)}
			</ContainGroups>
			<User user={user} />
			{modal && <FormModal setModal={setModal} />}
		</ContainGroup>
	)
}

export default GroupList
