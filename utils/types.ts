import { DocumentNode } from "@apollo/client"
import { Dispatch, MutableRefObject, SetStateAction } from "react"

export type InputType = {
	type?: string 
	reference:any
	setValidate?:any
	textarea?:boolean
	edit?:boolean
	label?:string
	vl:boolean
}

export interface editInputType extends InputType{
    label?: string
    set:any
}

export type reg = 'Email' | 'Password' | 'Phone'

export type FormSchemaType = {
	text: string
	linkText: string
	link: string
	title: string
	texthigh?: string
	handleSubmit(e: any): void
	email: any
	password: any
    buttonText:string
	vlEmail:boolean
	vlPassword:boolean
    setValidateEmail:MutableRefObject<null> | Dispatch<SetStateAction<null>> | null
    setValidatePassword: MutableRefObject<null> | Dispatch<SetStateAction<null>> | null
	error:{
		vl:boolean
		message:string,
	}
}


export interface ContextType {
	user:any
	setUser:any
	GET_USER: DocumentNode
	UPLOAD_FILE: DocumentNode
	CREATE_USER: DocumentNode
	LOGIN_USER: DocumentNode
	EDIT_USER: DocumentNode
	logout():void
	createGroup(data: CreateGroup):Promise<boolean>
	groups:any
	getGroups():void,
	getGroup(id:string):void
	actualGroup:any
	setActualGroup:any
	viewMembers:boolean
	setViewMembers:any
	socket:any
	saveMessage(message:any):void
}

export type CreateGroup = {
	name:string
	description:string
}