import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Input from '../components/Input'
import { FormSchemaType } from '../utils/types'
import { ContainCardForm,Card, ButtonForm } from '../styles/style-loginRegister'
import Logo from '../public/devchallenges.svg'
const LoginRegister = ({
	linkText,
	link,
	text,
	email,
	password,
	title,
	texthigh,
	handleSubmit,
    setValidateEmail,
    setValidatePassword,
	vlEmail,
	vlPassword,
    buttonText,
	error
}: FormSchemaType) => {
	return (
		<ContainCardForm>
			<Card>
				<Image src={Logo} alt='logo' />
				<div id="containText">
					<b>{title}</b>
					{texthigh && <p>{texthigh}</p>}
				</div>
				{error.vl && <p>{error.message}</p>}
				<form className="flex flex-column" onSubmit={handleSubmit}>
					<Input
						reference={email}
						vl={vlEmail}
						type="Email"
						setValidate={setValidateEmail}
					/>
					<Input
						reference={password}
						type="Password"
						vl={vlPassword}
						setValidate={setValidatePassword}
					/>
                    <ButtonForm>{buttonText}</ButtonForm>
				</form>
				<p id='link'>
					{text} <Link href={'/' + link}>{linkText}</Link>
				</p>
			</Card>
		</ContainCardForm>
	)
}

export default LoginRegister
