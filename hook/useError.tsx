import { useState } from 'react'

const useError = () => {
	const [error, setError] = useState({ vl: false, message: '' })
	const setErrorFn = (error:string) => {
        setError({ vl:!!error, message:error })
    }
	return {error,setErrorFn}
}
export default useError