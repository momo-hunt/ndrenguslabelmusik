export const handle = async ({ event, resolve }) => {
	let session = event.cookies.get('sessionId') != '' ? event.cookies.get('sessionId') : undefined;

	if (session) {
		session = JSON.parse(session);
		event.locals.user = {
			id: session.id,
			name: session.username,
			token: session.token,
			role: session.role
		};
	}

	const response = await resolve(event);
	return response;
};
