<script>
	import { Icon, Pencil, Trash } from 'svelte-hero-icons';
	import { user } from '$lib/stores/userStore.js';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let id = '';

	async function onDelete(id) {
		let isConfirm = confirm('Apakah yakin menghapus ?');
		if (isConfirm) user.delete(id);

		const res = await fetch('/user/' + id, { method: 'delete' });
		const result = await res.json();
		console.log(result);
	}

	function onEdit(id) {
		dispatch('onEdit', id);
	}
</script>

<section>
	<button class="edit" on:click={() => onEdit(id)}><Icon src={Pencil} size="24" solid /></button>
	<button class="delete" on:click={() => onDelete(id)}><Icon src={Trash} solid size="24" /></button>
</section>

<style>
	* {
		/* border: var(--border); */
	}

	section {
		width: 100%;
		position: fixed;
		z-index: 99;
		bottom: 0;
		background-color: var(--bg-1);
		display: flex;
		gap: 1rem;
		padding: 1rem 2rem;
	}

	section button {
		width: 100%;
		background-color: var(--bg-2);
		border-radius: 1rem;
	}

	section button.edit {
		background-color: var(--bg-2);
	}

	section button.delete {
		background-color: red;
		color: var(--bg-2);
	}
</style>
