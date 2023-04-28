import db from '$lib/server/db.js';
import { fail } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';
import bcrypt from 'bcrypt';

export const load = async ({ locals }) => {
	let { token, role } = locals.user;
	if (role != 'admin') throw redirect(307, '/');

	let users = await db.collection('user', 'read', { token });
	if (users.error) return { users: [] };

	return { users };
};

export const actions = {
	edit: async ({ request, locals }) => {
		let { id, username, password, confirmPassword, role } = Object.fromEntries(
			await request.formData()
		);

		const token = locals.user.token;
		if (password != confirmPassword) return fail(400, 'Password dan Confirm Password tidak sama.');

		password = password != '' ? await bcrypt.hash(password, 10) : undefined;
		let data = { username, password, role };
		const user = await db.collection('user', 'update', { data, token, id });

		if (user.error) return fail(400, user.message);
		return { id, data };
	}
};
