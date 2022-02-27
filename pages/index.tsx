/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from 'next/router'
import React,{useEffect} from 'react'
import {getTokenCookie} from '../utils/getTokenCookie'
const index = () => {
  const router = useRouter()
  useEffect(() => {
    if(!getTokenCookie()) router.push('/login')
  },[router])
  return (
    <div></div>
  )
}

export default index