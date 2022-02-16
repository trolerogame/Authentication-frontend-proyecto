/* eslint-disable react-hooks/rules-of-hooks */
import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react'
import LoginRegister from '../components/LoginRegister'
import { Context } from '../context/context'
import useError from '../hook/useError'
import useInput from '../hook/useInput'
import { getTokenCookie } from '../utils/getTokenCookie'
import { setTokenCookie } from '../utils/setTokenCookie'
const login = () => {
	const router = useRouter()
	const [email, validateEmail, setValidateEmail] = useInput()
	const [password, validatePassword, setValidatePassword] = useInput()
	const {error, setErrorFn} = useError()

	const context = useContext(Context)!
	const [loginUser] = useMutation(context.LOGIN_USER)

	const submitLogin = async (e: any) => {
		e.preventDefault()
		if (validateEmail && validatePassword) {
			const token = await loginUser({
				variables: {
					email: email.current.value,
					password: password.current.value,
				},
			})
			const {user,token:tokenSet,error} = token.data.loginUser 
			setErrorFn(error)
			if(error) return
			setTokenCookie(tokenSet)
			context.setUser(user)
			document.location.href = '/personalInfo'
		}
	}

	useEffect(() => {
		if(getTokenCookie()) router.push('/personalInfo')
	},[router])

	return (
		<LoginRegister
			handleSubmit={submitLogin}
			title="Login"
			text="Don't have an account yet?"
			linkText="register"
			link="register"
			vlEmail={validateEmail}
			vlPassword={validatePassword}
			email={email}
			error={error}
			password={password}
			setValidateEmail={setValidateEmail}
			setValidatePassword={setValidatePassword}
			buttonText="Login"
		/>
	)
}

export default login
