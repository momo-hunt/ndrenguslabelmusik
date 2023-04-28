import { fail } from '@sveltejs/kit';
import db from '$lib/server/db.js';
import { redirect } from '@sveltejs/kit';
import bcrypt from 'bcrypt';

export const load = ({ locals, url, cookies }) => {
	if (url.searchParams.has('logout')) {
		console.log('logout ok');
		locals.user = undefined;
		cookies.delete('sessionId');

		throw redirect(300, '/login');
	}

	if (locals.user) return { user: locals.user };
};

export const actions = {
	default: async ({ request, cookies }) => {
		const data = Object.fromEntries(await request.formData());

		try {
			const user = await db.login({ data });
			if (user.error) throw Error(user.message);

			let checkPass = await bcrypt.compare(data['password'], user.password);

			if (!checkPass) throw Error('Username atau password salah.');

			const authUser = await db.authToken(user.index, data);
			console.log('user', authUser);
			if (authUser.error) throw Error(authUser.message);

			const { password, ...rest } = authUser;

			cookies.set('sessionId', JSON.stringify(rest));

			return { user: rest };
		} catch (err) {
			return fail(400, err.message);
		}
	}
};
