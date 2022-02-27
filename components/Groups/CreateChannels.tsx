import React from 'react'
import Image from 'next/image'
import { ButtonCreate, ContainCreate, Close } from '../../styles/style-chat'
import plus from '/public/plus-solid.svg'
import xmark from '/public/xmark-solid.svg'
import angleLeft from '/public/angle-left.svg'
const CreateChannels = ({ setModal, setIsTrue, actualGroup, setView,view }: any) => {
	return (
		<ContainCreate className="flex justify-between align-center">
			{!view ? (
				<>
					<p>Channels</p>
					<ButtonCreate onClick={() => setModal(true)}>
						<Image
							src={plus}
							alt="plus"
							width={14}
							height={14}
						/>
					</ButtonCreate>
				</>
			) : (
				<div className="flex align-center">
					<Image
						src={angleLeft}
						alt="plus"
						width={14}
						height={18}
						onClick={() => setView(false)}
					/>
					<p style={{margin:'0 0 0 20px',}}>All channels</p>
				</div>
			)}

			<Close onClick={() => setIsTrue(false)}>
				<Image src={xmark} alt="xmark" width={14} height={14} />
			</Close>
		</ContainCreate>
	)
}

export default CreateChannels
