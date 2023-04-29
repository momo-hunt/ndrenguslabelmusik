import { fail } from '@sveltejs/kit';

export const actions = {
	add: async ({ request, locals }) => {
		const data = Object.fromEntries(await request.formData());
		console.log(data);
		return fail(400, 'Salah');
	}
};
