/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react'
import { ContainLabel } from '../styles/style-editProfile'
import Image from 'next/image'
import R from '../public/R.png'

const editFile = ({ setFile, img }: any) => {
	const [imagePreview, setImagePreview] = useState({
		src: '',
		height: 300,
		width: 300,
	})
	const fileChange = ({ target: { files } }: any) => {
		files[0] && files[0].type.match(/image-*/)
			? setFile(files[0])
			: setFile(null)
		const fileLoad = new FileReader()
		fileLoad.readAsDataURL(files[0])
		fileLoad.onload = () => {
			setImagePreview({
				height: 300,
				width: 300,
				src: fileLoad.result as string,
			})
		}
	}

	return (
		<div>
			<ContainLabel className="flex align-center">
				<label htmlFor="file">
					<Image
						src={imagePreview.src ? imagePreview : img || R}
						width={50}
						height={50}
						alt="Username Img"
					/>
				</label>
				<b>CHANGE PHOTO</b>
			</ContainLabel>
			<input
				type="file"
				id="file"
				style={{ display: 'none' }}
				onChange={fileChange}
				accept="image/*"
			/>
		</div>
	)
}

export default editFile
