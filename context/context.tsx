/* eslint-disable react-hooks/rules-of-hooks */
import { createContext, useState } from 'react'
import { useRouter } from 'next/router'
import { gql } from '@apollo/client'
import { ContextType } from '../utils/types'
export const Context = createContext<ContextType|null>(null)

export default function ContextUse(props: any) {
	const router = useRouter()
	const [user,setUser] = useState(null)
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
			loginUser(email: $email, password: $password){
				token,
				user{
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
			){
				token
				error
			}
		}
	`

	const logout = () => {
		setUser(null)
		router.push('/login')
		document.cookie = 'token='
	}

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
				logout
			}}
		>
			{props.children}
		</Context.Provider>
	)
}
