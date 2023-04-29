import { writable } from 'svelte/store';

function loadingStored() {
	const { subscribe, set, update } = writable(false);

	return {
		subscribe,
		show: () => set(true),
		hide: () => set(false)
	};
}

export const loading = loadingStored();
