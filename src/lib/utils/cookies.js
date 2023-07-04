import { dev } from '$app/environment';

export function setCookie(cookies, name, value, expiresIn = 0) {
	cookies.set(name, value, {
		// send cookie for every page
		path: '/',
		// server side only cookie, so you can't use `document.cookie`
		httpOnly: true,
		// only requests from same site can send cookies
		// https://developer.mozilla.org/en-US/docs/Glossary/CSRF
		sameSite: 'strict',
		expires: new Date(Date.now() + expiresIn),
		// only sent over HTTPS in production
		secure: !dev,
		// secure: process.env.NODE_ENV === 'production',
		// set cookie to expire after a month
		maxAge: 60 * 60 * 24 * 30
	});
}

export function getCookie(cookies, name) {
	return cookies.get(name);
}

export function clearCookie(cookies, name) {
	cookies.delete(name, { path: '/' });
	// setCookie(cookies, name, '');
}