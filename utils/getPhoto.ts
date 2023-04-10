import { urlGraphql } from "./urlApis"
export const getPhoto = async (file:any) => {
    const data = new FileReader()
    data.readAsDataURL(file)
    return await new Promise(resolve => {
        data.onloadend = async () => {
            let res = await fetch(`${urlGraphql}/uploadFile`, {
                method: 'POST',
                body: JSON.stringify({data: data.result}),
                headers:{
                    'Content-type':'application/json'
                }
            })
            let reader = await res.json()
            return resolve(reader.file)
        }
    })
}