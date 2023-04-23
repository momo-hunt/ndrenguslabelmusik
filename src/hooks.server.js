export const handle = async ({ event, resolve }) => {
	event.locals.user =
		event.cookies.get('sessionId') != '' ? event.cookies.get('sessionId') : undefined;
	const response = await resolve(event);
	return response;
};
