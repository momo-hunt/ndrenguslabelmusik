import { fail } from '@sveltejs/kit';

export const load = ({ url, cookies }) => {
	if (url.searchParams.has('logout')) {
		console.log('logout ok');
		cookies.delete('sessionId');
		return;
	}
};

export const actions = {
	default: async ({ request, cookies }) => {
		const data = Object.fromEntries(await request.formData());

		if (data.username == 'admin' && data.password == 'a1234') {
			cookies.set('sessionId', 'admin');
			return;
		}
		return fail(400, 'Salah input!');
	}
};

// logout: async ({ cookies }) => {

// }
