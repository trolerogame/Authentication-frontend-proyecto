import React from 'react'
import { editInputType } from '../utils/types'
import Input from './Input'
import { ContainInput } from '../styles/style-editProfile'

const InputEditItem = ({
	reference,
	type,
	label,
	set,
	textarea,
	vl,
}: editInputType) => {
	return (
		<ContainInput>
			<label htmlFor={type}>{label || type}</label>
			<Input
				vl={vl}
				label={label}
				edit
				reference={reference}
				type={type}
				setValidate={set}
				textarea={textarea}
			/>
		</ContainInput>
	)
}

export default InputEditItem
