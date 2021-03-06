import { ApolloClient, InMemoryCache } from '@apollo/client'
import { createUploadLink } from 'apollo-upload-client'


function clientFn(token:string){
    return new ApolloClient({
        link: createUploadLink({
            uri: 'https://authentication-node-server.herokuapp.com/graphql',
            headers:{
                authorization: token ? 'Bearer ' + token : ''
            }
        }),
        cache: new InMemoryCache(),
    })
}

export default clientFn