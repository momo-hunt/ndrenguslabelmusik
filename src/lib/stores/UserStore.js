import { writable } from 'svelte/store';

function userStore() {
	const { subscribe, set, update } = writable([]);

	return {
		subscribe,
		set: (d) => set(d),
		add: (d) => update((n) => [d, ...n]),
		delete: (id) => update((n) => n.filter((a) => a.id != id)),
		put: (id, d) => {
			console.log('dd', d);
			return update((n) =>
				n.map((a) => {
					if (a.id == id) a = { ...a, ...d };
					return a;
				})
			);
		}
	};
}

export const user = userStore();
