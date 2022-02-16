export const getPhoto = (file:any) => {
    const data = new FormData()
    data.append('file', file)
    return fetch('http://localhost:3003/uploadFile', {
        method: 'POST',
        body: data,
    })
        .then((res) => res.json()).then(res => res.file)
}