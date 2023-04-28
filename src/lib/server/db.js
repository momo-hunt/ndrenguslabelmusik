import { PUBLIC_BASE_URL } from '$env/static/public';

const fetchData = async (q) => {
	console.log('q-', q);
	const time = new Date().getTime().toString();
	const res = await fetch(PUBLIC_BASE_URL + '?t=' + time + '&q=' + JSON.stringify(q));
	const result = await res.json();
	console.log('res-', result);
	return result;
};

const register = async (data) => {
	let sheet = 'user';
	let method = 'create';
	return await fetchData({ ...data, sheet, method });
};

const login = async (data) => {
	let auth = true;
	let sheet = 'user';
	let method = 'login';
	return await fetchData({ ...data, sheet, method, auth });
};

const authToken = async (index, data) => {
	let auth = true;
	let sheet = 'user';
	let method = 'updateToken';
	return await fetchData({ ...data, index, sheet, method, auth });
};

const collection = async (sheet, method, data) => {
	return await fetchData({ ...data, sheet, method });
};

export default { register, collection, login, authToken };
