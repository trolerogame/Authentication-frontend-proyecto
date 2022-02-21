/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import LoginRegister from '../components/LoginRegister'
import HeaderComponent from '../components/HeadComponent'
import useInput from '../hook/useInput'
import useError from '../hook/useError'
import { Context } from '../context/context'
import { useMutation } from '@apollo/client'
import { setTokenCookie } from '../utils/setTokenCookie'
import { getTokenCookie } from '../utils/getTokenCookie'

const register = () => {
	const [email, validateEmail, setValidateEmail] = useInput()
	const [password, validatePassword, setValidatePassword] = useInput()
	const {error,setErrorFn} = useError()
	const router = useRouter()
	const context = useContext(Context)!
	const [createUser] = useMutation(context.CREATE_USER)
	const [loginUser] = useMutation(context.LOGIN_USER)
	
	const submitRegister = async (e: any) => {
		e.preventDefault()
		if (validateEmail && validatePassword) {
			const created = await createUser({
				variables: {
					email: email.current.value,
					password: password.current.value,
				},
			})
			delete created.data.createUser.__typename
			const {error:errorUser} = created.data.createUser
			setErrorFn(errorUser)
			if(errorUser) return
			const token = await loginUser({variables:{...created.data.createUser}})
			setTokenCookie(token.data.loginUser.token)
			document.location.href = '/personalInfo'
		}
	}

	useEffect(() => {
        getTokenCookie() && router.push('/personalInfo')
    },[router])

	return (
		<>
			<HeaderComponent title='Register' />
			<LoginRegister
				handleSubmit={submitRegister}
				title="Join thousands of learners from around the world"
				texthigh="Master web development by making real-life projects. There are multiple paths for you to choose"
				text="adready a member?"
				linkText="login"
				link="login"
				email={email}
				vlEmail={validateEmail}
				vlPassword={validatePassword}
				error={error}
				password={password}
				setValidateEmail={setValidateEmail}
				setValidatePassword={setValidatePassword}
				buttonText="Start coding now"
			/>
		</>
	)
}

export default register
