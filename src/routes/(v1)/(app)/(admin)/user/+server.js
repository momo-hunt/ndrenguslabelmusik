import bcrypt from 'bcrypt';
import { json } from '@sveltejs/kit';
import db from '$lib/server/db.js';

export const POST = async ({ request, locals }) => {
	let data = await request.json();

	let token = locals.user.token;
	data['password'] = await bcrypt.hash(data['password'], 10);

	let result = await db.register({ data, token });

	console.log('result s->', data);
	return json({ ok: true, result });
};
