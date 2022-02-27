import React from 'react'
import { regInput } from '../utils/RegInput'
import { InputType, reg } from '../utils/types'
import { InputStyle } from '../styles/style-loginRegister'
import { EditStyle, Textarea } from '../styles/style-editProfile'
const Input = ({
	type,
	reference,
	setValidate,
	textarea,
	edit,
	label,
	vl,
}: InputType) => {
	const InputHTML = !edit ? InputStyle : EditStyle
	type = label || type
	return (
		<>
			{!textarea ? (
				<InputHTML
					ref={reference}
					type={type}
					name={type}
					validate={vl}
					onKeyUp={(e:any) => {
						const value = e.currentTarget.value
						setValidate(
							value ? value.match(
								regInput[type as reg] 
							) !== null : null
						)
					}}
					placeholder={!edit ? type : `Enter your ${type}...`}
				/>
			) : (
				<Textarea
					ref={reference}
					name={type}
					validate={vl}
					onKeyUp={(e:any) => {
							const value = e.currentTarget.value
							setValidate(
								value ? value.match(
									regInput[type as reg] 
								) !== null : null
							)
						}
					}
					placeholder={`Enter your ${type}...`}
				/>
			)}
		</>
	)
}

export default Input
