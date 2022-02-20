export const getPhoto = (file:any) => {
    const data = new FormData()
    data.append('file', file)
    return fetch('https://authentication-node-server.herokuapp.com/uploadFile', {
        method: 'POST',
        body: data,
    })
        .then((res) => res.json()).then(res => res.file)
}