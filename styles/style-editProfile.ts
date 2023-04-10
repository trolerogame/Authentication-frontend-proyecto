import styled from 'styled-components'
import { Card, InputStyle, ButtonForm } from './style-loginRegister'

export const ContainerForm = styled.div`
	width: 700px;
	max-width: 700px;

`

export const CardEdit = styled(Card)`
	border:none;
	h3 {
		font-size: 23px;
		margin: 0;
	}
	p {
		margin: 0;
	}
	@media (min-width:768px) {
		border:1px solid #dbdbdb;
	}
`

export const ContainInput = styled.div`
	margin: 20px 0;
	label {
		display: block;
		font-weight: bold;
	}
`

const textEditStyle = `
    width:calc(100% - 25px);
    max-width:400px;
    padding-left:20px;
    border-radius:10px;
    margin:10px 0;
`

export const EditStyle = styled(InputStyle)`
	height: 40px;
	border: 1px solid
		${({ validate }: any) =>
			validate === null ? '#dbdbdb' : (validate === true ? 'green' : 'rgb(235,87,87)')};

	${textEditStyle}
`

export const Textarea:any = styled.textarea`
	height: 70px;
	padding-top: 20px;
	border:1px solid ${({ validate }: any) =>
			validate === null ? '#dbdbdb' : (validate === true ? 'green' : 'rgb(235,87,87)')};
	${textEditStyle}
`

export const Save = styled(ButtonForm)`
	width: 80px;
	height: 40px;
	font-size: 20px;
	border-radius: 10px;
`

export const ContainLabel = styled.div`
	label {
		width: 50px;
		height: 50px;
		border-radius: 5px;
	}
	label:hover {
		opacity: 0.5;
	}
	b {
		margin: 0 10px;
		font-size: 15px;
		color: #666;
	}
	img{
		border-radius:10px;
		object-fit: cover;
	}
`
