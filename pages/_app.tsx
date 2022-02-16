import { AppProps } from 'next/app'
import { StyleGlobal } from '../styles/style-global'
import { ApolloProvider} from '@apollo/client'
import ContextUse from '../context/context'
import clientApollo from '../utils/apollo-client'
import {useEffect,useState} from'react'
import { getTokenCookie} from '../utils/getTokenCookie'
function MyApp({ Component, pageProps }: AppProps) {
	const [token,setToken] = useState('')
	useEffect(() => {
		setToken(getTokenCookie()!)
	},[])
	return (
		<ApolloProvider client={clientApollo(token)}>
			<ContextUse>
				<StyleGlobal />
				<Component {...pageProps} />
			</ContextUse>
		</ApolloProvider>
	)
}
export default MyApp

