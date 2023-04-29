export const handle = async ({ event, resolve }) => {
	let session = event.cookies.get('sessionId') != '' ? event.cookies.get('sessionId') : undefined;

	const levelRole = (r) => {
		switch (r) {
			case 'superadmin':
				return 5;
				break;
			case 'admin':
				return 4;
				break;
			case 'artis':
				return 1;
				break;
			case 'user':
				return 1;
				break;
			default:
				return 0;
		}
	};

	if (session) {
		session = JSON.parse(session);
		event.locals.user = {
			id: session.id,
			name: session.username,
			token: session.token,
			role: levelRole(session.role)
		};
	}

	const response = await resolve(event);
	return response;
};
