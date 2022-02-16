/* eslint-disable react-hooks/rules-of-hooks */
import React, { FormEvent, useState, useContext, useEffect } from 'react'
import Link from 'next/link'
import InputEditItem from '../components/InputEditItem'
import Header from '../components/Header'
import { useRouter } from 'next/router'
import EditFile from '../components/editFile'
import useInput from '../hook/useInput'
import { ContainCardForm } from '../styles/style-loginRegister'
import { CardEdit, Save } from '../styles/style-editProfile'
import { Context } from '../context/context'
import { useMutation } from '@apollo/client'
import { setTokenCookie } from '../utils/setTokenCookie'
import { getTokenCookie } from '../utils/getTokenCookie'
import useError from '../hook/useError'
import { getPhoto } from '../utils/getPhoto'

const editProfile = () => {
	const [name, vlName, setVlName] = useInput()
	const [phone, vlPhone, setVlPhone] = useInput()
	const [email, vlEmail, setVlEmail] = useInput()
	const [password, vlPassword, setVlPassword] = useInput()
	const [bio, vlBio, setVlBio] = useInput()
	const [file, setFile] = useState(null)
	const { error, setErrorFn } = useError()
	const router = useRouter()
	const context = useContext(Context)!
	const {user} = context
	const [editUser] = useMutation(context.EDIT_USER)
	const editUserFn = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const data = {
			email:email.current.value,
			name:name.current.value,
			phone:phone.current.value,
			password:password.current.value,
			bio:bio.current.value,
		}
		const isTrue = [
			vlName || !data.name,
			vlPhone || !data.phone,
			vlEmail || !data.email,
			vlPassword || !data.password,
			vlBio || !data.bio,
		]
		if (isTrue.every((e) => e)) {
			const token = await editUser({variables:{
				username:data.name,
				password:data.password,
				email:data.email,
				bio:data.bio,
				phone: data.phone,
				photo:file ? await getPhoto(file) : '',
			}})
			const {error,token:setToken} = token.data.editUser
			setErrorFn(error)
			if(error) return
			setTokenCookie(setToken)
			router.push('/personalInfo')
		}
	}

	useEffect(() => {
		if (!getTokenCookie()) router.push('/login')
	}, [router])

	return (
		<ContainCardForm style={{ marginTop: '100px' }}>
			<Header username={user && user.username} photo={user && user.photo} />
			<div style={{ marginLeft: '15px' }}>
				<Link href="/personalInfo">Back</Link>
			</div>
			<CardEdit>
				<div id="containText">
					<h3>Change Info</h3>
					<p>Changes will be reflected to every services</p>
				</div>
				<form onSubmit={editUserFn}>
					<EditFile setFile={setFile} img={user && user.photo} />
					<InputEditItem
						vl={vlName}
						reference={name}
						type="text"
						label="Name"
						set={setVlName}
					/>
					<InputEditItem
						vl={vlBio}
						reference={bio}
						type="Bio"
						set={setVlBio}
						textarea
					/>
					<InputEditItem
						vl={vlPhone}
						reference={phone}
						type="Phone"
						set={setVlPhone}
					/>
					<InputEditItem
						vl={vlEmail}
						reference={email}
						type="Email"
						set={setVlEmail}
					/>
					<InputEditItem
						vl={vlPassword}
						reference={password}
						type="Password"
						set={setVlPassword}
					/>
					{error.vl && <p className="error">{error.message}</p>}
					<Save>Save</Save>
				</form>
			</CardEdit>
		</ContainCardForm>
	)
}

export default editProfile
