import db from '$lib/server/db.js';
import { redirect } from '@sveltejs/kit';

export const load = async ({ locals }) => {
	let { token, role } = locals.user;
	if (role != 'admin') throw redirect(307, '/');

	let users = await db.collection('user', 'read', { token });
	if (users.error) return { users: [] };

	return { users };
};
