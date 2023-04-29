import db from '$lib/server/db.js';
import { fail } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';
import bcrypt from 'bcrypt';

export const load = async ({ locals }) => {
	let { token, role } = locals.user;
	if (role < 4) throw redirect(307, '/');

	let users = await db.collection('user', 'read', { token });
	if (users.error) {
		console.log(users);
		return { users: [], error: true, message: users.message };
	}
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
	},

	add: async ({ request, locals }) => {
		let { username, password, confirmPassword } = Object.fromEntries(await request.formData());
		const token = locals.user.token;
		if (password != confirmPassword) return fail(400, 'Password dan Confirm Password tidak sama.');

		password = await bcrypt.hash(password, 10);
		let data = { username, password };
		const user = await db.collection('user', 'create', { data, token });
		console.log(user);

		if (user.error) return fail(400, user.message);
		return user;
	}
};
