/* eslint-disable react-hooks/rules-of-hooks */
import { createContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { gql, useQuery } from '@apollo/client'
import { ContextType, CreateGroup } from '../utils/types'
import { getTokenCookie } from '../utils/getTokenCookie'
import { urlSocket } from '../utils/urlApis'
import socketIOClient from 'socket.io-client'
export const Context = createContext<ContextType | null>(null)

export default function ContextUse(props: any) {
	const router = useRouter()
	const [user, setUser] = useState(null)
	const [groups, setGroups] = useState<any[]>([])
	const [viewMembers, setViewMembers] = useState(false)
	const [memori,setMemory] = useState<any[]>([])
	const [actualGroup, setActualGroup] = useState<any | null>(null)
	const [socket, setSocket] = useState<any | null>(null)
	const UPLOAD_FILE = gql`
		mutation uploadFile($file: String) {
			uploadFile(file: $file)
		}
	`
	const CREATE_USER = gql`
		mutation createUser($email: String!, $password: String!) {
			createUser(input: { email: $email, password: $password }) {
				email
				password
				error
			}
		}
	`

	const LOGIN_USER = gql`
		mutation loginUser($email: String, $password: String) {
			loginUser(email: $email, password: $password) {
				token
				user {
					photo
					username
					bio
					phone
					email
					passwordLength
				}
				error
			}
		}
	`
	const GET_USER = gql`
		query {
			getUser {
				_id
				photo
				username
				bio
				phone
				email
				passwordLength
			}
		}
	`
	const EDIT_USER = gql`
		mutation editUser(
			$username: String
			$password: String
			$email: String
			$bio: String
			$phone: String
			$photo: String
		) {
			editUser(
				input: {
					username: $username
					password: $password
					email: $email
					bio: $bio
					phone: $phone
					photo: $photo
				}
			) {
				token
				error
			}
		}
	`
	const createGroup = async (data: CreateGroup) => {
		try {
			const res = await fetch(urlSocket + '/group/create', {
				method: 'POST',
				body: JSON.stringify({ ...data }),
				headers: {
					Authorization: 'Bearer ' + getTokenCookie(),
					'Content-Type': 'application/json',
				},
			})
			const newGroup = await res.json()
			const newGroups = [...groups, newGroup]
			setGroups(newGroups)
			return true
		} catch {
			return false
		}
	}
	const getGroups = async () => {
		const res = await fetch(urlSocket + '/group', {
			headers: {
				Authorization: 'Bearer ' + getTokenCookie(),
			},
		})
		const newGroups = await res.json()
		setGroups(newGroups)
	}

	const getGroup = async (id: string) => {
		const index = memori.findIndex(e => e._id == id)
		if(index !== -1) {
			return setActualGroup(memori[index])
		}
		const res = await fetch(urlSocket + `/group/${id}`, {
			headers: {
				Authorization: 'Bearer ' + getTokenCookie(),
			},
		})
		const groupGet = await res.json()
		setActualGroup(groupGet)
		setMemory([...memori,groupGet])
	}

	const logout = () => {
		setUser(null)
		router.push('/login')
		document.cookie = 'token='
	}

	const saveMessage = (message: any) => {
		setActualGroup({
			...actualGroup,
			messages: [...actualGroup.messages, message],
		})
	}

	const { data } = useQuery(GET_USER)

	useEffect(() => {
		getTokenCookie() && setUser(data && data.getUser)
	}, [data])

	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(() => {
		const socketIo = socketIOClient(urlSocket)
		socketIo.on('data', (message: any) => {
			setActualGroup((group: any) =>
				group && group._id === message.idGroup
					? {
							...group,
							messages: [...group.messages, message],
					  }
					: group
			)
			setMemory((groups:any) => {
				const group = groups.findIndex((group:any) => group._id == message.idGroup)
				if(group !== -1){
					groups[group] = {
						...groups[group],
						messages: [...groups[group].messages, message],
					}
				}
				return groups
			})
		})
		setSocket(socketIo)
	}, [])

	return (
		<Context.Provider
			value={{
				GET_USER,
				UPLOAD_FILE,
				CREATE_USER,
				LOGIN_USER,
				EDIT_USER,
				user,
				setUser,
				logout,
				createGroup,
				groups,
				getGroups,
				getGroup,
				actualGroup,
				setActualGroup,
				viewMembers,
				setViewMembers,
				socket,
				saveMessage,
			}}
		>
			{props.children}
		</Context.Provider>
	)
}
