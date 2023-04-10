import { urlGraphql } from "./urlApis"
export const getPhoto = (file:any) => {
    const data = new FormData()
    data.append('file', file)
    return fetch(`${urlGraphql}/uploadFile`, {
        method: 'POST',
        body: data,
    })
        .then((res) => res.json()).then(res => res.file)
}