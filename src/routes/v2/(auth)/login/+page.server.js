import { fail } from '@sveltejs/kit';

export const load = ({ locals, url, cookies }) => {
	if (url.searchParams.has('logout')) {
		console.log('logout ok');
		locals.user = undefined;
		cookies.delete('sessionId');
		return;
	}

	if (locals.user) return { user: locals.user };
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
