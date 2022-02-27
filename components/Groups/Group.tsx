import React,{useContext} from 'react'
import { ContainTitleGroup } from '../../styles/style-chat'
import { Context } from '../../context/context'

const Group = ({ name,_id,getGroup,actual,setView }: any) => {
	const {socket,user} = useContext(Context)!
	const getGroupById = async () => {
		actual !== _id && await getGroup(_id)
		socket.emit('join_group',{
			username:user.username,
			photo:user.photo,
			idGroup: _id,
		})
		setView(true)
	}
	const prex = name.trim().split(' ')
	return (
		<ContainTitleGroup onClick={getGroupById} className="flex align-center">
			<span>
				{`${
					prex[0][0] + (prex.length > 1 ? prex.at(-1)[0] : '')
				}`.toLocaleUpperCase()}
			</span>
			<p>{name.toLocaleUpperCase()}</p>
		</ContainTitleGroup>
	)
}

export default Group
