export const actions = {
	default: async ({ request }) => {
		let data = Object.fromEntries(await request.formData());
		return data;
	}
};
