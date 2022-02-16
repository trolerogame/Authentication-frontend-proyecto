export const dataUserConvert = (user:any) => {
    const {username,bio,phone,email,passwordLength} = user
    return [
        ['Name',username],
        ['BIO',bio],
        ['PHONE',phone],
        ['EMAIL',email],
        ['PASSWORD',passwordLength]
    ]
}