import { ApolloClient, InMemoryCache } from '@apollo/client'
import { createUploadLink } from 'apollo-upload-client'
import { urlGraphql } from './urlApis'

function clientFn(token:string){
    return new ApolloClient({
        link: createUploadLink({
            uri: `${urlGraphql}/graphql`,
            headers:{
                authorization: token ? 'Bearer ' + token : ''
            }
        }),
        cache: new InMemoryCache(),
    })
}

export default clientFn