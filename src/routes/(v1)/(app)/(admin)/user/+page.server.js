import db from '$lib/server/db.js';

export const load = async ({ locals }) => {
	let token = locals.user.token;
	let users = await db.collection('user', 'read', { token });
	if (users.error) return { users: [] };

	return { users };
};
