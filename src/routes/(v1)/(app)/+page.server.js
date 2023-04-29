import db from '$lib/server/db.js';

export const load = async ({ locals }) => {
	const token = locals.user.token;
	const keuangan = await db.collection('keuangan', 'read', { token });

	return { keuangan };
};
