/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from 'next/router'
import React,{useEffect} from 'react'
const index = () => {
  const router = useRouter()
  useEffect(() => {
    router.push('/login')
  },[router])
  return (
    <div></div>
  )
}

export default index