import { useState, useRef } from 'react'

const useInput = () => {
    const input:any = useRef(null)
    const [validate,setValidate] = useState(null)
    return [input,validate,setValidate]
}

export default useInput