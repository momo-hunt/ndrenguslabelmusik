import { redirect } from '@sveltejs/kit';

export const load = ({ locals, url }) => {
	let path = url.pathname.split('/');
	path = path[path.length - 1];

	if (locals.user) {
		return { path, user: locals.user };
	}
	throw redirect(308, '/login');
};
