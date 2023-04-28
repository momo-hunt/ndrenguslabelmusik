import { json } from '@sveltejs/kit';
import db from '$lib/server/db.js';

export const DELETE = async ({ params, locals }) => {
	let { id } = params;

	let token = locals.user.token;
	const result = await db.collection('user', 'delete', { id, token });
	console.log('deleting -> ', id);
	console.log('result deleting -> ', result);
	return json({ ok: 'ok' });
};

export const PUT = async ({ params, locals }) => {
	let { id } = params;

	let token = locals.user.token;
	console.log('editing -> ', id);
	return json({ ok: 'ok' });
};
