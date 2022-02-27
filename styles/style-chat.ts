import styled,{css} from 'styled-components'
import { DropDown } from './style-global'


export const ContainChatGroup = styled.div`
	position: relative;
	width: 100%;
	height: 100vh;
	@media (min-width: 768px) {
		display:grid;
		grid-template-columns: 25% 75%;
	}
`

export const ContainChat = styled.div`
	width: 100%;
	height: 100vh;
	background: #252329;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`

export const ContainInput = styled.form`
	position: relative;
	height: 50px;
	margin: 10px 20px;
`

export const Input = styled.input`
	background-color: #3c393f;
	width: calc(100% - 80px);
	height: 50px;
	border-radius: 16px;
	border: none;
	color: #fff;
	padding-left: 20px;
	padding-right: 60px;
	&:focus {
		border: none;
		outline: none;
	}
`

export const SendChat = styled.button`
	position: absolute;
	right: 10px;
	top: 6px;
	width: 40px;
	height: 40px;
	border-radius: 8px;
	border: none;
	background-color: #2f80ed;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
`

export const HeaderChat = styled.header`
	font-size: 18px;
	color: #fff;
	height: 42.31px;
	padding: 10px 20px;
	box-shadow: 0px 4px 4px 0px #00000040;
	p {
		margin: 0 20px;
	}
	img {
		cursor: pointer;
	}
	@media(min-width: 768px) {
		img{
			display:none!important;
		}
	}
`

export const ChatMessages = styled.div`
	height: calc(100% - 110px);
	width: 100%;
	overflow-y:auto ;
`

export const ContainGroup: any = styled.div`
	position: absolute;
	z-index:3;
	width: 90%;
	height: 100vh;
	background: #120f13;
    box-shadow: 0px 4px 4px 0px #00000040;
	left: 0;
	top: 0;
	transition: all 0.15s linear;
    ${({ isTrue }: any) => !isTrue &&  css`
        width: 0%;
        overflow: hidden;
    `}
	@media(min-width: 768px){
		position: relative;
		width: 100%;
	}
`

export const ContainUser: any = styled.div`
	background: #0b090c;
	height: 50px;
	padding: 10px 20px;
	color: #fff;
	p {
		margin: 0 20px;
	}
	#angle {
		cursor: pointer;
        transition:all .1s linear;
		transform: ${({ rotate }: any) =>
			rotate ? 'rotate(90deg)' : 'rotate(-90deg)'};
	}
	.containAngle{
		padding:20px 5px;
		position:relative;
	}
	img{
		border-radius:8px;
		object-fit:cover;
	}
`

export const ContainCreate = styled.div`
	height: 70px;
	padding: 0 15px;
	box-shadow: 0px 4px 4px 0px #00000040;
	p {
		color: #fff;
		font-size: 18px;
	}
    position: relative;
	img{
		cursor:pointer;
		padding:5px;
	}
`

export const ButtonCreate = styled.button`
	width: 32px;
	height: 32px;
	background-color: #252329;
	border-radius: 8px;
	border: none;
	outline: none;
	cursor: pointer;
	display: grid;
	place-content: center;
`

export const Close = styled(ButtonCreate)`
    border-radius:12px;
    background:#120F13;
    position:absolute;
    right:-35px;
	@media(min-width: 768px){
		display:none;
	}
`


export const ContainModal = styled.div`
	width:100%;
	height:100vh;
	background: rgb(0,0,0,.5);
	position:absolute;
	display:flex;
	justify-content: center;
	top:0;
	left:0;
	z-index:4;
`

export const Modal = styled.form`
	max-width:100%;
	width:600px;
	margin:0 20px;
	height:320px;
	background:#120F13;
	border-radius:24px;
	padding:15px 30px;

	h3{
		color:#FFF;
		font-size:18px;
	}

	input,textarea{
		background:#3C393F;
		border-radius:8px;
		color:#fff;
		width: calc(100% - 15px);
		border:none;
		padding-left:15px;
		margin-bottom:20px;
		font-size:18px;
	}
	input::placeholder,textarea::placeholder{
		color:#828282;
	}
	input:focus,textarea:focus{
		outline:none;
	}
	input{
		height:50px;
	}
	textarea{
		padding-top:10px;
		height:105px;
		resize: none;
	}

`

export const ButtonSave = styled.button`
	background:#2F80ED;
	color:#FFF;
	width:100px;
	height:40px;
	border-radius:8px;
	font-size:18px;
	border:none;
	cursor: pointer;
`

export const ContainGroups = styled.div`
	height: calc(100vh - 130px);
	margin:50px 30px;
	overflow-y: auto;
	overflow-x:hidden;
	h3{
		color:#Fff;
		margin:5px 0;
	}
	p{
		color:#E0E0E0;
	}
	.data{
		margin-bottom:40px;
	}
`

export const ContainTitleGroup = styled.div`
	color:#fff;
	font-size:18px;
	margin:10px 0;
	cursor: pointer;

	p{
		margin:0;
		margin-left:25px;
	}
	span{
		width:40px;
		height:40px;
		border-radius:8px;
		background:#252329;
		display:grid;
		place-content: center;
	}
`

export const ContainMembers = styled.div`
	margin:10px 0;
	p{
		margin-left:30px;
	}
	img{
		border-radius:8px;
		object-fit: cover;
	}
`

export const MessageStyle = styled.div`
	padding:10px 25px;
	img{
		border-radius:8px;
		object-fit:cover;
	}
	gap:20px;
`

export const MessageAndDate = styled.div`
	p{
		margin-top:15px;
		color:#E0E0E0;
	}
	b{
		margin:0;
		margin-right:10px;
		font-size:18px;
		color:#828282;
	}
	span{
		font-size:14px;
		color:#828282;
	}
`

export const DropdownChat = styled(DropDown)`
	bottom:0px !important;
	top:-180px;
	left:-150px;
	background:#252329 !important;
	border:1px solid #3C393F!important;
	height:160px;
	& button, a {
		cursor:pointer;
	}
	& button{
		background:none;
		border:none;
		border-top:1px solid #3C393F;
		margin-top:5px;
		padding-top:20px;
		gap:10px;
	}
	a{
		color:#fff;
		gap:10px;
	}
	a:hover{
		background:#3C393F;
	}
`

export const Search = styled.input`
	width: calc(100% - 47px);
	outline:none;
	height:50px;
	border:none;
	background:#3C393F url(${`../public/magnifying-glass-solid.svg`});
	background-position:0% 50%;
	background-size:30px 30px;
	border-radius:8px;
	padding-left: 45px;
	margin-bottom:25px;
	color:#FFF;
	font-weight: 500;
	font-size: 14px;
	&::placeholder{
		color:#828282;
	}
`