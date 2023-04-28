<script>
	import Modal from '$lib/components/Modal.svelte';
	import FormTambahUser from './FormTambahUser.svelte';
	import ListView from './ListView.svelte';
	import CssLoader from '$lib/components/CssLoader.svelte';
	import TombolPopup from './TombolPopup.svelte';

	import { user } from '$lib/stores/userStore.js';
	import FormEdit from './FormEdit.svelte';

	export let data;

	user.set(data?.users);

	let activeId = '';
	let loader = false;
	let isShowModalTambah = false;
	let editingId = '';

	const submitTambahUser = async (e) => {
		loader = true;
		console.log(e.detail);
		const { username, password, confirmPassword } = e.detail;

		if (password != confirmPassword) return alert('Password dan confirm Password harus sama');

		const res = await fetch('', {
			method: 'post',
			body: JSON.stringify({ username, password })
		});

		const result = await res.json();
		if (result) {
			isShowModalTambah = false;
			loader = false;
		}
	};

	function hasEditUser(e) {
		editingId = '';
		activeId = '';
		// console.log('detil', e.detail);
		if (e.detail) user.put(e.detail.id, e.detail.data);
	}

	// $: console.log($user);
</script>

{#if loader}
	<CssLoader />
{/if}

{#if activeId != ''}
	<TombolPopup id={activeId} on:onEdit={(e) => (editingId = e.detail)} />
{/if}

{#if editingId != ''}
	<FormEdit id={editingId} on:close={hasEditUser} />
{/if}

<section class="button-tambah">
	<button class="tambah-user" type="button" on:click={() => (isShowModalTambah = true)}
		>Tambah User Baru</button
	>
</section>

<ListView users={$user} on:selectedId={(e) => (activeId = e.detail)} selectedId={activeId} />

{#if isShowModalTambah}
	<Modal on:close={() => (isShowModalTambah = false)}>
		<h3 slot="header">Tambah User Baru</h3>
		<FormTambahUser on:submitTambah={submitTambahUser} />
	</Modal>
{/if}

<style>
	/* * {
		border: 0.1px solid red !important;
	} */

	section.button-tambah {
		margin: 0 1rem;
		display: flex;
		margin-top: 1rem;
		justify-content: flex-end;
	}

	section.button-tambah button.tambah-user {
		background-color: var(--bg-2);
		border-radius: 2rem;
	}
</style>
