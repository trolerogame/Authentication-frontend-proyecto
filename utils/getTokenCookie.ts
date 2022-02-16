export const getTokenCookie = () => {
	const cookies = document.cookie.split('; ')
	for (let cookie of cookies) {
		const cookieSplit = cookie.split('=')
		if (cookieSplit[0] == 'token') return cookieSplit[1]
	}
}
