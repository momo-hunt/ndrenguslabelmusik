<script>
	import Modal from '$lib/components/Modal.svelte';
	import FormTambahUser from './FormTambahUser.svelte';
	import ListView from './ListView.svelte';
	import TombolPopup from './TombolPopup.svelte';

	import { user } from '$lib/stores/userstore.js';
	import FormEdit from './FormEdit.svelte';

	export let data;

	user.set(data?.users);

	let activeId = '';
	let isShowModalTambah = false;
	let editingId = '';

	function hasEditUser(e) {
		editingId = '';
		activeId = '';
		// console.log('detil', e.detail);
		if (e.detail) user.put(e.detail.id, e.detail.data);
	}

	$: console.log($user);
</script>

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

{#if data?.error}
	<p class="error">
		<strong>Memuat user gagal.</strong><br />{data?.message}
	</p>
{:else}
	<ListView
		{data}
		users={$user}
		on:selectedId={(e) => (activeId = e.detail)}
		selectedId={activeId}
	/>
{/if}

{#if isShowModalTambah}
	<Modal on:close={() => (isShowModalTambah = false)}>
		<h3 slot="header">Tambah User Baru</h3>
		<FormTambahUser on:close={() => (isShowModalTambah = false)} />
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

	p.error {
		padding: 1rem 0;
		text-align: center;
	}
</style>
