import React, { useContext } from 'react'
import ReactDOM from 'react-dom'
import { ContainModal, Modal, ButtonSave } from '../styles/style-chat'
import { Context } from '../context/context'
const FormModal = ({ setModal }: any) => {
	const { createGroup } = useContext(Context)!
	const submitCreateGroup = async (e: any) => {
		e.preventDefault()
		const { name: nameGroup, description } = e.target
		const created = await createGroup({
			name: nameGroup.value,
			description: description.value,
		})
		created && setModal(false)
	}
	return ReactDOM.createPortal(
		<ContainModal
			className="flex justify-center align-center"
		>
			<Modal onSubmit={submitCreateGroup}>
				<h3>New Channels</h3>
				<input type="text" name="name" placeholder="Channel Name" />
				<textarea
					name="description"
					id=""
					placeholder="Channel Description"
				></textarea>
				<div className="flex justify-end">
					<ButtonSave>Save</ButtonSave>
				</div>
			</Modal>
		</ContainModal>,
		document.body!
	)
}

export default FormModal
